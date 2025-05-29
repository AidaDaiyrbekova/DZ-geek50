let data=[42, 'текст', true, null, undefined, 3.14]
console.log('Массив: ', data, '\nДлина массива:', data.length,
    '\nПервый элемент массива:', data[0], '\nПоследний элемент массива:', data[data.length-1])

 data[2]=false
console.log(data)
console.log('_______________________________________________________________________________')

let numbers = [10, 20, 30, 40, 50]
console.log(numbers)
console.log('Индекс числа 30:', numbers.indexOf(30), '\nСодержит ли массив число 100:',numbers.includes(100) )
console.log('_______________________________________________________________________________')

//Методы массивов
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']
console.log(fruits)
fruits.push('mango')
console.log('Добавление слово в конец массива ', fruits )
fruits.unshift('strawberry')
console.log('Добавление слово в начало массива ', fruits )

let lastDel=fruits.pop()
let firstDel=fruits.shift()
console.log('Удаленное слово с конца:', lastDel, '\nУдаленное слово с начало:',firstDel)

console.log('Индекс слово orange:', fruits.indexOf('orange'), 'Содержит ли массив слово banana:', fruits.includes('banana'))
console.log('_______________________________________________________________________________')

//Срезы и сортировка
let numbers2 = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77]
console.log(numbers2)
let slice=numbers2.slice(3,7)
console.log(slice)
let slice2=numbers2.slice(-3)
console.log(slice2)

console.log('Сортировка по возврастанию:', numbers2.sort((a,b)=>a-b),
    '\nСортировка по убыванию:', numbers2.sort((a,b)=>b-a))

let comb=numbers2.join('; ')
console.log(comb)
console.log('_______________________________________________________________________________')

//Spread-оператор и вложенные массивы
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayJoin=[...array1, ...array2]
console.log(array1,array2,arrayJoin)



























