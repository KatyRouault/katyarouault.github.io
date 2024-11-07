// Function 1: tellFortune
function tellFortune(children, partner, location, job) {
    const fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.getElementById("fortune").innerHTML += fortune + "<br>";
}

// Calling tellFortune with different values
tellFortune(2, "Alex", "Paris", "Engineer");
tellFortune(3, "Jordan", "New York", "Artist");
tellFortune(1, "Taylor", "Tokyo", "Chef");


// Function 2: calculateDogAge
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const result = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById("dogAge").innerHTML += result + "<br>";
}

// Calling calculateDogAge with different values
calculateDogAge(3);
calculateDogAge(5);
calculateDogAge(7);

// Challenge: calculate dog age based on user input
function calculateDogAgeFromInput() {
    const puppyAge = document.getElementById("dogAgeInput").value;
    if (puppyAge) {
        calculateDogAge(puppyAge);
    }
}


// Function 3: reverseNumber
function reverseNumber(number) {
    const reversed = number.toString().split("").reverse().join("");
    document.getElementById("reverseNumber").innerHTML += `Reversed number: ${reversed} <br>`;
}

// Calling reverseNumber with different values
reverseNumber(32243);
reverseNumber(12345);


// Function 4: alphabeticalOrder
function alphabeticalOrder(str) {
    const sortedStr = str.split("").sort().join("");
    document.getElementById("alphabeticalOrder").innerHTML += `Alphabetical order: ${sortedStr} <br>`;
}

// Calling alphabeticalOrder with different values
alphabeticalOrder("webmaster");
alphabeticalOrder("javascript");


// Function 5: capitalizeWords
function capitalizeWords(str) {
    const capitalized = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    document.getElementById("capitalizeWords").innerHTML += `Capitalized: ${capitalized} <br>`;
}

// Calling capitalizeWords with different values
capitalizeWords("the quick brown fox");
capitalizeWords("hello world from javascript");
