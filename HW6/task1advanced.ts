/*
#### Task 1 👨‍🏫

Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей
(в противном случае результат неверный, вывысти, что прислали неверные результаты).
Жаль что нам присылают результат матча в формате:
{
    team1: "liverpool",
        team2: "chelsea",
    matchResult: "0:0",
    penalty: "10:11"
}
ведь нам надо это вывести в консоль словами:
    -кто сколько забил
-если были пенальти, то счет по ним (свойства в объекте может не быть)
-результат матча - чья победа/поражение/ничья
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.
*/
type matchData = {
    team1: string,
    team2: string,
    matchResult :string,
    penalty?: string
}
const incomingMatchData : matchData = {
    team1: "liverpool",
    team2: "chelsea",
    matchResult: "3:3",
    penalty: "13:6"
};
const teamOne = incomingMatchData.team1;
const teamTwo = incomingMatchData.team2;
const goals = incomingMatchData.matchResult.split(":");
const goalsTeam1 = +goals[0];
const goalsTeam2 = +goals[1];
let   resultMatch ;
let penaltyTeam1 : number;
let penaltyTeam2 : number;

if ("penalty" in incomingMatchData) {
// @ts-ignore
const penalty  = incomingMatchData.penalty.split(":");
penaltyTeam1 = +penalty[0];
penaltyTeam2 = +penalty[1];
}


function getMatchResult () {
if (goalsTeam1>9 || goalsTeam2>9 || (goalsTeam1!=goalsTeam2 && "penalty" in incomingMatchData)) {
    console.clear();
    resultMatch = "Присланы неверные результаты";
    return resultMatch;
}
else if (!("penalty" in incomingMatchData)){
    console.clear();
    resultMatch = `Команда ${teamOne} забила голов: ${goalsTeam1}\nКоманда ${teamTwo} забила голов:${goalsTeam2}\nРезультат:`
    switch (true){
    case goalsTeam1 == goalsTeam2 : {
        resultMatch += "Ничья";
        return resultMatch;
    }
    default : {
        resultMatch += (goalsTeam1>goalsTeam2) ?  `Победа команды ${teamOne}` :
            `Победа команды ${teamTwo}`;
        return  resultMatch;
    }
    }
}
else {
    console.clear();
    resultMatch = `Команда ${teamOne} забила голов: ${goalsTeam1}\nКоманда ${teamTwo} забила голов: ${goalsTeam2}
Пенальти команда ${teamOne}: ${penaltyTeam1}\nПенальти команда ${teamTwo}: ${penaltyTeam2}\nРезультат:`
resultMatch+=(penaltyTeam1>penaltyTeam2) ? `Победа команды ${teamOne}` : `Победа команды ${teamTwo}`;
    return resultMatch;
}

}

console.log(getMatchResult());