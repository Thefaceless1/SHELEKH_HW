/*
#### Task 1 👨‍🏫

Реализуйте функцию которая будет проверять, является ли слово палиндромом.*/
const palindrom = "доход";
const notPalindrom = 'котик';
let isPalindrom = true;

function checkPalindrom (word: string) {
    const wordAsArray = word.split("");
    const reversedArray = wordAsArray.concat(wordAsArray);
    reversedArray.reverse();
    let countIterations =0;
    wordAsArray.forEach(function (value, index, array){
        if (wordAsArray[countIterations] != reversedArray[countIterations]){
            isPalindrom=false;
        }
        countIterations++;
    })
    return (isPalindrom) ? "слово является палиндромом" : "слово не является палиндромом";
}

console.log(checkPalindrom(palindrom));