function calculate() {
  let result = 0;
  function add(...rest) {
    for(let i = 0; i < rest.length; i++){
      let value = rest[i];
      result += value;
    }
    return result;
  }
  function subtract(...rest) {
    for(let i = 0; i < rest.length; i++) {
      if(i === 0) {
        if(result === 0){
          result = rest[0];
        } else {
          result = result - rest[0];
        }
      } else  {
        result -= rest[i];
      }
    }
    return result;
  }
  function multiply(...rest) {
    if(result === 0){
      result = 1;
    }
    for(let i = 0; i < rest.length; i++){
      let value = rest[i];
      result *=  value;
    }
    return result;
  }
  function divide(...rest) {
    for(let i = 0; i < rest.length; i++){
      if(i === 0){
        if(result === 0){
          result = rest[0];
        } else {
          result =  result / rest[0];
        }
      } else {
        result /= rest[i];
      }
    }
    return result;
  }
  function getResult() {
    return result;
  }
  function clear(){
    result = 0;
    return result;
  }
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult,
    clear: clear
  }
}
let calculator = calculate();
console.log(calculator.add(5));
console.log(calculator.add(7));
console.log(calculator.getResult());
console.log(calculator.clear());
console.log(calculator.add(5));
console.log(calculator.getResult());
console.log(calculator.add(5, 6, 2));
console.log(calculator.getResult());
console.log(calculator.clear());
console.log(calculator.subtract(3, 7, 10, 7));
console.log(calculator.getResult());
console.log(calculator.subtract(-15, 7));
console.log(calculator.getResult());
console.log(calculator.add(11, 7));
console.log(calculator.getResult());
console.log(calculator.clear());
console.log(calculator.multiply(3, -5, -10));
console.log(calculator.getResult());
console.log(calculator.divide(10));
console.log(calculator.getResult());
console.log(calculator.clear());
console.log(calculator.divide(10, 5, 2, 2));
console.log(calculator.getResult());
console.log(calculator.add(10, 7));
console.log(calculator.getResult());
console.log(calculator.clear());
