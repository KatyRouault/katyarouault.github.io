let letters = [];
let gridSpacing;
let verticalSpacing;
let word = "Katy Rouault";
let startTime;
let mode = 'spiral';
let bouncePositions = [];
let transitionTime = 4000;
let theta = 0;
let pointsArray;
let myFont;
let fontSize;

function preload() {
  myFont = loadFont('../assets/Poppins-Regular.ttf'); // Make sure this path is correct
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-holder');
  textFont(myFont);
  textSize(24);
  textAlign(CENTER, CENTER);
  noStroke();
  background('rgb(214, 208, 201)');

  resetSketch();
  startTime = millis();
}

function draw() {
  background('rgb(214, 208, 201)'); // Match your site’s background

  let timeElapsed = millis() - startTime;

  if (timeElapsed > transitionTime) {
    startTime = millis();
    switch (mode) {
      case 'spiral': mode = 'vertical'; break;
      case 'vertical': mode = 'bounce'; break;
      case 'bounce': mode = 'perlinNoise'; break;
      case 'perlinNoise': mode = 'lineRotation'; break;
      default: mode = 'spiral'; break;
    }
  }

  if (mode === 'vertical') {
    renderVertical(timeElapsed);
  } else if (mode === 'bounce') {
    renderBounce();
  } else if (mode === 'perlinNoise') {
    renderPerlin();
  } else if (mode === 'lineRotation') {
    renderLines();
  } else {
    renderSpiral();
  }
}

function resetSketch() {
  letters = [];
  bouncePositions = [];

  gridSpacing = min(windowWidth, windowHeight) / 8;
  verticalSpacing = gridSpacing / 2;

  for (let y = 0; y < height + gridSpacing; y += gridSpacing) {
    for (let x = 0; x < width + gridSpacing; x += gridSpacing) {
      letters.push({
        x, y,
        chars: word.split(''),
        rotationOffset: random(TWO_PI),
        direction: random() > 0.5 ? 1 : -1
      });
    }
  }

  for (let i = 0; i < word.length; i++) {
    bouncePositions.push({
      x: random(width),
      y: random(height),
      speedX: random(0.9, 1) * (random() > 0.5 ? 1 : -1),
      speedY: random(0.9, 1) * (random() > 0.5 ? 1 : -1),
    });
  }

  // Adjust font size and center the word
  fontSize = min(width, height) / 6;
  pointsArray = myFont.textToPoints(
    word,
    width / 2 - fontSize * 2.5,
    height / 2 + fontSize / 3,
    fontSize,
    { sampleFactor: 0.1 }
  );
}

function renderVertical(timeElapsed) {
  let charIndex = int(timeElapsed / 200) % word.length;
  for (let l of letters) {
    let yOffset = (charIndex % 2 === 0 ? l.direction : -l.direction) * verticalSpacing;
    fill(255);  // White
    text(l.chars[charIndex], l.x, l.y + yOffset);
  }
}

function renderBounce() {
  for (let i = 0; i < word.length; i++) {
    let b = bouncePositions[i];
    b.x += b.speedX;
    b.y += b.speedY;

    if (b.x > width || b.x < 0) b.speedX *= -1;
    if (b.y > height || b.y < 0) b.speedY *= -1;

    fill(255); // White
    text(word.charAt(i), b.x, b.y);
  }
}

function renderPerlin() {
  noStroke();
  for (let i = 0; i < pointsArray.length; i++) {
    let pt = pointsArray[i];
    let nx = noise(i * 0.1 + frameCount * 0.01) * 30 - 15;
    let ny = noise(i * 0.1 + frameCount * 0.01 + 1000) * 30 - 15;

    fill(255); // White
    ellipse(pt.x + nx, pt.y + ny, 4);
  }
}

function renderLines() {
  strokeWeight(1.5);
  for (let pt of pointsArray) {
    push();
    translate(pt.x, pt.y);
    rotate(theta);
    stroke(255); // White
    line(-8, 0, 8, 0);
    pop();
  }
  theta += 0.01;
}

function renderSpiral() {
  let t = millis() * 0.001;
  for (let l of letters) {
    let angleStep = TWO_PI / l.chars.length;
    for (let i = 0; i < l.chars.length; i++) {
      let angle = angleStep * i + t + l.rotationOffset;
      let radius = 25;
      let charX = l.x + cos(angle) * radius;
      let charY = l.y + sin(angle) * radius;

      fill(255); // White
      text(l.chars[i], charX, charY);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetSketch();
}

// New function to hide the overlay
function hideOverlay() {
    const sketchOverlay = document.getElementById('sketch-overlay');
    sketchOverlay.classList.add('hidden');
}

function mousePressed() {
    hideOverlay();  // Hide the overlay when the canvas is clicked
    
    const canvas = select('canvas');
    canvas.style('z-index', '-1'); // Move canvas behind other content (negative z-index)
    canvas.style('position', 'absolute'); // Ensure the canvas stays in position
    canvas.style('top', '0'); // Set top alignment to 0
    canvas.style('left', '0'); // Set left alignment to 0
  
    // The animation continues running in the background
}

// Wait for the document to fully load before attaching event listeners
window.onload = function() {
    const sketchOverlay = document.getElementById('sketch-overlay');
    
    // Wait for the canvas to be clicked, hide the animation
    sketchOverlay.addEventListener('click', hideOverlay);
    
    // Portfolio button click handling
    const portfolioLink = document.getElementById('portfolio-link');
    portfolioLink.addEventListener('click', hideOverlay);  // Hide animation when portfolio button is clicked
};
