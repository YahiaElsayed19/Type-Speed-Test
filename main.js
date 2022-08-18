const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];
let wordsComplete = words;

// Setting Levels
const lvls = {
    Easy: 10,
    Normal: 6,
    Hard: 3,
};
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let theUpcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMsg = document.querySelector(".finish");
let buttons = document.querySelector(".buttons");
let buttonsContainer = Array.from(buttons.children)
let defaultLevelName, defaultLevelSeconds;
let easyButton = document.querySelector(".easy");


easyButton.onclick = function () {
    buttonsContainer.forEach((btn) => {
        btn.classList.remove("active")
    })
    easyButton.classList.add("active");
    defaultLevelName = "Easy";
    defaultLevelSeconds = lvls[defaultLevelName];
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
    startButton.onclick = function () {
        this.remove();
        input.focus();
        genWord();
    };
};
let normalButton = document.querySelector(".normal");
normalButton.onclick = function () {
    buttonsContainer.forEach((btn) => {
        btn.classList.remove("active")
    })
    normalButton.classList.add("active");
    defaultLevelName = "Normal";
    defaultLevelSeconds = lvls[defaultLevelName];
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
    startButton.onclick = function () {
        this.remove();
        input.focus();
        genWord();
    };
};
let hardButton = document.querySelector(".hard");
hardButton.onclick = function () {
    buttonsContainer.forEach((btn) => {
        btn.classList.remove("active")
    })
    hardButton.classList.add("active");
    defaultLevelName = "Hard";
    defaultLevelSeconds = lvls[defaultLevelName];
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
    startButton.onclick = function () {
        this.remove();
        input.focus();
        genWord();
    };
};



input.onpaste = function () {
    return false;
};
startButton.onclick = function () {
    defaultLevelName = "Normal";
    defaultLevelSeconds = lvls[defaultLevelName];
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
    this.remove();
    input.focus();
    genWord();
};

function genWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
    theWord.appendChild(document.createTextNode(randomWord));
    theUpcomingWords.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        theUpcomingWords.appendChild(div);
    }
    startPlay();
}
function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML == 0) {
            clearInterval(start);
            if (
                theWord.innerHTML.toLocaleLowerCase() ===
                input.value.toLocaleLowerCase()
            ) {
                input.value = "";
                theWord.innerHTML = "";
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWord();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("Great Job!");
                    span.appendChild(spanText);
                    finishMsg.appendChild(span);
                    theUpcomingWords.remove();
                    retry()
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMsg.appendChild(span);
            }
        }
    }, 1000);
}
