//https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10//

window.onload = chooseIllustration;

let illustrations = ["../images/illustrations/apple.png", "images/illustrations/boat.png", "images/illustrations/car.png"];

function chooseIllustration() {
     let randomNum = Math.floor(Math.random() * illustrations.length);
     document.getElementById("alphabet-illustration").src = illustrations[randomNum];
}






document.addEventListener("DOMContentLoaded", function(){
    
        
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "instruction") {
                alert("you click instructions");
            } else {
                alert("you clicked a button")
            }
        })
    }


})

function runGame() {
    let audio = document.getElementById("audio");
    audio.play();

}

function displayQuestion() {

}

function checkAnswer() {


}