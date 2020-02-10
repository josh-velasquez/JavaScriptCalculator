var expression = null;
var result = null;

function insertNumber(val) {
  var operators = ["/", "*", "-", "+"];
  if (operators.includes(val)) {
    if (result != null) {
      expression = "(" + result + ")" + val;
      console.log(expression);
      document.getElementById("userInput").value = "ANS" + val;
    } else {
      expression += val;
      document.getElementById("userInput").value += val;
    }
  } else {
    expression += val;
    document.getElementById("userInput").value += val;
  }
}

function clearFields() {
  expression = null;
  result = null;
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
  var text = document.getElementById("userInput").value;
  if (text != "") {
    try {
      result = eval(expression);
      document.getElementById("result").innerHTML = result;
    } catch (err) {
      document.getElementById("result").innerHTML = expression + " =ERROR";
    }
  }
}
