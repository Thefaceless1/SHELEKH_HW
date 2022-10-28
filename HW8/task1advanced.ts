/*
#### Task 1 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

> Примечание: для этой задачи **`y`** не считается гласной.*/
const needToRemoveSymbols = ["e","u","i","o","a"];
function removeSymbols (commentUser : string) {
    const resultTask1Adv = commentUser.toLowerCase().split(" ").map(function (value) {
        return value.split("").filter(value1 => !needToRemoveSymbols.includes(value1)).join("");
    }).join(" ");
    return resultTask1Adv;
}

console.log(removeSymbols("This website is for losers LOL!"));