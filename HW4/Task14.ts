/*
#### Task 14 💻
Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.*/
const currentDate = new Date();
console.log(`Текущая дата: ${currentDate.getMonth()+1}/${currentDate.getFullYear()}/${currentDate.getDate()}
Текущее время ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
