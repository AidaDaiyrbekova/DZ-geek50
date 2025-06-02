let employees = [
    {
        name: "Иван",
        age: 30,
        gender: "мужской",
        phone: {
            home: "123-45-67",
            mobile: "89012345678"
        }
    },
    {
        name: "Мария",
        age: 25,
        gender: "женский",
        phone: {
            home: "234-56-78",
            mobile: "89123456789"
        }
    },
    {
        name: "Алексей",
        age: 28,
        gender: "мужской",
        phone: {
            home: "345-67-89",
            mobile: "89234567890"
        }
    }
];

employees.push({name: "Aйбек", age: 35, gender: "мужской", phone: {home: "25-65-78", mobile: "126878964"}}) //добавление сотрудника в конец объекта
employees.unshift({name: "Нургуль", age: 40, gender: "женский", phone: {home: "123-89-78", mobile: "87945617"}}) //добавление сотрудника в начало объекта
// console.log(employees)

for (const person of employees) {
    // console.log(person)
}
let NewEmployees= employees.filter(num => num.age>25) // сотрудники старше 25 лет
// console.log(NewEmployees)

let NameEmployees = employees.map(value => value.name) // только имена сотрудников
console.log(NameEmployees)

console.log(NewEmployees)