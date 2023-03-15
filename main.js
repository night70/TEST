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
    let res = "";
    if(myHand == "rock"){
        switch (computerHand) {
            case "rock":
                res = "equal";
                break;
            case "paper":
                res = "lose";// change the background of middle to red 
                break;
            case "scissors":
                res = "win";// change the background of middle to green  
                break;
            default:
                break;
        }
    }
    else if(myHand == "paper"){
        switch (computerHand) {
            case "rock":
                res = "win";// change the background of middle to green 
                break;
            case "paper":
                res = "equal";// change the background of middle to yellow 
                break;
            case "scissors":
                res = "lose";// change the background of middle to red 
                break;
            default:
                break;
        }
    }
    else if(myHand == "scissors"){
        switch (computerHand) {
            case "rock":
                res = "lose";// change the background of middle to red 
                break;
            case "paper":
                res = "win";// change the background of middle to green 
                break;
            case "scissors":
                res = "equal"; // change the background of middle to yellow 
                break;
            default:
                break;
        }
    }
    switch (res) {
        case "win":
            tmp.style.backgroundColor = "green";
            break;
        case "equal":
            tmp.style.backgroundColor = "yellow";
            break;
        case "lose":
            tmp.style.backgroundColor = "red";
            break;
    
        default:
            break;
    }
}
