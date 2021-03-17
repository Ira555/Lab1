//Факторіал натурального чмсла

function factorial (n) {
  let result=1;
  for( let z = 2; z<= n;z++){
    result= result * z;
  }
    return result;
}
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(11));


