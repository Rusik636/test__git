let money = prompt("Ваш бюджет в месяц",''),
    time  = prompt("Введите дату в формате YYYY-MM-DD",'');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов?",''),
    a2 = prompt("Восколько обойдется?",''),
    a3 = prompt("Введите обязательную статью расходов?",'')
    a4 = prompt("Восколько обойдется?",'');

 appData.expenses.a1 = a2;
 appData.expenses.a3 = a4;

 alert(appData.budget / 30);
