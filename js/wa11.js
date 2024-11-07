const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring the array of image filenames and their alt text
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altText = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'Rocks on a sandy beach',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of a large red leaf',
    'pic5.jpg': 'An orange butterfly on a leaf'
};

// Looping through images
images.forEach(imageFile => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/${imageFile}`);
    newImage.setAttribute('alt', altText[imageFile]);
    thumbBar.appendChild(newImage);

    // Adding click event listener for each thumbnail
    newImage.addEventListener('click', () => {
        displayedImage.src = `../img/${imageFile}`;
        displayedImage.alt = altText[imageFile];
    });
});

// Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
