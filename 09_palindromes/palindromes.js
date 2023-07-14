let isAlpha = function(input) {
    return /^[A-Z\d]$/i.test(input);
}

const palindromes = function (phrase) {
    let alphaOnly = "";
    const arrayForm = phrase.split("");
    for (let i = 0; i < arrayForm.length; i++) {
        if (isAlpha(arrayForm[i])) alphaOnly += arrayForm[i].toLowerCase();
    }
    let leftPointer, rightPointer;
    leftPointer = 0;
    rightPointer = alphaOnly.length - 1;
    

    const alphaArrayForm = alphaOnly.split("");

    while (leftPointer < rightPointer) {
        if (alphaArrayForm[leftPointer] != alphaArrayForm[rightPointer]) return false;
        leftPointer++;
        rightPointer--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
