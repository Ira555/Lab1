function splitStringToWords (string) {

  let res = string.split(' ');
  for (let i = 0; i < res.length; i++){
    if(res[i] === ''){
      res.splice(i,1);
      i--;
    }
  }
  return res
}

console.log(splitStringToWords("Привіт . Як Справи ?"));
console.log(splitStringToWords("Мандрівка у твою мрію почнеться сьогодні"));

