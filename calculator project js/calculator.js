let btn = document.getElementById("calculate");
let result = document.getElementById("result");
let numOneError = document.getElementById("num1Error");
let numTwoError = document.getElementById("num2Error");
let opError = document.getElementById("opError");
let final;
let numOne,
  numTwo,
  oP = false; //ok false

numOneError.style.display = "none";
numTwoError.style.display = "none";
opError.style.display = "none";

btn.addEventListener("click", function () {
  let num1 = document.getElementById("firstNum");
  let num2 = document.getElementById("secondNum");
  let operator = document.getElementById("operator");

  error(num1, num2, operator);

  if (!numOne && !numTwo && !oP) {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    switch (operator.value) {
      case "add":
        final = num1 + num2;
        break;
      case "minus":
        final = num1 - num2;
        break;
      case "multiply":
        final = num1 * num2;
        break;
      case "division":
        final = num1 / num2;
        break;
      case "default":
        console.log("error");
        break;
    }
    result.innerHTML = final;
  }
});

function error(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    numOneError.style.display = "block";
    numOne = true;
  } else {
    numOneError.style.display = "none";
    numTwo = false;
  }
  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    numTwoError.style.display = "block";
    numTwo = true;
  } else {
    numTwoError.style.display = "none";
    numTwo = false;
  }
  if (
    operator.value == "" ||
    operator.value == null ||
    operator.value == undefined
  ) {
    opError.style.display = "block";
    oP = true;
  } else {
    opError.style.display = "none";
    oP = false;
  }
}
