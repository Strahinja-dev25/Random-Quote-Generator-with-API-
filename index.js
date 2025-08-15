//Variables
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const copyBtn = document.getElementById("copy-quote");

//Sve boje za pozadinu
//const colors = [];
//const randomColor = colors[Math.round(Math.random() * colors.length)];
//document.body.style.backgroundColor = randomColor;

//Event Listeners

newBtn.addEventListener("click", prikaz);
tweetBtn.addEventListener("click", deli);
copyBtn.addEventListener("click", kopiraj);

//Functions

function kopiraj () {

}

function deli () {

}

//Treba napraviti loader
//Error handling (try i catch)

function prikaz () {
    //fetch-ovanje podataka sa nekog public API-ja (npr. https://api.quotable.io/random).
    //Prikaz tog teksta
    //Prikaz autora
}