// Step 1: Define the API endpoint for fetching a programming joke
const jokeApiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';

// Step 2: Add event listener to the button to call the getJoke function
document.getElementById('get-joke-btn').addEventListener('click', getJoke);

// Step 3: Define the getJoke function to fetch a joke from the API
function getJoke() {
    console.log('Button clicked!'); // Check if the button click is detected
    
    // Fetch joke from the API
    fetch(jokeApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
        })
        .then(data => {
            console.log('Joke fetched:', data); // Log the fetched joke
            // Step 4: Call displayRes to display the joke in the paragraph
            displayRes(data[0].joke);
        })
        .catch(error => {
            console.error('Error fetching joke:', error); // Log any errors
            alert('There was an error fetching the joke.');
        });
}

// Step 5: Define the displayRes function to show the joke in the paragraph
function displayRes(joke) {
    // Get the paragraph element and update its text content with the joke
    document.getElementById('joke-paragraph').textContent = joke;
}

// Step 6: (Optional) Display a joke when the page first loads
getJoke();
