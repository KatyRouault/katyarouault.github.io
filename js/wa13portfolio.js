fetch('../portfolio.json/project.json')
    .then(response=>{
        return response.json();
    }).then(projects => {
        console.log(projects); //this variable should match the one about which is the projects//
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="/projects_folder/${data.projects[i].subdomain}.html>
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="../img/port (${i+1}).jpeg"></div>
        <div class="description"><h2>${data.projects[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div></a>`;
    }
}
//TO DO//
//when getting images call them port (1), port (2), and so on. either make them png or change the htmlin this java//

// the ${} refers to print the error above it//
//=> is to return responses faster//
//the function parseData(data) is defining it//