// function hideDeck(value){
//     if(value == true){
//         document.getElementById("computerHand").style.visibility = "hidden";
//         document.getElementById("myHand").style.visibility = "hidden";
//     }
//     else {
//         document.getElementById("computerHand").style.visibility = "visible";
//         document.getElementById("myHand").style.visibility = "visible";
//     }
// }
// function showThing(value){
//     const tmp = document.querySelector("#middle");
//     const img = document.createElement("img");
//     switch (value) {
//         case "rock":
//             img.src = "./img/rock.jpg";
//             break;
//         case "paper":
//             img.src = "./img/paper.jpg";
//             break;
//         case "scissors":
//             img.src = "./img/scissors.jpg";
//             break;
//         default:
//             img.src = "./img/scissors.jpg";
//             break;
//     }
//     // console.log(tmp);
//     tmp.appendChild(img);
// }
// function threeSecondShow(){
//     setTimeout(function() { showThing("rock"); }, 1000)
//     setTimeout(function() { showThing("paper"); }, 2000)
//     setTimeout(function() { showThing("scissors"); }, 3000)
//     // setTimeout(function() { hideDeck(true); }, 1000)
    
// }

function makeSound(input){
    let sourceSound = '';
    switch (input) {
        case "green":
            sourceSound = "./sounds/win.mp3"
            break;
        case "yellow":
            sourceSound = "./sounds/equal.mp3"
            break;
        case "red":
            sourceSound = "./sounds/lose.mp3"
            break;
        default:
            break;
    }
    let gameSound = new Audio(sourceSound);
    gameSound.play();

}
function throwComputerChoice(){
    let ran = Math.floor(Math.random() * 3) + 1;
    let tmp = document.querySelector("#computerHandImage");
    switch (ran) {
        case 1:
            tmp.src = "./img/rock.jpg";
            return 'rock';
        case 2:
            tmp.src = "./img/paper.jpg";
            return 'paper';
        case 3:
            tmp.src = "./img/scissors.jpg";
            return "scissors";
        default:
            tmp.src = "./img/texture.jpg";
            return "none";
    }

}
function throwMyChoice(value){
    // threeSecondShow();
    // setTimeout(function() {hideDeck(true);} , 1000)
    let computerHand = throwComputerChoice();
    let tmp = document.querySelector("#myHandImage");
    switch (value) {
        case "paper":
            tmp.src = './img/paper.jpg';
            break;
        case "scissors":
            tmp.src = './img/scissors.jpg'; 
            break;
        case "rock":
            tmp.src = './img/rock.jpg';
            break;
        default:
            break;
    }
    judge(value,computerHand);
    // setTimeout(function() {hideDeck(false);},2000)
}
function judge(myHand,computerHand){
    // my win probability
    let tmp = document.querySelector(".middle");
    function judgeSwitch(me,com){
        if     (me == "rock"){
            if(com == "rock") res = "yellow"
            else if(com == "paper") res = "red"
            else res = "green"
        } 
        else if(me == "paper"){
            if(com == "rock") res = "green"
            else if(com == "paper") res = "yellow"
            else  res = "red"
        } 
        else {
           if(com == "rock") res = "red"
           else if(com == "paper") res = "green"
           else  res = "yellow"
        }
        return res;
    }
    tmp.style.backgroundColor = judgeSwitch(myHand,computerHand)
    scoreBoard(res);
    makeSound(res);
}
function scoreBoard(res){
    let outPut = "";
    let myScore = +(document.getElementById("myScore").innerHTML);
    let computerScore = +(document.getElementById("computerScore").innerHTML);
    switch (res) {
        case "green":
            outPut = "You are a winner!"
            myScore++;
            break;
        case "yellow":
            outPut = "Nothing has change!"
            break;
        case "red":
            outPut = "You are a Looseerr!"
            computerScore++;
            break;
        default:
            break;
    }
    document.getElementById("theResult").innerHTML = outPut;
    document.getElementById("myScore").innerHTML = myScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}