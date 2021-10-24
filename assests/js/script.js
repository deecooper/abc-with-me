let currentLetter;
let score = 0;

//antonio//
//an array with an object inside with the illsutrations and audio//
let illustrations = [
    {'image': "apple.png", 'sound':'a-is-for.mp3', 'answer': 'a'},
    {'image': "boat.png", 'sound':'b-is-for.mp3', 'answer': 'b'},
    {'image': "car.png", 'sound':'c-is-for.mp3', 'answer': 'c'},
    {'image': "dog.png", 'sound':'d-is-for.mp3', 'answer': 'd'},
    {'image': "elephant.png", 'sound':'e-is-for.mp3', 'answer': 'e'},
    {'image': "fireman.png", 'sound':'f-is-for.mp3', 'answer': 'f'},
    {'image': "girl.png", 'sound':'g-is-for.mp3', 'answer': 'g'},
    {'image': "house.png", 'sound':'h-is-for.mp3', 'answer': 'h'},
    {'image': "icecream.png", 'sound':'i-is-for.mp3', 'answer': 'i'},
    {'image': "juice.png", 'sound':'j-is-for.mp3', 'answer': 'j'},
    {'image': "kite.png", 'sound':'k-is-for.mp3', 'answer': 'k'},
    {'image': "leaf.png", 'sound':'l-is-for.mp3', 'answer': 'l'},
    {'image': "monkey.png", 'sound':'m-is-for.mp3', 'answer': 'm'},


];
//post on slack so the questions dont repeat themselves kotaro (Toto) Tanaka


function chooseIllustration() {
    //choosing the random illustration to show up on screen//
    let randomNum = Math.floor(Math.random() * (illustrations.length));
    document.getElementById("alphabet-illustration").src = '/assests/images/illustrations/' + illustrations[randomNum]['image'];
    currentLetter = illustrations[randomNum];
    console.log(illustrations);

   /// if(!usedIllustrations.includes(illustrations)) {
    //    console.log(illustrations);
     //   illustrations.push(usedIllustrations);
 //   } else {
 //       chooseIllustration();
  //  }*/



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
    
    //return all the buttons from class alphabet
    let buttonList = document.querySelectorAll('button.alphabet');
    instructionsButton.addEventListener("click", function(){
        playAudio('/assests/audio/instructions.mp3');
    });

    audioButton.addEventListener("click", function(){
        playAudio('/assests/audio/' + currentLetter["sound"]);

    })

    buttonList.forEach(function(button) {
        button.addEventListener("click", chooseBtn);
    });

    chooseIllustration();

})




function runGame() {
    let audio = document.getElementById("audio");
    audio.play();

}

function chooseBtn() {
    let currentOption = this.innerText.toUpperCase();
    if (currentLetter['answer'].toUpperCase().includes(currentOption)){
        
        playAudio('assests/audio/right-ans.mp3')
        score = score + 1;
        document.getElementById('score').innerText = score;
        chooseIllustration();
    } else {
        console.log(' Answer ' + currentOption + ' != Correct Answer ' + currentLetter['answer'].toUpperCase());
        playAudio('assests/audio/wrong-ans.mp3');
        
    }
    
}


