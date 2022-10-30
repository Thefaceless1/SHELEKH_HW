/*
#### Task 5.
Есть массив кандидатов, например:
{ name : 'John', reviews: Map[['Mark', 5.8], ['Joshua', 9.3]]}
{ name : 'Bob', reviews: Map[['Mark', 5.9], ['Joshua', 9.0]]}
{ name : 'Thomas', reviews: Map[['Mark', 4], ['Joshua', 10]]}
И коллекция ревьюверов: Map[['Mark', 7], ['Joshua', 8]]
Нужно нанять только 1 кандидата, каждый ревьювер выставил кандидату оценку
Также каждый ревьювер имеет свою компетенцию в баллах,
    которая показывает, как сильно его оценка влияет на результат
Вычислить, кто из кандидатов все-таки будет принят*/
const johnData : any =  { name : 'John', reviews:new Map([['Mark', 5.8], ['Joshua', 9.3]])};
const bobData : any = { name : 'Bob', reviews:new Map([['Mark', 5.9], ['Joshua', 9.0]])};
const thomasData : any = { name : 'Thomas', reviews: new Map([['Mark', 4], ['Joshua', 10]])};
let reviewsPower : any = new Map([['Mark', 7], ['Joshua', 8]]);

function getWinner (...candidates: any) {
    let maxResult =0;
    let winner ='';
    reviewsPower = Array.from(reviewsPower);
for (let c = 1; c<=candidates.length; c++) {
    let notesArr  = candidates[c-1].reviews;
    notesArr = Array.from(notesArr);
    let resultCurrentCandidate = 0;
    for (let i=0; i<reviewsPower.length;i++) {
        resultCurrentCandidate += (reviewsPower[i][1]/10)*notesArr[i][1];
    }
    if (maxResult<resultCurrentCandidate) {
        maxResult = resultCurrentCandidate;
        winner = candidates[c-1].name;
    }
    else continue;
}
return [winner,maxResult];

}
console.log(getWinner(thomasData,bobData,johnData))
