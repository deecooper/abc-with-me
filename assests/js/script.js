//Global Variables//
let currentLetter;
let score = 0;
let gameComplete = false;

//antonio//
//An array with an object inside with the illsutrations, audio and answer//
let illustrations = [{
        'image': "a.png",
        'sound': 'a-is-for.mp3',
        'answer': 'a'
    },
    {
        'image': "b.png",
        'sound': 'b-is-for.mp3',
        'answer': 'b'
    },
    {
        'image': "c.png",
        'sound': 'c-is-for.mp3',
        'answer': 'c'
    },
    {
        'image': "d.png",
        'sound': 'd-is-for.mp3',
        'answer': 'd'
    },
    {
        'image': "e.png",
        'sound': 'e-is-for.mp3',
        'answer': 'e'
    },
    {
        'image': "f.png",
        'sound': 'f-is-for.mp3',
        'answer': 'f'
    },
    {
        'image': "g.png",
        'sound': 'g-is-for.mp3',
        'answer': 'g'
    },
    {
        'image': "h.png",
        'sound': 'h-is-for.mp3',
        'answer': 'h'
    },
    {
        'image': "i.png",
        'sound': 'i-is-for.mp3',
        'answer': 'i'
    },
    {
        'image': "j.png",
        'sound': 'j-is-for.mp3',
        'answer': 'j'
    },
    {
        'image': "k.png",
        'sound': 'k-is-for.mp3',
        'answer': 'k'
    },
    {
        'image': "l.png",
        'sound': 'l-is-for.mp3',
        'answer': 'l'
    },
    {
        'image': "m.png",
        'sound': 'm-is-for.mp3',
        'answer': 'm'
    },
    {
        'image': "n.png",
        'sound': 'n-is-for.mp3',
        'answer': 'n'
    },
    {
        'image': "o.png",
        'sound': 'o-is-for.mp3',
        'answer': 'o'
    },
    {
        'image': "p.png",
        'sound': 'p-is-for.mp3',
        'answer': 'p'
    },
    {
        'image': "q.png",
        'sound': 'q-is-for.mp3',
        'answer': 'q'
    },
    {
        'image': "r.png",
        'sound': 'r-is-for.mp3',
        'answer': 'r'
    },
    {
        'image': "s.png",
        'sound': 's-is-for.mp3',
        'answer': 's'
    },
    {
        'image': "t.png",
        'sound': 't-is-for.mp3',
        'answer': 't'
    },
    {
        'image': "u.png",
        'sound': 'u-is-for.mp3',
        'answer': 'u'
    },
    {
        'image': "v.png",
        'sound': 'v-is-for.mp3',
        'answer': 'v'
    },
    {
        'image': "w.png",
        'sound': 'w-is-for.mp3',
        'answer': 'w'
    },
    {
        'image': "x.png",
        'sound': 'x-is-for.mp3',
        'answer': 'x'
    },
    {
        'image': "y.png",
        'sound': 'y-is-for.mp3',
        'answer': 'y'
    },



];


//Choose illustration function for the random images to show up //

function chooseIllustration(index) {


    // Sets a delay of two seconds for illustrations to show//

    setTimeout(function () {
        document.getElementById("alphabet-illustration").src = './assests/images/illustrations/' + illustrations[index].image;
        currentLetter = illustrations[index];
        console.log(illustrations);
    }, 2000);

    /// if(!usedIllustrations.includes(illustrations)) {
    //    console.log(illustrations);
    //   illustrations.push(usedIllustrations);
    //   } else {
    //       chooseIllustration();
    //  }*/



}

//play Audio function//

function playAudio(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play();
    return true;
}







// Listens when the DOM has finished loading and excutes code//
// code institute love maths//
document.addEventListener("DOMContentLoaded", function () {
    let instructionsButton = document.getElementById("instructions");
    let audioButton = document.getElementById("sound");

    //return all the buttons from class alphabet using Query Selector
    let buttonList = document.querySelectorAll('button.alphabet');

    // Sets a time out for buttons when pressed//
    instructionsButton.addEventListener("click", function () {
        let button = this;
        button.disabled = true;
        setTimeout(function () {
            playAudio('./assests/audio/instructions.mp3');
            button.disabled = false;

        }, 2000);

    });

    audioButton.addEventListener("click", function () {
        let button = this;
        button.disabled = true;
        setTimeout(function () {
            playAudio('./assests/audio/' + currentLetter.sound);
            button.disabled = false;
        }, 2000);

    });

    buttonList.forEach(function (button) {
        button.addEventListener("click", chooseBtn);
    });
    let randomNum = Math.floor(Math.random() * (illustrations.length));
    //check score is not = 20
    chooseIllustration(randomNum);

});



// Choose Alphabet Button function//
function chooseBtn() {

    let currentOption = this.innerText.toUpperCase();
    if (currentLetter.answer.toUpperCase().includes(currentOption)) {

        playAudio('./assests/audio/right-ans.mp3');
        //increment score by one if answered correctly//
        score = score + 1;
        document.getElementById('score').innerText = score;

        isGameCompleted();
        //Niall Maher
        // Remove current item from questions using filter//
        illustrations = illustrations.filter((item) => {
            return item.answer.toUpperCase() !== currentLetter.answer.toUpperCase();
        });

        let randomNum = Math.floor(Math.random() * (illustrations.length));
        chooseIllustration(randomNum);
    } else {
        console.log(' Answer ' + currentOption + ' != Correct Answer ' + currentLetter.answer.toUpperCase());
        playAudio('./assests/audio/wrong-ans.mp3');

    }

}

//create a timeout for the buttons after being clicked
//https://stackoverflow.com/questions/30634542/adding-a-timed-delay-after-pressing-a-button-to-prevent-button-spam/30634772


/*function timeOutBtns() {
    let btns = document.getElementsByTagName("button");


    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            disableButtons(true);
            setTimeout(function () {
                disableButtons(false);
            }, 6000);
        });
    }

    function disableButtons(state) {
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = !!state;
        }

    }

}

*/

//score reaches 20 player has completed the game//

function isGameCompleted() {
    if (score === 20) {
        gameComplete = true;

        window.location.replace("game-finished.html");



    }

}

