// function play() {
//     const homesection = document.getElementById('home-screen')
//     console.log(homesection.classList);
//     homesection.classList.add('hidden');
//     const platgroundsection = document.getElementById('play-ground');
//     console.log(platgroundsection.classList)
//     platgroundsection.classList.remove('hidden');
// }
function handleKeyboardPressButton(event) {
    const playerpress = event.key
    console.log('player press', playerpress);
    const CureentAlphabatelement = document.getElementById('current-alphabat');
    const currentAlphabat = CureentAlphabatelement.innerText;
    const expectedalphabat = currentAlphabat.toLowerCase();
    console.log(playerpress, currentAlphabat);
    if (playerpress === 'Escaped') {
        GameOver();
    }
    if (playerpress === expectedalphabat) {
        console.log("you win")
        const currentscoreelement = document.getElementById('current-score');
        const currentScoretext = currentscoreelement.innerText;
        const curentScore = parseInt(currentScoretext);
        console.log(curentScore);
        const newScore = curentScore + 1;
        currentscoreelement.innerText = newScore;



        console.log("you have correctky press ", expectedalphabat.toUpperCase());
        removeBackgroundColorById(expectedalphabat);
        continueGeme();
    }
    else {
        console.log("you lsoe a life and lose")
        const currentlifeElement = document.getElementById('current-life')
        const currentLifeText = currentlifeElement.innerText;
        const CurentLife = parseInt(currentLifeText);
        console.log(CurentLife);
        const newLife = CurentLife - 1;
        currentlifeElement.innerText = newLife;
        if (newLife === 0) {
            GameOver()
        }


    }

}
function GameOver() {
    hideElementID('play-ground');
    ShowelementId('final-score');
    const lastscore = getTextElementById('current-score')
    console.log(lastscore);
    setTextElementbyID('game-score', lastscore)

    const currentAlphabat = getelementTexr('current-alphabat')
    removeBackgroundColorById(currentAlphabat);


}
document.addEventListener('keyup', handleKeyboardPressButton)
function play() {
    hideElementID('home-screen')
    hideElementID('final-score')
    ShowelementId('play-ground')
    setTextElementbyID('current-life', 3);
    setTextElementbyID('current-score', 0)
    continueGeme();
}
function continueGeme() {
    const alpha = rendomAlphabetGet();
    console.log('your current alpabat', alpha)

    const CureentAlphabatelement = document.getElementById('current-alphabat')
    CureentAlphabatelement.innerText = alpha;
    getbackgroundColor(alpha);

}

function rendomAlphabetGet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphabet.split('');

    const random = Math.random() * 25;
    const index = Math.round(random);
    const randomLetter = alpha[index];
    console.log(randomLetter, index);
    return randomLetter;
}
