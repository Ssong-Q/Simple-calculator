let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  //이 아래로는 operator에 데이터가 있을 경우에만 실행됨
  if (!numTwo) {
    $result.value = "";
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  } else {
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  }
  console.log(numOne, numTwo, operator);
};
  
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

const onClickOperator = (event) => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      case "x":
        $result.value = numOne * numTwo;
        break;
      default:
        break;
    }
    numOne = $result.value;
    numTwo = "";
  }
  if (numOne) {
    operator = event.target.textContent;
    $operator.value = event.target.textContent;
  } else if (!numOne && event.target.textContent === "-") {
    numOne = event.target.textContent;
    $result.value = event.target.textContent;
  } else {
    alert("숫자를 먼저 입력하세요!");
  }
  console.log(numOne, numTwo, operator);
};
//함수가 함수를 리턴하는 함수를 고차함수라고 한다. (high order function)
// const onClickOperator = (op) => {
//   return () => {
//     if (numOne) {
//       operator += op;
//       $operator.value = op;
//     } else {
//       alert("숫자 먼저 입력해주세요!");
//     }
//   }
// };

document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click", onClickOperator);
document.querySelector("#multiply").addEventListener("click", onClickOperator);

document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      case "x":
        $result.value = numOne * numTwo;
        break;
      default:
        break;
    }
    //eval 사용하는법 >> eval 함수의 사용을 자제하는 것이 보안상 안전함
    // $result.value = eval(numOne + operator + numTwo);
  } else {
    alert("숫자를 입력하세요!");
  }
  numOne = $result.value;
  numTwo = "";
});
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
