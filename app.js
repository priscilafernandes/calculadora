const result = document.getElementById("result");
const btnC = document.getElementById("btnC"); // delete all
const btnDel = document.getElementById("btnDel"); // delete last
const btnPercent = document.getElementById("btnPercent");
const btnDivider = document.getElementById("btnDivider");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnMultiply = document.getElementById("btnMultiply");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnSubstract = document.getElementById("btnSubstract");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnSum = document.getElementById("btnSum");
const btnE = document.getElementById("btnE");
const btn0 = document.getElementById("btn0");
const btnDot = document.getElementById("btnDot");
const btnEqual = document.getElementById("btnEqual"); // eval()

deleteAll(btnC);
deleteOne(btnDel);
percent(btnPercent);
pressedButton(btnDivider);
pressedButton(btn7);
pressedButton(btn8);
pressedButton(btn9);
pressedButton(btnMultiply);
pressedButton(btn4);
pressedButton(btn5);
pressedButton(btn6);
pressedButton(btnSubstract);
pressedButton(btn1);
pressedButton(btn2);
pressedButton(btn3);
pressedButton(btnSum);
pressedButton(btnE);
pressedButton(btn0);
pressedButton(btnDot);
calculate(btnEqual);

function pressedButton(btn) {
  btn.addEventListener("click", () => {
    let textnode = document.createTextNode(btn.value);
    result.appendChild(textnode);
  });
}

function deleteAll(btn) {
  btn.addEventListener("click", () => {
    result.textContent = 0;
  });
}

function deleteOne(btn) {
  btn.addEventListener("click", () => {
    let content = result.textContent;
    let res = content.substring(content.length -1, content.length); // retorna último caracter
    result.textContent = content.replace(res, ""); // substitui último caracter por vazio
  });
}

function percent(btn) {
  btn.addEventListener("click", () => {
    result.textContent /= 100;
  });
}

function calculate(btn) {
  btn.addEventListener("click", () => {
    try {
      let res = eval(result.textContent); // computa código representado com string
      result.textContent = res;
    }
    catch(error) {
      alert(`${error.name}: ${error.message}`);
    }
  });
}