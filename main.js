const binaryNumber = document.querySelector("#binary-entry");
const converterDisplay = document.querySelector("p.dec-display");
const warningText = document.querySelector("p.warning");
binaryNumber.addEventListener("input", (e) => {
  // Get entry from input field
  let valueEntered = e.target.value;
  // RegEx
  let check = /^[2-9a-zA-Z]+$/;
  //   Convertion Function
  let con = binaryToDecimal(valueEntered);
  //Check if the value entered is a number and
  // if it contains only numbers 1 & 0
  if (
    !valueEntered.match(check) &&
    !valueEntered.includes(2, 3, 4, 5, 6, 7, 8, 9)
  ) {
    converterDisplay.innerHTML = "";
    converterDisplay.innerHTML += con;
  } else {
    converterDisplay.innerHTML = "";
    warningText.style.display = "block";
  }
});

function binaryToDecimal(valueEntered) {
  let result = 0;
  for (let index = valueEntered.length - 1; index >= 0; index--) {
    result +=
      parseInt(valueEntered[index]) *
      Math.pow(2, valueEntered.length - 1 - index);
  }

  return result;
}
