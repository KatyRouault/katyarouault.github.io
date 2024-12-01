let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
let projImageIndex = 1;

//Reading project json data
fetch('../portfolio.json/project.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        proj =projects;
        findProjectInJSON(projects);
        showProjImage(projImageIndex);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

//Looping through projects and finding subdomain
function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
    }else{
        continue;
    }
    }
}

//Building HTML from json
function buildPage(project){
    document.getElementById("project").innerHTML += `<h1 class="title">${project.name}</h1>
    <div class="text"><h2>${project.subtitle}</h2>
    <p>${project.abstract}</p>
    <p>description: ${project.description}</p>
    <p>categrory: ${project.category}</p></div>`;

    //Looping through project images and making carousel
    const carousel = document.getElementById("carousel");
    for(let i=0; i<project.projimages.length; i++){
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        div.innerHTML = `<img class="img-carousel" src="${project.projimages[i]}" style="width:100%">`;
        carousel.appendChild(div);
    }
}

// Next/previous controls
function plusProjImage(n) {
    showProjImage(projImageIndex += n);
  }
  
//code to show project image selected and hide other images
function showProjImage(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) {
        projImageIndex = 1;
    }
    if (n < 1) {
        projImageIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[projImageIndex-1].style.display = "block";
    }
    
}