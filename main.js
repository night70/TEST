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
    
}
function scoreBoard(res){
    let outPut = "the fuck";
    // switch (res) {
    //     case "win":
    //         outPut = "You are a winner!"
    //         break;
    //     case "equal":
    //         outPut = "Nothing has change!"
    //         break;
    //     case "win":
    //         outPut = "Looseeerr!"
    //         break;
    
    //     default:
    //         break;
    // }
    document.getElementById("showTheResult").innerHTML = 5;
}