var expression = "";

function insertNumber(val) {
  document.getElementById("userInput").value += val;
}

function clearFields() {
  expression = "";
  document.getElementById("userInput").value = "";
  document.getElementById("result").innerHTML = "";
}

function backspace() {
  var text = document.getElementById("userInput").value;
  document.getElementById("userInput").value = text.substring(
    0,
    text.length - 1
  );
  expression = expression.substring(0, text.length - 1);
}

function equal() {
  var expression = document.getElementById("userInput");
  var result = document.getElementById("result");
  try {
    var val = eval(expression.value);
    expression.value = val;
    result.innerHTML = val;
  } catch (err) {
    result.innerHTML = "=ERROR";
  }
}
