let currentLetter;
let score = 0;

//antonio//
//an array with an object inside with the illsutrations and audio//
let illustrations = [
    {'image': "a.png", 'sound':'a-is-for.mp3', 'answer': 'a'},
    {'image': "b.png", 'sound':'b-is-for.mp3', 'answer': 'b'},
    {'image': "c.png", 'sound':'c-is-for.mp3', 'answer': 'c'},
    {'image': "d.png", 'sound':'d-is-for.mp3', 'answer': 'd'},
    {'image': "e.png", 'sound':'e-is-for.mp3', 'answer': 'e'},
    {'image': "f.png", 'sound':'f-is-for.mp3', 'answer': 'f'},
    {'image': "g.png", 'sound':'g-is-for.mp3', 'answer': 'g'},
    {'image': "h.png", 'sound':'h-is-for.mp3', 'answer': 'h'},
    {'image': "i.png", 'sound':'i-is-for.mp3', 'answer': 'i'},
    {'image': "j.png", 'sound':'j-is-for.mp3', 'answer': 'j'},
    {'image': "k.png", 'sound':'k-is-for.mp3', 'answer': 'k'},
    {'image': "l.png", 'sound':'l-is-for.mp3', 'answer': 'l'},
    {'image': "m.png", 'sound':'m-is-for.mp3', 'answer': 'm'},
    {'image': "n.png", 'sound':'n-is-for.mp3', 'answer': 'n'},
    {'image': "o.png", 'sound':'o-is-for.mp3', 'answer': 'o'},
    {'image': "p.png", 'sound':'p-is-for.mp3', 'answer': 'p'},
    {'image': "q.png", 'sound':'q-is-for.mp3', 'answer': 'q'},
    {'image': "r.png", 'sound':'r-is-for.mp3', 'answer': 'r'},
    {'image': "s.png", 'sound':'s-is-for.mp3', 'answer': 's'},
    {'image': "t.png", 'sound':'t-is-for.mp3', 'answer': 't'},


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

//create a timeout for the buttons after being clicked
//https://stackoverflow.com/questions/30634542/adding-a-timed-delay-after-pressing-a-button-to-prevent-button-spam/30634772


function timeOutBtns () {
    let btns = document.getElementsByTagName("button");


for(let i = 0;i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        disableButtons(true);
        setTimeout(function(){disableButtons(false);}, 600);
    });    
}
function disableButtons(state){
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = !!state;    
    }

}



}