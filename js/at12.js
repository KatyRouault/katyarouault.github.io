let myData = {};

function fetchData() {
    const comicNumber = Math.floor(Math.random() * 3000) + 1;  
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.error("HTTP error: ", res.status);
                throw new Error("Failed to fetch comic data");
            }
        })
        .then(res => {
            myData = res;
            console.log(myData);
            // Update title
            document.getElementById("title").innerHTML = myData.title;
            // Update image
            document.getElementById("comic").src = myData.img;
            document.getElementById("comic").setAttribute("alt", myData.alt);
            // Update date
            const date = `${myData.month}/${myData.day}/${myData.year}`;
            document.getElementById("date").innerHTML = date;
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        });        
}

// Ensure DOM is fully loaded before adding event listener
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    document.getElementById("generate").addEventListener("click", fetchData);
});

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