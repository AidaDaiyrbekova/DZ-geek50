// 1 Задача
let input = prompt("Введите число:");
let number = Number(input); // Преобразование строки в число
console.log("Вы ввели число:", number);

function checkEvenOdd(number) {
    if (number % 2 === 0){
        console.log(number, 'Четное число.')
    }
    else  {
        console.log(number, 'Нечетное число.')
        }
}
console.log(checkEvenOdd(number))
//
// 2 Задача
// let input = prompt("Введите число:");
// let number = Number(input);
// // console.log("Вы ввели число:", number)
//
// function factorial(number) {
//     if (number === 0 || number === 1){
//         return 1;
//     }
//
//     else {
//         return number * factorial(number - 1);
//     }
//
// }
//
// console.log('Факториал числа',number,'=',factorial(number))
//
// 3 Задача
// let arr=[5,25,15,2,6,30,9,11]
// console.log(arr)
//
// function findMax(arr) {
//     let max = arr[0]
//
//     for (let i= 0; i <= arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//
//     return max;
// }
//
// console.log('Максимальное число в массиве',findMax(arr));
//
// 4 Задача
// let arr=['a', 'e', 'i', 'o', 'u']
// let input=prompt('Введите слово')
//
// function countVowels(str) {
//     let count= 0
//     for (let i=0; i<=str.length; i++){
//         if(arr.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }
//
// console.log(input)
// console.log(countVowels(input), 'гласных')
//
//
// 5 Задача
// let arr=[-1,2,-3,4,-5]
//
// function sumArray(arr){
//     let sum=0
//     for (let elem of arr){
//         sum += elem
//     }
//
//     return sum
// }
//
// console.log(arr)
// console.log('Сумма массива:', sumArray(arr))