let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../portfolio.json/project.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        //console.log(projects); //this variable should match the one about which is the projects//
        proj =projects;
        findProjectInJSON(projects);
        //parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

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

function buildPage(project){
    document.getElementById("project").innerHTML += `<h1 class="title">${project.name}</h1>
    <div class="text"><h2>${project.subtitle}</h2>
    <p>${project.abstract}</p>
    <p>description: ${project.description}</p>
    <p>categrory: ${project.category}</p></div>`;
    document.getElementById("project").innerHTML += `<img src="${project.mainimg}" alt="${project.name}" />`;
}