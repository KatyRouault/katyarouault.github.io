let myData = {}

function fetchData() {
    comicNumber = Math.floor(Math.random() * 3000) +1;  
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else {
                console.log(res);
                }
              }  )
        .then(res => {
            myData = res;
            console.log(myData)
            //title
            document.getElementById("title").innerHTML = myData.title;
            //image
            document.getElementById("comic").src = myData.img;
            document.getElementById("comic").setAttribute("alt", myData.alt);
            //date
            let m = myData.month;
            let d = myData.day;
            let y = myData.year;

            document.getElementById("date").innerHTMl = (m + "/" + d + "/" + y)
    })

    .catch(error => {console.log(error)})
}

fetchData();

document.getElementById("generate").addEventListener("click", e => {fetchData();});

// Returns a random integer from 0 to 99:
//we do => because its a more consise way to format your function
//. means is
//return if okay and put through with json
//{} returns or finishes code

//second then statement
//comment in what you still need to help
//titles ect. comes from the first links she gave in the assignment
//inner HTMl means we are putting that in the html
//img is in the comic so we call comic
//let for interchangable characters like the date
//always end in semicolon ;
//currly brackets when its something dynamic
//tells the computure we want to run that function
//addeventlistener is for buttons to click