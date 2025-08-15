//Variables
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const copyBtn = document.getElementById("copy-quote");

//Sve boje za pozadinu
const colors = ["#1b1b1b", "#2c3e50", "#34495e", "#2c2c54", "#1c2833", "#4b367c", "#3a3a3a", "#162447", "#222831", "#0d1b2a"];

//Event Listeners

newBtn.addEventListener("click", prikaz);
tweetBtn.addEventListener("click", deli);
copyBtn.addEventListener("click", kopiraj);

//Functions

function kopiraj () {
    const text = `"${quote.innerText}" ${author.innerText}`;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerText = "Copied!";

        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    })
    .catch(err => {
        console.error("Greska pri kopiranju:", err);
    });
}

function deli () {
    const text = `"${quote.innerText}" ${author.innerText}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // otvara Twitter u novom tabu
}

async function prikaz () {

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    
    try{
        quote.innerText = "Učitavanje...";
        author.innerText = "";
        const response = await fetch("quotes.json");
        if(!response.ok) throw new Error("Problem sa ucitavanjem fajla.");

        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        quote.innerText = data[randomIndex].quote;
        author.innerText = `--${data[randomIndex].author}`;
    }
    catch(error){
        quote.innerText = "Greska pri ucitavanju citata.";
        author.innerText = "";
        console.log(error);
    }
}

