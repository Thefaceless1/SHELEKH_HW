/*
#### Task 1 💻
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. */
const objTask1 = {
    key1 :1,
    key2 :"test"
}
delete (objTask1 as any).key1;
delete (objTask1 as any).key2;
