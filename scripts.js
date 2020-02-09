function insertNumber(number) {
  document.getElementById("userInput").value += number;
}

function clearFields() {
  document.getElementById("userInput").value = "";
  document.getElementById("result").innerHTML = "";
}

function backspace() {
  var text = document.getElementById("userInput").value;
  document.getElementById("userInput").value = text.substring(
    0,
    text.length - 1
  );
}

function equal() {
  var text = document.getElementById("userInput").value;
  if (text != "") {
    try {
      document.getElementById("result").innerHTML = eval(text);
    } catch (err) {
      document.getElementById("result").innerHTML = text + " =ERROR";
    }
  }
}
