let msg = document.querySelector(".msg");
let chance = document.querySelector(".chance");
let guessed = document.querySelector(".guessed");
let card = document.querySelector(".card");
let chanceTime = 10;
let guessedNumber = [];
let guessBtn = document.querySelector(".guessBtn");
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);
function play() {
    let num = Number(document.querySelector(".input_num").value);
    
    // number check 
    if (num < 0 || num > 50) {
        alert("Only enter between 1 to 50!!")
    } else {
        if (num != answer) {
            msg.style.display = "block";
            chanceTime--;
            chance.innerHTML = "Number of chance to guess: " + chanceTime;
            guessedNumber.push(num);
            guessed.innerHTML = "Guessed numbers are : " + guessedNumber;
            card.classList.add("wrong");
            document.querySelector(".input_num").value = "";
            if (num > answer) {
                msg.innerHTML = "Your number is hight!";
            } else {
                msg.innerHTML = "Your number is low!";
            }

            if (chanceTime <= 0) {
                document.querySelector(".input_num").disabled = true;
                guessBtn.disabled = true;
                alert("You have no chance! restart the game...")
            }
            
        } else {
            msg.style.display = "block";
            msg.innerHTML = "You Won!";
            card.classList.add("true");
 
        }
    }

    

}

function restart() {
    answer = Math.floor(Math.random() * 50) + 1;
    document.querySelector(".input_num").value = "";
    card.classList.remove("wrong");
    card.classList.remove("true");
    chanceTime = 10;
    chance.innerHTML = "Number of chance to guess: " + chanceTime;
    guessedNumber = [];
    guessed.innerHTML = "Guessed numbers are : " + guessedNumber;
    msg.style.display = "block";
    msg.innerHTML = "Game restart";
    document.querySelector(".input_num").disabled = false;
    guessBtn.disabled = false;
}