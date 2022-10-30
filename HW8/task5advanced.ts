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
const reviewsPower : any = new Map([['Mark', 7], ['Joshua', 8]]);
const results : (number | string)[] =[];
function getWinner () {
    const johnResult  = (johnData.reviews.get("Mark") * (reviewsPower.get("Mark")/10)) + (johnData.reviews.get("Joshua") * (reviewsPower.get("Joshua")/10));
    const bobResult = (bobData.reviews.get("Mark") * (reviewsPower.get("Mark")/10)) + (bobData.reviews.get("Joshua") * (reviewsPower.get("Joshua")/10));
    const thomasResult = (thomasData.reviews.get("Mark") * (reviewsPower.get("Mark")/10)) + (thomasData.reviews.get("Joshua") * (reviewsPower.get("Joshua")/10));
    results.push(johnData.name, johnResult,bobData.name,bobResult,thomasData.name,thomasResult);
    let winner: number | string ="";
    results.forEach(function (value,index){
        if (index%2 !=0 && value == Math.max(johnResult,bobResult,thomasResult)) winner = results[index-1];
    })
 return winner;
}
console.log(getWinner());