let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let resetButton = document.getElementsByClassName('btn__reset')
let missed = 0;

let phrases = ['Blessing in Disguise', 'Dime a Dozen', 'Bite the Bullet', 'Beat Around the Bush', 'Pull Yourself Together']
let randomPhrase = getRandomPhraseAsArray(phrases);
resetButton[0].addEventListener('click', hideOverlay);

function hideOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
};


//Function to choose a random phrase from the phrases variable
function getRandomPhraseAsArray(arrayParameter) {
    let arrayLength = arrayParameter.length;
    let randomPhrase = arrayParameter[(Math.floor(Math.random() * arrayLength))];
    return randomPhrase;
};

//Function to loop through the array of characters from the random phrase
function addPhraseToDisplay(charactersArray) {
    for (let i = 0; i < charactersArray.length; i++) {
    console.log(charactersArray[i]);
    let li = document.createElement('li');
    li.innerHTML = charactersArray[i];
    document.querySelector('ul').appendChild(li);
    if (li.innerHTML === " ") {
        li.className = 'space';
    }
    else {
        li.className = "letter";
    }
  }
};
addPhraseToDisplay(randomPhrase);

//Function to check the pressed letter for a match
function checkLetter(pressedButton) {
    let liElementsAll = document.getElementsByClassName('letter');
    let matchFound = [];
    for (let i = 0; i < liElementsAll.length; i++) {
        if(liElementsAll[i].innerHTML === pressedButton.toUpperCase()) {
            liElementsAll[i].classList.add('show');
            matchFound.push(liElementsAll[i]);
        }
    }  
    console.log(liElementsAll);
    return matchFound
}
// checkLetter();

//Event Listener for clicked keyboard on screen
qwerty.addEventListener('click', (event) => {
    if (event.target.className !== "chosen" && event.target.className !== "keyrow") {
    event.target.classList.add("chosen");
    checkLetter(event.target.innerHTML.toUpperCase());
    }
})