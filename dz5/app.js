let color = prompt('Напиши цвет светофора')
console.log('Цвет:', color)
let red = 'красный';
let yellow = 'желтый';
let green = 'зеленый';


if (color===red) {
    console.log('Остановитесь!')
} else if (color===yellow){
    console.log('Приготовьтесь!')
} else if (color===green){
    console.log('Можно ехать!')
}
else {
    console.log('Ошибка: некорректный цвет светофора.')
}