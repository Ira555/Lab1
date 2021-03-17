function findAllPermutations(string){
    if(!string|| typeof string !=='string'){
        return " Error: enter a valid string";
    }
    return getPermutations( string);
}
function getPermutations (word){
    if (word.length<2){
        return word;
    }
    let permutationsArray = [];
    for ( let i =0; i< word.length; ++i){
        let char = word [i];

        if (word.indexOf(char) !==i)
        continue
        let remainingChars = word.slice (0,i)+ word.slice(i+1,word.length);
        for ( let pernutation of getPermutations(remainingChars)){
            permutationsArray.push( char + pernutation);
        }
    }
    return permutationsArray;
}
console.log(findAllPermutations("abcd"))
console.log(findAllPermutations("привіт"))