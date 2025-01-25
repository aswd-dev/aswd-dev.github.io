// single joke example

// Joke Api : https://v2.jokeapi.dev/joke/Programming?type=single


const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single';

const getJokeBtn = document.querySelector('#get-joke-btn');
const jokeParagraph = document.querySelector('#joke-paragraph');

getJokeBtn.addEventListener('click', function() {
   fetch(jokeApiUrl)
    .then(function (response) {
        console.log(response);
        const parsedResponse = response.json();
        return parsedResponse;
    })
    .then(function(jokeData){
        console.log(jokeData);
        jokeParagraph.textContent = jokeData.joke;
    })
    .catch(function(error){
        console.log("Error: ", error);
    });
});


// multiple jokes example

// Joke Api  



const getJokesBtn = document.getElementById('get-jokes-btn');
const jokesAmountInput = document.getElementById('jokes-amount');
const jokesContainer = document.getElementById('jokes-container');

getJokesBtn.addEventListener('click', function() {
     const amount = +jokesAmountInput.value;

     if (amount < 0){
        return;
     }
     const url = `${jokeApiUrl} &amount=${amount}`;
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function(jokesData){
            console.log(jokesData);
            jokesContainer.innerHTML = '';
            const ul = document.createElement('ul');
            for (const item of jokesData.jokes){
            const li = document.createElement('li')
            li.textContent = item.joke;
            ul.appendChild(li);
        }
        jokesContainer.appendChild(ul);
            });
        });




