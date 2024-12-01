let proj;
let slideIndex = 1;


fetch('../portfolio.json/project.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        console.log(projects); //this variable should match the one about which is the projects//
        proj =projects;
        parseData(projects);
        showSlides(slideIndex);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../projects_folder/${data.projects[i].subdomain}.html">
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="../img/port (${i+1}).jpg"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div></a>`;
    } 
    const carousel = document.getElementById("carousel");
    for(let i=0; i<data.carousel.length; i++){
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.innerHTML = `<img class="img-carousel" src="${data.carousel[i].src}" alt="${data.carousel[i].alt}" style="width:30%">`;
        carousel.appendChild(div);
    }
}

for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear"){
        for(i=0;i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
            for(i=0; i<proj.projects.length;i++){
                if(proj.projects[i].category.includes(button) == true){
                    document.getElementById(proj.projects[i].subdomain).style.display = "flex";//shows the project if its in the selected category//
                }else{
                    document.getElementById(proj.projects[i].subdomain).style.display = "none";//hides the project if it is not a category//
                }
            }
    }else{
        console.log("error, button value is undefined");
    }
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[slideIndex-1].style.display = "block";
      //console.log(slides[i]);
    }
    console.log(slides[slideIndex-1]);
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");

    }
    
    dots[slideIndex-1].className += " active";
  }


//TO DO//
//when getting images call them port (1), port (2), and so on. either make them png or change the htmlin this java//

// the ${} refers to print the error above it//
//=> is to return responses faster//
//the function parseData(data) is defining it//