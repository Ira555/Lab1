function findMostFrequentElement (elements){
    //перевіряємо зі скількох елементів складається масив
    if (!Array.isArray(elements) || elements.length < 1)
    return "Error: pass a valid array"
    else if ( elements.length < 2){
        return{ elem: elements [0], count:1};
    }
    //масив який зберігає перевірені елементи
   let checkedElements = [];
   //цикл який рахує скільки раз і який елемет зявляється
for (let i=0; i< elements.length;++i){
  if (checkedElements.some(value => value.elem === elements[i] )){
    continue
  }
  let count = 1;
  for ( let j = i+1; j<elements.length; ++j) {
    if ( elements[i] === elements[j])
    count ++;
  }
  checkedElements.push(
    { elem: elements[i],count,}
  )
}
return checkedElements.reduce((prev,current) => ( prev.count > current.count) ? prev : current);
}
  console.log ( findMostFrequentElement([1,2,3,1,2,3,3,3,3,2,1]));
  console.log ( findMostFrequentElement([4,5,4,6,1]));
  console.log ( findMostFrequentElement([]));