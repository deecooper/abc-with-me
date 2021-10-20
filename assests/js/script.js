let currentLetter;
//antonio//
//an array with an object inside with the illsutrations and audio//
let illustrations = [
    {'image': "apple.png", 'sound':'a-is-for.mp3'},
    {'image': "boat.png", 'sound':'b-is-for.mp3'},
    {'image': "car.png", 'sound':'c-is-for.mp3'},
    {'image': "dog.png", 'sound':'d-is-for.mp3'},
    {'image': "elephant.png", 'sound':'e-is-for.mp3'},
    {'image': "fireman.png", 'sound':'f-is-for.mp3'},
    {'image': "girl.png", 'sound':'g-is-for.mp3'},

];


function chooseIllustration() {
    //choosing the random illustration to show up on screen//
    let randomNum = Math.floor(Math.random() * illustrations.length);
    document.getElementById("alphabet-illustration").src = '/assests/images/illustrations/' + illustrations[randomNum]['image'];
    currentLetter = illustrations[randomNum];

}

function playAudio(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play();
    return true;
}








// code institute love maths//
document.addEventListener("DOMContentLoaded", function() {
    let instructionsButton = document.getElementById("instructions");
    let audioButton = document.getElementById("sound");
    instructionsButton.addEventListener("click", function(){
        playAudio('/assests/audio/instructions.mp3');
    });

    audioButton.addEventListener("click", function(){
        playAudio('/assests/audio/' + currentLetter["sound"]);

    })

    chooseIllustration();

})




function runGame() {
    let audio = document.getElementById("audio");
    audio.play();

}


