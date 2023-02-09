let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let resetButton = document.getElementsByClassName('btn__reset')
let missed = 0;
let hearts = document.querySelectorAll('img');

let phrases = ['blessing in disguise', 'dime a dozen', 'bite the bullet', 'beat around the bush', 'pull yourself together']
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
        if(liElementsAll[i].innerHTML === pressedButton) {
            liElementsAll[i].classList.add('show');
            matchFound.push(liElementsAll[i].innerHTML);
        }
    }
    return matchFound
}

//Event Listener for clicked keyboard on screen
qwerty.addEventListener('click', (event) => {
    let checkLetterVariable = checkLetter(event.target.innerHTML);
    if (event.target.className !== "chosen" && event.target.className !== "keyrow" && event.target.className !== "section") {
    event.target.classList.add("chosen");
    console.log(checkLetterVariable);
    checkWin();
    if (checkLetterVariable.length === 0) {
        let hearts = document.querySelectorAll('img');
        hearts[0 + missed].src = "images/lostHeart.png";
        missed = missed + 1;
        checkWin();
    }
    }
    })

function checkWin() {
    let classLetter = document.getElementsByClassName('letter');
    let classShow = document.getElementsByClassName('show');
    if (classLetter.length === classShow.length) {
        let overlay = document.getElementById('overlay');
        overlay.classList.add('win');
        document.getElementsByClassName('title')[0].innerHTML = "YOU WON!"
        overlay.style.display = 'flex';
        let buttonReset = document.createElement('a');
        buttonReset.className = "btn__reset"
        buttonReset.innerHTML = "Reset Game";
        overlay.appendChild(buttonReset);
        document.getElementsByClassName('btn__reset')[0].remove();
        buttonReset.addEventListener('click', () => {
            let allButtons = document.querySelectorAll('button');
            let allLetter = document.getElementsByClassName('letter');
            let allSpace = document.getElementsByClassName('space');
            let allShow = document.getElementsByClassName('show');
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove("chosen");
            }
            for (let i = 0; i = allShow.length; i++) {
                allShow[0].remove();
            }
            for (let i = 0; i = allLetter.length; i++) {
                allLetter[0].remove();
            }
            for (let i = 0; i = allSpace.length; i++) {
                allSpace[0].remove();
            }
            addPhraseToDisplay(getRandomPhraseAsArray(phrases));
            missed = 0;
            for (let i = 0; i < hearts.length; i ++) {
            hearts[i].src = "images/liveHeart.png";
    }
            document.getElementById('overlay').style.display = "none";
        })
    } else if (missed > 4) {
        overlay.classList.add('lose');
        document.getElementsByClassName('title')[0].innerHTML = "YOU LOST!";
        overlay.style.display = 'flex';
        let buttonReset = document.createElement('a');
        buttonReset.className = "btn__reset"
        buttonReset.innerHTML = "Reset Game";
        overlay.appendChild(buttonReset);
        document.getElementsByClassName('btn__reset')[0].remove();
        buttonReset.addEventListener('click', () => {
            let allButtons = document.querySelectorAll('button');
            let allLetter = document.getElementsByClassName('letter');
            let allSpace = document.getElementsByClassName('space');
            let allShow = document.getElementsByClassName('show');
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove("chosen");
            }
            for (let i = 0; i = allShow.length; i++) {
                allShow[0].remove();
            }
            for (let i = 0; i = allLetter.length; i++) {
                allLetter[0].remove();
            }
            for (let i = 0; i = allSpace.length; i++) {
                allSpace[0].remove();
            }
            addPhraseToDisplay(getRandomPhraseAsArray(phrases));
            missed = 0;
            for (let i = 0; i < hearts.length; i ++) {
            hearts[i].src = "images/liveHeart.png";
    }
            document.getElementById('overlay').style.display = "none";
        })
    }
}