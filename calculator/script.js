//alert("Hi Aakarshit");
let inputBox = document.getElementById("data");
let outputBox = document.getElementById("output");

//slect all buttons inside div with class d
let buttons = document.querySelectorAll(".d button");

//loop through all buttons and add event listener
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonText = button.innerText;

    if (buttonText === "AC") {
      inputBox.value = "";
      outputBox.value = "";
    }
    if (buttonText === "=") {
      try {
        outputBox.value = eval(inputBox.value); //for calculating the expression i have to add eval
      } catch {
        outputBox.value = "Error";
      }
    }
    //Otherwise, append the button text to input box
    inputBox.value += buttonText;
  });
});
