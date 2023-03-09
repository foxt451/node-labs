function duplicateEncode(word){
    // Array with start word letters and future result array
    const letters = String(word).split('')
    let newString = [];
    // Check for equality
    for (i = 0; i < letters.length; i++){
        let repeated = false;
        for (j = 0; j < letters.length; j++){
            if (i !== j){
                if (letters[i].toLowerCase() === letters[j].toLowerCase()){
                    repeated = true;
                };
            };
        };
        if (repeated === true){
            newString.push(")");
        } else{
            newString.push("(");
        };
    }
    // Make a string out of array
    return newString.join("")
}

console.log(duplicateEncode("din"))