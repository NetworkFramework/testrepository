"use strict";

// const { use } = require("react");

// var firstName = 'Admin';
// var, let, const
// console.log(firstName);
/*block comm*/

/* let age = 25;
console.log(age);

let lastName = 'Hello';
console.log(lastName);

let LastName = 'Hello';
console.log(LastName); */

/* let a = 'Hello';
console.log(a, typeof(a));
console.log(a, typeof a); */

// let b = 5; //init
// b = 10;
// b = 'Hi'
// console.log(b, typeof b);

// let a;
// a = 10;
// // a = 'Hi'
// console.log(a);

// let str1 = "Двойные \n кавычки";
// let str2 = 'Одинарные кавычки';
// console.log(str1 + ' ' + str2); //конкатенация

// let str = 'Данные для входа:\nВаш логин: \'admin\' ';
// let str = "C:\\Users\\Kommunizm\\Desktop\\ГК_HTML_CSS\\JS\\JS_1\\Задания";
// console.log(str);

// let str = 'New\ttext.'
// console.log(str);

// let a = 5;
// let str = `Обр. ${a} ${a + 2}
// кавычки`;
// console.log(str);

// let firstName = 'Sergio';
// alert('Message' + firstName);
// alert(`Hi, ${firstName}`);

// let day = 365;
// let planet = "Земля";
// let humanity = "7 млрд.";
// let sun = "Солнца";
// let msg = `Мы живем на планете ${planet}, она делает один оборот вокруг ${sun} за ${day} дней. Население нашей планеты составляет примерно ${humanity} человек.`;
// alert(msg);

// const WEEK = 7;
// // WEEK = 9
// console.log(WEEK);

// let res = confirm ('Did you know HTML?');
// console.log(res);
// if (res){
//     alert('Let try JS')
// } else{
//     alert('Need try HTML');
// }

// OK = TRUE
// Cancel = FALSE
//boolean = true and false

// let a = null;
// console.log(a, typeof a);

// let res = prompt('Your name', 'Viktor')
// alert(`Hi ${res}!`);
// console.log(res);

// let a = 12;
// let b = 8;
// console.log('+', a + b);
// console.log('-', a - b);
// console.log('*', a * b);
// console.log('/', a / b);
// console.log('**', a ** b);
// console.log('%', a % b);

// let n1 = +prompt('Ввести 1 число', 5)
// let n2 = parseInt(prompt('Ввести 2 число', 7))
// let n3 = Number(prompt('Ввести 3 число', 3))
// let sum = n1 + n2 + n3
// console.log('Сумма: ', sum);
// console.log('Произв.: ', n1 * n2 * n3);
// console.log('Среднее арифм.: ', sum / 3);

// let n1 = prompt('Ввести первое число', 5)
// console.log(n1, typeof n1);

// console.log(parseInt('21.84')); //21
// console.log(parseFloat('21.84')); //21.84
// console.log(Number('21.8455114')); //21.84
// console.log(Number('21.84455654').toFixed(3)); //21.845

// console.log(+'21.84')
// console.log(+1 * '21.84')
// console.log('6' * '3')

// let a = 23;
// let b = +'6';
// console.log('Conclusion: ' + (a + b));

// let num = 4321; //1234
// let one, two, three, four;
// console.log(num);
// one = num % 10;
// console.log(one);
// num = parseInt(num / 10);
// two = num % 10;
// console.log(two);
// num = parseInt(num / 10);
// three = num % 10;
// console.log(three);
// num = parseInt(num / 10);
// four = num % 10;
// console.log(four);
// console.log(one*1000+two*100+three*10+four)

// let a = 0, b = 0;
// let c = ++a; // a = a + 1;
// console.log(a); //1
// console.log(c); //1
// let d = b++; // b = b + 1
// console.log(b); // 1
// console.log(d); // 0

// let a = 0, b = 0;
// let c = a++ + 2; // c = 0 + 2 a = 1
// let d = ++b + 2; // d = 1 + 2 b = 1
// console.log(a); // 1
// console.log(b); // 1
// console.log(c); // 2
// console.log(d); // 3

// let a = 1;
// let b = a++;
//console.log(a)
// let c = b + 5 + a; // c = 1 + 5 + 2
// console.log(c); // 8

// let a = 1;
// let b = ++a;
// console.log(a);
// let c = b + 5 + a; // c = 2 + 5 + 2
// console.log(c); // 9

// let a = 5;
// let b = a++ - 3; // b = 5 - 3 => 2, a = 5 + 1 => 6
// console.log(a); // 6
// console.log(b); // 2

// let a = 5; // 6
// let b = 3; // 4
// let c = a++ * ++b; // 5 * 4
// console.log(a); // 6
// console.log(b); // 4
// console.log(c); // 20

// let a = 3;
// let b = ++a - 3; // b = 4 - 3 => 1, a = 4
// let c = a++ + 2 + ++b; // c = 4 + 2 + 2

// console.log(a); // 5
// console.log(b); // 2
// console.log(c); // 8

// let a = 3
// console.log(a++) // a = a + 1
// console.log(a) // 4

// let a = 3
// let b = 5 + --a - 1 // 5 + 2 - 1
// console.log(a) // 2
// console.log(b) // 6

// let a = 3
// a += 5 // a = a + 5
// console.log(a); // 8

// a -= 3 // a = a - 3
// console.log(a); // 5

// a **= 2 // a = a ** 2
// console.log(a); // 25

// let a = +prompt('Enter 1 numb:');
// let b = +prompt('Enter 2 numb:');
// let c = +prompt('Enter 3 numb: ');
// let sum = a + b + c
// console.log('Sum numb: ' + sum);

// let sum = +prompt('Enter 1 numb:', 5);
// sum += +prompt('Enter 2 numb:', 4);
// sum += +prompt('Enter 3 numb:', 6);
// console.log('Sum numb: ' + sum);

// console.log(5 == '5');
// console.log(5 === '5');

// console.log(5 != '5');
// console.log(5 !== '5');

// console.log(5 != 5);
// console.log(5 !== '5');

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 5);

// console.log(+true); // 1
// console.log(+false); // 0
// let a = 5 + true // 5 + 0
// console.log(a);
// let b = 5 + false // 5 + 0
// console.log(b);

// 7 < 3 ? alert('7') : alert('3');

// let age = prompt('Enter your age: ')
// age >= 18 ? alert('Age verif') : alert('Age not verif');

// let numb = prompt('Угадать число от 1 до 10')
// let num = 7;
// // numb == num ? alert('True') : alert('False')
// numb == num ? alert('True') : (numb < num ? alert('Больше') : alert('Меньше'))

// let temp = prompt('Enter temp')
// let res = temp > 30 ? 'Very hot' // -2 > 30
// : temp > 20 ? 'Warm' // -2 > 20
// : temp > 10 ? 'Cold' // -2 >10
// : temp > 0 ? 'Frost' // -2 > 0
// : 'Very frost';
// alert(res) // -2

// if (условие) {
//     истина (True)
// } else {
//     фальш (False)
// }

// let a = 12
// let b = 0

// if(b != 0){
//     let res = a / b
//     alert('Result: ' + res)
// } else {
//     alert('You cant divide by \'0\' ')
// }

// let value = prompt('Enter numb')
// if(value % 2 == 0) {
//     alert('Чётное')
//     alert('Other text')
// } else{
//     alert('Не чётное')
// }

// let a=32
// let b=22
// if(a>b){
//     alert(a+' > ' + b)
// }
// if (a==b) {
//     alert(a+' == ' + b)
// }
// if(a<b) {
//     alert(a+' < ' + b)
// }

// let a = 5
// let b = 15
// if(a > b){
//     alert(a + ' > ' + b)
// }
// else if(a == b) {
//     alert(a + ' == ' + b)
// }
// else{
//     alert(a + ' < ' + b)
// }

/* let day = prompt('Enter day of the week (only numb):')
if(day == 1){
    alert('Day of the week - Monday');
}
else if(day == 2){
    alert('Day of the week - Tuesday');
}
else if(day == 3){
    alert('Day of the week - Wednesday');
}
else if(day == 4){
    alert('Day of the week - Thursday');
}
else if(day == 5){
    alert('Day of the week - Friday');
}
else if(day == 6){
    alert('Day of the week - Saturday');
}
else if(day == 7){
    alert('Day of the week - Sunday');
}
else{
    alert('This day does not exist')
}
 */

///=======================================================================
/// false => '', 0, null, undefined, NaN(not a number), false
///=======================================================================
// let a = 5 < 3
// if(a){
//     console.log('True');

// }
// else{
//     console.log('False');

// }
// console.log(a);

// let login = prompt('Enter login: ', 'admin');

// if(login){
//     if(login == 'admin'){
//         let pass = prompt('Enter pass: ', 'password')
//         if(pass){
//             if(pass == 'password'){
//                 alert('Welcome')
//             } else{
//                 alert('Password error')
//             }
//         }
//         else{
//             alert('Login error')
//         }
//     }
//     else{
//         alert('Login error')
//     }
// }
// else{
//     alert('Sign in canceled')
// }

// if(5 > 12 && 5 == 3){    // true && true => true
//     console.log('TRUE'); // false && true => false

// }
// else {                  // true && false => false
//     console.log('FALSE'); // false && false => false

// }

// if(5 > 12 || 5 == 3){     // true || true => true
//     console.log('TRUE'); // false || true => true

// }
// else {                     // true || false => true
//     console.log('FALSE'); // false || false => false

// }

// var age = prompt('Enter your age')
// if(age > 17 && age < 70){
//     alert('Можно получить права')
// } else {
//     alert('Права не давать')
// }

// var age = prompt('Enter your age')
// if(age < 18 || age > 69){
//     alert('Права не давать')
// } else {
//     alert('Можно получить права')
// }

// let a = prompt('Enter 1 side', 10)
// let b = prompt('Enter 2 side', 20)
// let c = prompt('Enter 3 side', 30)
// if(a == b && b == c){
//     alert('равносторонний');
// }
// else if(a == b || b == c || a == c){
//     alert('равнобедренный')
// }
// else{
//     alert('разносторонний')
// }

// if(a == b && b == c){
//     alert('равносторонний');
// }
// if(a == b || b == c || a == c){
//     alert('равнобедренный')
// }
// if(a != b || b != c || a != c){
//     alert('разносторонний')
// }

// console.log('hi');
// if('hi'){
//     console.log('true');

// }

// console.log(!!!'hi');
// console.log(!0);

// console.log(!(7 == 5));

// let ch = prompt('Enter Raven value:' , 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`On the branch ${ch} Crow`);
//     } else if(ch >= 1 && ch <= 4){ //  (ch == 2 || ch == 3 || ch == 4)
//         alert(`On the branch ${ch} Crow's`);
//     } else{
//         alert(`On the branch ${ch} Crow'`);
//     }
// } else{
//     alert('Not value')
// }

// let ch = prompt('Enter Raven value:' , 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`On the branch ${ch} Crow`);
//     } if(ch >= 1 && ch <= 4){               //  (ch == 2 || ch == 3 || ch == 4)
//         alert(`On the branch ${ch} Crow's`);
//     } if(ch >= 5 && ch <= 9 || ch == 0){
//         alert(`On the branch ${ch} Crow'`);
//     }
// } else{
//     alert('Not a value')
// }

// switch(условие){
//     case значение_1:
//         код:
//         break;
//     case значение_2:
//         код:
//         break;
//     case значение_n:
//         код:
//         break;
//         default:
//             код:
// }

// let a = +prompt('Вести число') // 1
// switch(a){ // '1' === 1
//     case 1:
//         alert('Код 1')
//     break;
//     case 2:
//         alert('Код 2')
//     break;
//     case 3:
//         alert('Код 3')
//     break;
//     default:
//         alert('Не знаю такие значения')
// }

// let a = +prompt('Вести результат действия "2 + 2" ') // 1
// switch(a){
//     case 4:
//         alert('Верно')
//     break;
//     case 5:
//     case 8:
//         alert('Не верно')
//     break;
//     default:
//         alert('Не знаю такие значения')
// }

// let error = 15001

// switch (error){
//     case 404:
//         console.log('Page not found')
//         break
//     case 200:
//         console.log('Request was processed successfully')
//         break
//     case 500:
//         console.log('Server error')
//         break
//     default:
//         console.log('Unknown error')

// }

// let day = 'ср1'

// switch(day){
//     case 'суббота':
//     case 'воскресенье':
//         console.log('выходной')
//         break
//     case 'пн':
//     case 'вт':
//     case 'ср':
//     case 'чт':
//     case 'пт':
//         console.log('будни')
//         break
//     default:
//         console.log('некорректный день')
// }

// let m = +prompt('Номер месяца')
// let n

// switch(m){
//     case 1: n = 'Янв'; break
//     case 2: n = 'Фев'; break
//     case 3: n = 'Март'; break
//     default: n = 'Неправильно'
// }
// console.log('Вы ввели: ' + n)

// let operator = prompt('Actions: +, -, *, /, %:')
// let num1 = +prompt('Enter first numb: ', 5)
// let num2 = +prompt('Enter second numb: ', 2)

// switch(operator){
//     case '+':
//         console.log('Sum: ' + (num1 + num2))
//         break
//     case '-':
//         console.log('Difference: ' + (num1 - num2))
//         break
//     case '*':
//         console.log('Product of: ' + (num1 * num2))
//         break
//     case '/':
//         if(num2 == 0){
//             console.log('Cannot be divided by 0');

//         } else{
//             console.log('Private: ' + (num1 / num2))
//         }
//         break
//     case '%':
//         if(num2 == 0){
//             console.log('Cannot be divided by 0')
//         } else{
//         console.log('Remainder from divided: ' + (num1 % num2))
//         }
//         break;
//     default:
//         alert('Operator not found')
// }

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// document.writeln('<p>Text <br> <b>in</b> browser</p>');
// document.writeln('<p><img src="./JS_2/1.jpg" alt=""> Other text </p>')

// Cycle do...while (цикл с потусловием)
// do {
//     тело цикла (действие)
// } while (условие);

// Итерация - 1 шаг цикла

// let i = 0 // i = 5 счётчик
// do {
//     document.writeln('Это номер: ' + i + '<br>')
//     i++ // изменение счётчика
// } while (i < 5) // 5 < 5

// let i = 1
// do {
//     document.writeln('Квадрат ' + i + ' равен ' + i ** 2 + '<br>')
//     i++
// } while (i < 8)

// let i = 0
// do {
//     document.writeln('Это номер: ' + i + '<br>')
//     i = i + 5
// } while (i <= 25)

// let i = 10
// do {
//     document.writeln('Это номер: ' + i + '<br>')
//     i--
// } while (i > 0)

// let i = 1
// do {
//     if(i % 2 == 0){
//         document.writeln(`i = ${i}<br>`)
//     }
//     i++
// } while (i <= 20)

// let i = 2
// do {

//     document.writeln(`a = ${i}<br>`)
//     // i = i + 2
//     i += 2
// } while (i <= 20)

// let n = +prompt('Введите начало диапазона: ', 1)
// let m = +prompt('Введите конец диапазона: ', 5)
// let i = n // 1
// let sum = 0
// do {
//     if(i % 2 != 0){ // i % 2 != 0 // i % 2 == 1
//         document.writeln(i + '<br>')
//         sum = sum + i // 9 = 4 + 5
//     }
//     i++
// } while (i <= m); // 1 <= 5

// document.writeln('Сумма целых нечётных чисел: ' + sum + '<br>')

// let n = +prompt('Введите начало диапазона: ', 1)
// let m = +prompt('Введите конец диапазона: ', 5)
// let sum = 0
// do {
//     if(n % 2){
//         sum += n
//     }
//     n++
// } while (n <= m);
// document.writeln('Сумма целых нечётных чисел: ' + sum + '<br>')

// let a = 5 // global var
// if(a > 0 && a < 10){
//     let a = 6 // local var
//     document.writeln(a)
// }
// document.writeln(a)

// let i = 0
// while(i > 5){   // 0 > 5
//     document.writeln('Это номер: ' + i + '<br>')
//     i++ // 5
// }
// document.writeln('<br><br>')
// let j = 0
// do{
//     document.writeln('Это номер: ' + j + '<br>')
//     j++
// }while(j > 5)

// let count = prompt('Enter stars count', 7)
// let i = 0;
// while(i < count){ // 0 < 7
//     document.writeln('*')
//     i++
// }

// let i = 1
// while(i <= 30){
//     if(i % 3){
//         document.writeln(i + '<br>')
//     }
//     i++
// }

// let start = 5
// let end = 10
// let res = 1
// while(start <= end){
//     res *= start
//     start++
// }
// document.writeln(res + '<br>')

// let i = 3
// while(i){ // 1
//     document.writeln(i + '<br>')
//     i--
// }

// let sum = 0
// let count = -1
// let n
// let max = 0
// do{
//     n = +prompt('Enter number') // 4930
//     sum += n
//     count++
//     if(max < n){    // 9 < 0
//         max = n // 9
//     }
// }while (n != 0)
// document.writeln('Сред. арифм.: ' +  sum / count + '<br>')
// console.log('sum' , sum);
// console.log('count' , count);
// document.writeln('max: ' + max)

// let n = +prompt('Enter number') // 4
// let max = n     // 4
// let min = n     // 4
// let sum = n
// let count = 0
// while (n != 0){
//     n = +prompt('Enter number') // 5 1 0
//     sum += n    // sum = sum + n
//     count++
//     if(max < n && n != 0){
//         max = n
//     }
//     if(n < min && n != 0){
//         min = n
//     }
// }
// document.writeln('max: ' + max + '<br>')
// document.writeln('min: ' + min + '<br>')
// console.log('sum' , sum);
// console.log('count' , count);
// document.writeln('Сред. арифм.: ' +  (sum / count).toFixed(2) + '<br>')

// let res = 1
// do {
//     let n = +prompt('Enter number') // 5 2 0 -1

//     if(n < 0){
//         break;
//     }
//     if(n == 0){
//         continue
//     }
//     res *= n
// } while (true);
// console.log('Product: ' , res);

// let i = 0
// do {
//     if(i == 6){  // 6 == 6
//         break
//     }
//     if(i == 3){  // 5 == 3
//         i++     // 4
//         continue
//     }
//     document.writeln(i + '  ')
//     i++ // 6
// } while (i < 10);

// let res = 1
// let num
// do {
//     num = prompt('Enter num: ')
//     if(num == 0){
//         continue
//     }
//     res *= num // res = -15 * 2 => -30
// } while (num != 0)
// console.log('Product: ' , res)

// for (цикл со счётчиком)

// for(иниц. переменной; проверка_усл; изм_переменной;){
//     тело цикла
// }

// for(let i = 1; i < 6; i++){
//     document.writeln(i + '<br>')
// }

// document.writeln('<br>')

// let i = 1
// while(i < 6){
//     document.writeln(i + '<br>')
//     i++
// }

// for(let i = 1; i < 12; i++){
//     if(i == 3){
//         continue
//     }
//     if(i == 6){
//         break
//     }
//     document.writeln(i + '<br>')
// }

// let n = prompt('n =')
// let sum = 0
// let count = 0
// for(let i = 0; i < n; i++){
//     let num = prompt('-> ')
//     document.writeln(num + '<br>')
//     sum += num
//     if(num != 0){
//         count++
//     }
// }
// console.log(sum);
// console.log(count);
// document.writeln('Сред. арифм.: ' +  (sum / count).toFixed(2) + '<br>')

// let i = 1
// for(; ;){
//     if(i == 7){
//         break
//     }
//     document.writeln(i + '<br>')
//     i++
// }

// let i = 1
// for (; i < 6; i++){
//     document.writeln(i + '<br>')
// }
// console.log(i);

// let start = 5
// let end = 10
// let sum = 0
// let prod = 1
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     } else {
//         prod *= i
//     }
// }
// console.log(`Сумма чётных: ${sum}`)
// console.log(`Произв. неч.: ${prod}`)

// let ch = 987654321;
// document.writeln('Исх. число: ' + ch + '<br>')
// for(let i = 1; ; i *= 10){
//     let res = parseInt(ch / i) // 321 / 1000 => 0
//     if(res == 0){
//         break
//     }
//     document.writeln(res % 10 )
// }

// let sum = 0
// let start = 6
// for (let i = start; i < 30; i += 3) {
//     sum += i
// }
// document.writeln('sum: ' + sum)

// let count = prompt('Enter symb count: ', 7)
// if(count != 0 && 'a'){
//     if(count != NaN){
//     document.writeln(count)
//     }
// }else{
//     alert('Not a symb count')
// }

// let i = 0 // 4
// while(i < 4){   // 4 < 4
//     document.writeln('+++<br>')
//     let j = 0   // 2
//     while(j < 2){   // 2 < 2
//         document.writeln('--<br>')
//         j++
//     }
//     i++
// }

// for(let i = 0; i < 4; i++){
//         document.writeln('+++<br>')
//     for(let j = 0; j < 2; j++){
//         document.writeln('--<br>')
//     }
// }

// let symb = prompt('Enter symb:', '*')
// let tr = prompt('Ввести к-во строк: ')
// let td = prompt('Ввести к-во столбцов: ')
// document.writeln('<table border="1" width="150">')
// for(let i = 0; i < tr; i++){
//     document.writeln('<tr align="center">')
//     for(let j = 0; j < td; j++){
//         document.writeln('<td>' + symb + '</td>')
//     }
//     document.writeln('</tr>')
// }
// document.writeln('</table>')

//  ДЗ
// document.writeln('<table border="1" width="350" height="350" align="center">')
// for(let i = 1; i < 11; i++){
//     document.writeln('<tr align="center">')
//     for(let j = 1; j < 11; j++){
//         if(j % 2 == 0){
//             document.writeln('<td bgcolor="red">' + i * j + '</td>')
//         }else{
//             document.writeln('<td bgcolor="yellow">' + i * j + '</td>')
//         }

//     }
//     document.writeln('</tr>')
// }
// document.writeln('</table>')

//  Massive

// let mas = [2 , 6 , 8]
// console.log(mas[2]);
// document.writeln(mas)

// let mas1 = [5]  // массив на 1 элем со знач. 5
// console.log(mas1);

// let mas2 = new Array(2, 6, 8)
// console.log(mas2);

// let mas3 = new Array(5) // массив на 5 элем, но без значений
// console.log(mas3);

// let mas4 = []
// let mas5 = new Array()
// console.log(mas4);
// console.log(mas5);

// let mas = [2 , 6 , 8]
// console.log(mas);
// document.writeln(mas + '<br>')
// document.writeln(mas.length)

// let arr = [1,2,3,4,5,6]
// document.writeln(arr + '<br>')
// document.writeln(arr.length + '<br>')

// arr.length = 3
// document.writeln(arr + '<br>')
// document.writeln(arr.length + '<br>')

// arr.length = 6
// document.writeln(arr + '<br>')
// document.writeln(arr.length + '<br>')
// document.writeln(arr[1] + '<br>')
// console.log(arr);

// arr.length = 0
// document.writeln('Empty massive' + arr + '<br>')
// document.writeln(arr.length + '<br>')
// console.log(arr);

// посл. индекс массива = длина массива - 1
// length = посл. индекс массива + 1

// let arr1 = [1,2,3,4,5,6]
// document.writeln(arr1 + '<br>')
// document.writeln(arr1[arr1.length - 1] + '<br>')
// console.log(arr1);

// let arr = [5,9,-3,-1,4,-8,7,2,-6]
// for(let i = 0; i < arr.length; i++){
//     document.writeln(arr[i] ** 2 + '<br>')
// }

// let arr = [5,9,-3,-1,4,-8,7,2,-6]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         arr[i] *= -1 // arr[i] = arr[i] * -1
//     }
//     document.writeln(arr[i] + '<br>')
// }
// console.table(arr)

// let arr = [5,9,-3,-1,4,-8,7,2,-6]
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         document.writeln(arr[i] + '<br>')
//         sum += arr[i]
//     }
// }
// document.writeln(sum + '<br>')

// let arr = new Array()
// arr[0] = 15
// arr[1] = 6
// arr[2] = 9
// arr[3] = 4
// arr[6] = 55
// console.log(arr)

// let arr = new Array(5)
// for(let i = 0; i < arr.length;){
//     arr[i] = prompt('ввести ' + ++i + ' элем. массива: ')
// }
// document.writeln(arr + '<br>');

// let arr = new Array(5)
// for(let i = 0; i < arr.length; i++){
//     arr[i] = prompt('ввести ' + (i + 1) + ' элем. массива: ')
// }
// document.writeln(arr + '<br>');
// console.log(arr)

// for(let i = arr.length - 1; i >= 0; i--){   // 4 >= 0
//     document.writeln(arr[i] + ' ');
// }

// let arr = ['a', 'b', 'c']
// arr[0] = arr[0] + '!'
// arr[1] = arr[1] + '!!'
// arr[2] = arr[2] + '!!!'

// console.log(arr);

// let arr = [1, 2, 3, 4]
// arr[0]++
// ++arr[1]
// arr[2]--
// --arr[3]
// console.log(arr);

// let n = +prompt('К-во элементов массива: ')
// let mas = []
// for(let i = 0; i < n; i++){
//     if(n > 5){
//         mas[i] = 0
//     }else{
//         mas[i] = prompt('->')
//     }
// }
// console.log(mas);

// let n = +prompt('Enter element massive count: ')
// let mas = new Array(n)
// for(let i = 0; i < mas.length; i++){
//     mas[i] = prompt('->')
// }
// console.log(mas);
// for(let i = 0; i < mas.length; i++){
//     if(mas[i] > mas[i - 1]){
//     document.writeln(mas[i] + ' ');
//     }
// }

// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25]
// let sum = 0
// let count = 0
// for(let i = 0; i < mas.length; i++){
//     if(mas[i] % 2 == 0){
//         count++
//     }else{
//         sum += mas[i]
//     }
// }
// document.writeln('Count: ' + count + '<br>')
// document.writeln('Sum: ' + sum)

// let mas = [[2,1,1], [6,3,7], [8,5,6]]
// console.log(mas)
// console.table(mas)
// document.writeln(mas[1][2])
// document.writeln(mas[0][2][1])
// for(let i=0; i<mas.length; i++){
//     for(let j=0; j<mas[i].length; j++){
//     document.writeln(mas[i][j]+' ')
//     }
//     document.writeln('<br>')
// }

// let mas = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];
// for (let i = 0; i < mas.length; i++) {
//   for (let j = 0; j < mas[i].length; j++) {
//     document.writeln(mas[i][j] + ' - - - ');
//   }
//   document.writeln('<br>');
// }
//   document.writeln('<br>');
// for (let i = 0; i < mas.length; i++) {
//   for (let j = 0; j < mas[i].length; j++) {
//     document.writeln(mas[i][j] ** 2 + ' - - - ');
//   }
//   document.writeln('<br>');
// }

// let questions = [
//     'На 0 делить можно?',
//     'Волга впадает в Касп. море?',
//     'Атм. давл. увеличивается с высотой?',
//     '2х2 будет 8',
//     'Дельфины - это рыбы',
//     'Мадонна - это наст. имя певицы',
//     'Первая мировая война началась 1 сент. 1939?'
// ]
// let answ = [false, true, false, false, false, false, false]
// let sum = 0
// let res = []
// for(let i = 0; i < questions.length; i++){
//     let ans = confirm(questions[i])
//     if(ans == answ[i]){
//         res[i] = 10
//         sum += res[i]
//     }else{
//         res[i] = 0
//     }
// }
// console.log(res);
// console.log(sum);

// document.writeln('<table border="1" width="500"')
// document.writeln('<tr>')
// document.writeln('<th>Question</th>')
// document.writeln('<th>Result</th>')
// document.writeln('</tr>')

// for(let i = 0)

// let arr = [1,2,3,4,5]
// for(let i of arr){
//     console.log(i);
// }
// for(let i = 2; i < arr.length -1; i++){
//     document.writeln(arr[i] + '<br>')
// }

// let colors = ['red', 'blue', 'green', 'yellow']
// for(let color of colors){
//     document.writeln(color + '<br>')
// }

// let arr = [1,2,3,4,5]
// let flag = false
// for(let elem of arr){
//     if(elem == 3){
//         flag = true
//         break
//     }
// }
// // console.log(flag);
// if(flag ){
//     console.log('+++');
// }else{
//     console.log('---');
// }
// let sum = 0
// let arr = [7,55,9,33,2]
// let max = arr[0]
// // for(let i = 0; i < arr.length; i++){
// //     if(arr[i] > max){
// //         max = arr[i]
// //     }
// // }
// for(let num of arr){
//     if(num > max){
//         max = num
//     }
// }
// console.log(max);

// let sum = 0;
// let arr = [7, 55, 9, 33, 2];
// for (let num of arr) {
//     sum += num;
// }
// console.log(sum);

// let text1 = document.getElementById('text_1')
// console.log(text1)
// console.log(text1.textContent)
// text1.textContent = 'New text 1 </b>html</b>'
// console.log(text1.textContent)

// let text2 = document.getElementById('text_2')
// text2.innerHTML = 'New <b>text 2</b>'

// let res = +prompt('Select pic', '1-Dog, 2-cat, 3-bird, 4-fish')
// document.writeln('<div id="img"></div>')
// let img = document.getElementById('image')
// switch(res){
//     case 1:
//         img.innerHTML = '<img src="../JS_3/img/dog.jpeg">'
//         break
//     case 2:
//         img.innerHTML = '<img src="../JS_3/img/cat.jpeg">'
//         break
//     case 3:
//         img.innerHTML = '<img src="../JS_3/img/bird.jpeg">'
//         break
//     case 4:
//         img.innerHTML = '<img src="../JS_3/img/fish.jpeg">'
//         break
//     default:
//         alert('image not found')
// }

// let tag = document.getElementsByTagName('p')[2]
// console.log(tag);
// tag.innerHTML = 'Hi <u>tag</u>'
// tag.style.color = 'blue'
// tag.style.fontWeight = 'bold'
// tag.style.fontFamily = 'Arial, sans-serif'
// tag.style.backgroundColor = 'silver'
// tag.style.padding = '10px 20px'
// tag.id = 'test'
// tag.className = 'x'

// let tag = document.getElementsByTagName('p')
// tag[2].innerHTML = 'Hi <u>tag</u>'
// tag[2].style.color = 'blue'
// tag[1].style.color = 'orange'

// let q = document.getElementsByClassName('two')
// console.log(q);
// q[1].style.color = 'red'

// document.querySelector('CSS')
// document.querySelectorAll('CSS')

// let id = document.querySelectorAll('#text_1')[0]
// console.log(id)
// id.style.color = 'red'

// let id = document.querySelector('div')
// console.log(id)
// id.style.color = 'red'

// let el = document.querySelector('h2')
// el.style.color = 'red'
// // let el2 = document.querySelectorAll('h2')[1]
// let el2 = document.querySelector('h1 + h2')
// el2.style.color = 'purple'
// let lists = document.querySelectorAll('li')
// // console.log(lists.length);
// for(let i = 0; i < lists.length; i++){
//     lists[i].innerHTML += ' !!!'
// }
// let purple = document.querySelectorAll('.purple li')
// // console.log(purple.length);
// for(let i = 0; i < purple.length; i++){
//     purple[i].style.color = 'purple'
//     purple[i].innerHTML += ' ???'
// }
// // let m = document.querySelectorAll('.red li')[1]
// let m = document.getElementsByClassName('red')[0].getElementsByTagName('li')[1]
// m.style.color = 'orange'

// document.writeln('<div></div>')

// document.writeln('<div id="divSimple"></div>')
// // let div = document.getElementById('divSimple')
// let div = document.querySelector('#divSimple')
// console.log(div);
// div.textContent = `Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на
// стене, на потолке или на полу в помещении или под открытым небом в различных материалах
// (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С
// некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно
// целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных
// величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым
// отверстием), измеренным в миллиметрах.`
// div.style.background = '#f0f'
// div.style.color = '#9ff'
// div.style.width = '50%'
// div.style.outline = '10px dotted #000;'
// div.className = 'resetFont'
// let cl = document.querySelector('.resetFont')
// cl.style.fontSize = '12pt'
// cl.style.fontWeight = 'bold'
// cl.style.textDecoration = 'line-through'

// let el = document.querySelector('.elem')
// console.log(el.closest('.content'));
// // el.style.color = 'green'
// // let blue = el.closest('ul')
// // blue.style.color = 'blue'
// console.log(el.closest('.container'));
// console.log(el.closest('h1'));

// let all = document.querySelectorAll('*')
// let all = document.querySelectorAll('[class="two"]')
// let all = document.querySelectorAll('[class~="two"]')
// let all = document.querySelectorAll('[class^="cont"]')
// let all = document.querySelectorAll('[class$="ner"]')
// let all = document.querySelectorAll('[class*="ne"]')
// let all = document.querySelectorAll(':empty')
// console.log(all);

// let title = document.querySelector('h1')
// console.log(title)
// title.style.color = 'red'

/////////////////////////// Методы массива ///////////////////////////

// let js = ['нужно', 'учить', 'JS']
// document.writeln(js + '<br>')
// console.log(js)

// let last = js.pop()
// console.log(last) // удаляет посл. элем. из массива и возвр. удалённый элем., при этом урезает сам массив
// console.log(js)

// js.push('JS', '!') // Добавляет элем. в конец массива
// console.log(js)

// console.log(js.shift()) // удаляет первый элем. массива и возвр. удалённый элем.
// console.log(js)

// js.unshift('почему', 'нужно') // добавляет элем. в начало массива
// console.log(js)

// let mas = []
// let n = prompt('Enter massive element count: ', 5)
// for(let i = 0; i < n; i++){
//     let x = prompt('Enter num: ')
//     // mas.push(x) // mas[i] = x
//     // mas.unshift(x) // [5,4,3,2,1]

// }
// for(let i = 0; i < n; i++){
//     document.writeln(mas[i] + ' ')
// }

// let masFirst = [1,2,3]
// let masSecond = [11,22,33]
// let masEnd = [] // [1, 11, 2, 22, 3, 33]

// for(let i = 0; i < masFirst.length; i++){
//     masEnd.push(masFirst[i])
//     masEnd.push(masSecond[i])
// }
// document.writeln(masEnd)

// let arr = js.slice(1, 3) // slice(begin, end) - копирует участок массива от begin до end, не включая значения end
// console.log(arr)

// console.log(js.slice(1)); // если комент не указан, продолжается копирование до конца массива
// console.log(js)

// let range = js.toSpliced(1,2) // получение элем-в вне диапазона
// console.log(range)
// console.log(js)

// delete js[1] // удаление значения по заданному индексу
// console.log(js)

// js.splice(1, 1) // splice(start, length) - удаляет из массива указанное число элем., начиная с позиции start, второй параметр указывает кол-во элем. для удаления
// console.log(js)

// js.splice(0, 2, 'Мы', 'изучаем') // такожде можем добавлять элементы
// console.log(js)

// js.splice(2, 0, 'сложный', 'язык') // если не хотим удалять элементы, а хотим добавить, то вторым пар-м указываем знач-е "0" и после него с 3-го параметра указываем добавляемые элем-ы
// console.log(js)

// js.splice(-3, 0, 'но', 'очень', 'интересный') // работает с отриц. индексами, отчёт ведётся с конца
// console.log(js)

// let mas = []
// let n
// do{
//     n = prompt('Enter massive element:')
//     if(n >= 0){
//         mas.push(n)
//     }else{
//         break
//     }
// }while(true)
// document.writeln(mas + '<br>')

// let k = prompt('Enter index for deleting from 0 to ' + (mas.length -1))
// // delete mas[k]
// if(k >= 0 && k < mas.length){
//     mas.splice(k, 1)
// }else{
//     alert('Index not undefined')
// }

// for(let el of mas){
//     document.writeln(el + ' ')
// }

// let index = js.indexOf('сложный') // возвращает 1-й индекс по которому данный элем. может быть найден в массиве, или знач-е "-1" если элемент не найден
// console.log(index)

// js.push('сложный')
// console.log(js)

// let index1 = js.indexOf('сложный', index + 1)  // указывает начальный индекс для поиска
// console.log(index1)

// let index2 = js.lastIndexOf('сложный')
// console.log(index2)

// let isValue = js.includes('интересный') // проверяет содержит ли массив опред. значение
// console.log(isValue);

// let str = js.join() // объеденитель
// console.log(str);

// js.reverse() // меняет порядок следования элем. в массиве на обратный
// console.log(js);

// найти уникальные элементы массива

// let array = ['5',7,4,1,4,7,4,1,4,7,7,1,4,5]
// let res = []
// for(let el of array){   // 1
//     if(!res.includes(el)){ // res = [7,4,1]
//         res.push(el)
//     }
// }
// for(let el of res){
//     document.writeln(el + ' ')
// }

// let str = js.join(' ')
// console.log(str);

// let st = ['Фамилия', 'Имя', 'Отчество']
// let names = new Array(3)

// for(let i = 0; i < names.length; i++){
//     names[i] = prompt('Ввести данные:\n ' + st[i])

// }
// alert(names.join(' '))

// let people = ['Tom','Bob',['Alice','Kate', ['Sam', 'Ann']]]

// let arr = people.flat(2) // упрощает массив с учетом указанной вложенности элем.
// console.log(arr)

// let a = [1,2]
// let b = a.concat(3,4) // создает новый массив, объедияющий несколько массивов, либо в массив добавляются элем.
// console.log(b); // [1,2,3,4]
// let c = ['a', ['b', 'c']]
// let num = a.concat(b, c)
// console.log(num);

// let users = ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann']
// // let modif = users.with(0, 'Thomas')
// console.log(users)
// // console.log(modif)

// console.log(users.sort());

// while (fav != null){
//     fav = prompt('Ввести любое имя: ')
//     arr.push(fav)
// }

// arr[arr.length - 1] = firstName
// arr.sort()
// console.log(arr)

// for(let = i; i < arr.length; i++)

// let n = [1,5,15,2]
// n.sort((a, b) => a -b)
// console.log(n);

// [1,5,15,2]
// [1,15,2,5]

// function Declaration
// function имя(аргументы){тело функции}

// function hello(name){
//     document.writeln('Hello, ' + name + '<br>')
// }
// hello('Igor')
// hello('Ann') // параметр

// function caption(){
//     for(let i = 1; i <= 6; i++){
//         document.writeln('<h' + i + '>Заголовок ' + i + '</h' + i + '>')
//     }
// }
// caption()

// function test(a, b, c){
//     // document.writeln(a + b + c) // 10+20+30=60
//     let res = a + b + c
//     return res
// }
// let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3
// let sum = test(n1,n2,n3) // 60
// // let sum = 60 // 60
// // test(m1,m2,m3) // 6
// console.log(sum);

// function test2(n,m){
//     if(m == 0){
//         return 'Делить на 0 нельзя'
//     }
//     return n / m

// }
// let a1 = test2(10,2)
// let a2 = test2(10,0)

// document.writeln(a1 + '<br>')
// document.writeln(a2)

// function res(n,m){
//     if(n > m){
//         return n - m
//     }else{
//         return n + m
//     }
// }
// let a = +prompt('Enter first numb')
// let b = +prompt('Enter second numb')
// let re = res(a, b)
// alert(re)

// function sum(arr){
//     let res = 0
//     for(let i = 0; i < arr.length; i++){
//         res += arr[i]
//     }
//     return res
// }
// document.writeln(sum([3,8,9,4,1,2,5]) + '<br>')
// document.writeln(sum([1,2,5]) + '<br>')

// function max(n, m){
//     if( n > m ){
//         document.writeln(' Большее число: ' + n + '<br>')
//     }else if (n == m){
//         document.writeln(' Числа равны ')
//     }else{
//         document.writeln(' Большее число: ' + m + '<br>')
//     }
// }
// max(5,2) // Большее число: < 5
// max(2,5) // Большее число: < 5
// max(5,5) // Числа равны

// let arr = new Array(9) // [1,8,9,6,5,3,7,12,5] => [9,6,3,12]

// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow
//     }else{
//         let last = arrayToShow.pop()
//         let str = arrayToShow.join(', ')
//         let res  = str + ' и ' + last
//         return res
//     }
// }
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// // alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));

// function expression (функциональное выражение)

/*
let func = function(аргументы){
    тело функции
}

func(параметры)
*/


// console.log(sum1(20, 30))
// function sum1(a, b) {
//   return a + b
// }

// let sum2 = function (a, b) {
//   return a + b
// }
// console.log(sum2(2, 3))



// let average = function(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return (sum / arr.length).toFixed(2)
// }

// document.writeln(average([3,8,9,4,1,2,5]) + '<br>')
// document.writeln(average([8,2,4]) + '<br>')



// let max = function(arr){
//     let num1 = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(num1 < arr[i]){
//             num1 = arr[i]
//         }
//     }
//     return num1
// }
// document.writeln(max([3,8,9,4,1,2,5]) + '<br>')
// document.writeln(max([1,2,5]) + '<br>')



// (function(){
//     console.log('Hello world')
// })();
// (function(n){
//     console.log(n * n)
// })(4)



// Arrow function(стрелочная функция)

// function test(a,b,c){
//     let res = a + b + c
//     return res
// }

// console.log(test(10,20,30))

// let test2 = (a,b,c) => a + b + c 
// console.log(test2(1,2,3))



// let hi = () => console.log('Hi');
// hi()



// let double = n => n ** 2

// let arr = [5,3,8,2]
// let res = []
// for(let i = 0; i < arr.length; i++){
//     res[i] = double(arr[i])
// }

// console.log(res);



// let symb = (count, a, b) => {
//     for(let i = 0; i < count; i++){
//         document.writeln(i % 2 ? b : a)
//     }
//     document.writeln('<br>')
// }

// symb(9, '+', '-')
// symb(7, 'X', '0')



// let change = lst => {
//     // let a = lst[lst.length - 1] // a = 3
//     // lst[lst.length - 1] = lst[0] // lst[2] = 1
//     // lst[0] = a // lst[0] = 3
//     // return lst

//     let last = lst.pop()
//     let first = lst.shift()
//     lst.push(first)
//     lst.unshift(last)
//     return lst
// }
// document.writeln(change([1,2,3]) + '<br>')
// document.writeln(change([9,12,33,54,105]) + '<br>')
// document.writeln(change(['с', 'л', 'о', 'н']) + '<br>')



// let a = 5
// let b = 7
// console.log('a =', a, 'b =', b);

// let temp = a // 5
// a = b // a = 7
// b = temp // b = 5
// console.log('a =', a, 'b =', b);



// let isGreater = (x, y) => x > y ? true : false

// document.writeln(isGreater(10, 5) + '<br>')
// document.writeln(isGreater(5, 10) + '<br>')



// let chPassword =  password => {
//     let hasUpper = false
//     let hasLower = false
//     let hasNum = false

//     for(let ch of password){
//         // console.log(ch)
//         if('A' <= ch && ch <= 'Z'){
//             hasUpper = true
//         }else if('a' <= ch && ch <= 'z'){
//             hasLower = true
//         }
//         if(0 <= ch && ch <= 9){
//             hasNum = true
//         }
//     }

//     if(password.length >= 8 && hasUpper && hasLower && hasNum){
//         return true
//     }
//     return false
// }

// let pw = prompt('Enter password:')
// if(chPassword(pw)){
//     document.writeln('Password is strong')
// }else{
//     document.writeln('Password is weak')
// }



// let factorial = n =>{
//     let fact = 1
//     for(let i = 1; i <= n; i++){
//         fact *= i 
        
//     }
//     return fact
// }
// document.writeln(factorial(5))



// function getNames(){
//     let fName = 'Ann', lName = 'Vetrova'
//     return [fName, lName]
// }

// let names = getNames()
// console.log(names);
// // let sname = names[1]
// // console.log(sname);
// let [name1, sname] = getNames() // деструктуризациа
// console.log(name1, sname);
// console.log(sname);



// CALLBACK = функция обратного вызова

// function isOdd(number){
//     return number % 2   // 0 or 1 
// }

// function isEven(number){
//     return number % 2 == 0   // 0 or 1 
// }

// function filter(numbers, fn){
//     let results = []
//     for(let number of numbers){
//         if(fn(number)){
//             results.push(number)
//         }
//     }
//     return results
// }

// let num = [1,2,4,7,3,5,6]
// console.log(filter(num, isOdd)); // [1, 7, 3, 5]
// console.log(filter(num, isEven)); // [2, 4, 6]



// function filter(numbers, callback){
//     let results = []
//     for(let number of numbers){
//         if(callback(number)){
//             results.push(number)
//         }
//     }
//     return results
// }

// let num = [1,2,4,7,3,5,6]
// let arr = [8,9,8,7,1,2,3]

// // let oddNumbers = filter(num, function(number){
// //     return number % 2
// // })
// let oddNumbers = filter(num, number => number % 2)
// let oddNumbers2 = filter(arr, number => number % 2)
// let evenNumbers = filter(num, number => number % 2 == 0)

// console.log(oddNumbers); // [1, 7, 3, 5]
// console.log(oddNumbers2); // [9, 7, 1, 3]
// console.log(evenNumbers); // [2, 4, 6]



// forEach() - цикл

// let numbers = [1,2,3,4,5,6]

// numbers.forEach(function(n){ 
//     document.writeln('квадрат числа ' + n + ' = ' + n * n + '<br>')
// });

// numbers.forEach(n => document.writeln('квадрат числа ' + n + ' = ' + n * n + '<br>'))

// ['Hello', 'world'].forEach(alert);

// let textArray = ['Hello', 'world']
// for(let i = 0; i < textArray.length; i++){
//     alert(textArray[i])
// }

// ['Hello', 'world'].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`)
// })



// let numbers = [1,2,3,4,5,6]

// let squares = numbers.map(n => n ** 3)
// console.log(squares);

// let lengths = ['Hello', 'world', '!'].map(item => item.length)
// console.log(lengths);



// let number = [1,-12,8,-4,25,42]

// let passed = number.filter(n => n > 0)
// console.log(passed);

// let mas = []
// for(let i = 0; i < number.length; i++){
//     if(number[i] > 0){
//         mas.push(number[i])
//     }
// }
// console.log(mas)



// let colors = ['red', 'orange', 'green', 'yellow']
// // let newColors = colors.filter(color => color.length > 5)
// let newColors = colors.filter(function(color){
//     return color.length > 5
// })
// console.log(newColors)



// let number = [1,-12,8,-4,25,42]
// let passed = number.every(n => n > 0) // проверяет все ли элементы соотв-ую определённому условию
// console.log(passed); // false

// let number = [1,-12,8,-4,25,42]
// let passed = number.some(n => n > 0) // проверяет на соотв. хотябы один из элементов
// console.log(passed); // true

// массив.reduce и массив.reduceRight
// используются для вычисления единого знач-я на основе массива


// let arr = [1,2,3,4,5]

// let result = arr.reduce((sum, current) => sum + current, 0)
// document.writeln(result)
/*
let sum = 0
let current = 1
sum + current => 0 + 1 = 1
sum = 1
current = 2
sum + current => 1 + 2 = 3
sum = 3
current = 3
sum + current => 3 + 3 = 6
sum = 6
current = 4
sum + current => 6 + 4 = 10
sum = 10
current = 5
sum + current => 10 + 5 = 15
sum = 15
*/



// document.writeln(Math.floor(7.9) + '<br>') // округление в нижнюю сторону
// document.writeln(Math.ceil(7.2) + '<br>') // округление в верхнюю сторону
// document.writeln(Math.round(7.5) + '<br>') // округление по законам матем.



// (function(){
//     document.writeln(Math.random() + '<br>') // ген. случайное число от 0 до 1(но 1 не включается)
// })()

// (function(min, max){
//     document.writeln(Math.floor(Math.random() * (max - min) + min)+ '<br>')
// })(2, 9) // случайное число из диап. от 2 до 9 (не включая)

// document.writeln(Math.floor(Math.random() * 9) + '<br>') // от 0 до 9(не включая)
// document.writeln(Math.floor(Math.random() * 7 + 2) + '<br>') // от 2 до 9(не включая)
// document.writeln(parseInt(Math.random() * 8 + 6) + '<br>') // от 6 до 14(не включая)



// let pickRandom = function(arr){
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// let randomWorld = ['Цикл','Массив','Условия','Функция', 'Переменная']
// let word = pickRandom(randomWorld)
// document.writeln(word)

// let randomWorld = ['Цикл','Массив','Условия','Функция', 'Переменная']
// let word = pickRandom(randomWorld)
// document.writeln(word)

// function pickRandom(arr){ // ['Цикл','Массив','Условия','Функция', 'Переменная']
//     return arr[Math.floor(Math.random() * arr.length)]
// }



// document.writeln('<div id="block"></div>')
// let id = document.getElementById('block')
// id.style.height = '100px'
// id.style.width = '100px'
// // id.style.background = 'rgb(255, 0, 0)'
// createColor()
// function createColor(){
//     let r = parseInt(Math.random() * 256)
//     let g = parseInt(Math.random() * 256)
//     let b = parseInt(Math.random() * 256)
//     // id.style.background = 'rgb('+ r +', '+ g +', '+ b +')'
//     id.style.background = `rgb(${r}, ${g}, ${b})`
// }

// document.writeln('<div id="block"></div>')
// let id = document.getElementById('block')
// id.style.height = '100px'
// id.style.width = '100px'
// id.style.background = `rgb(${createColor()}, ${createColor()}, ${createColor()})`
// function createColor(){
//     return Math.floor(Math.random() * 256)
// }



// function fn(a, b, ...args){
//     console.log('a =', a, 'b =', b, 'args =', args);
    
// }
// fn(1)
// fn(1, 2, 3, 'A', 'B', 'C')



// function sum(...args){
//     let total = 0
//     for(let a of args){
//         total += a
//     }
//     return total
// }

// function sum(...args){
//     return args
//         .filter(function(e){
//             return typeof e === 'number'
//         })
// }

// function sum(...args){
//     return args.filter(e => typeof e === 'number')
// }

// function sum(...args){
//     return args
//         .filter(function(e){
//             return typeof e === 'number'
//         })
//         .reduce(function(prev, curr){
//             return prev + curr
//         })
// }

// function sum(...args){
//     return args
//         .filter(e => typeof e === 'number').reduce((prev, curr) => prev + curr)
// }

// console.log(sum(10, 'Hi', null, undefined, 20));



// let combine = (...arg) => arg.reduce((prev, curr) => prev + ' ' + curr)

// console.log(combine('Hello', 'World', '!'));

/*
prev = ''
curr = 'Hello'
prev  = 'Hello'
curr = 'world'
prev = 'Hello world'
curr = '!'
prev = 'Hello world !'
*/



// function hello(name){
//     name = name || 'stranger'
//     document.writeln('Hello, ' + name + '!<br>')
// }

// function hello(name = 'stranger'){
//     document.writeln('Hello, ' + name + '!<br>')
// }
// hello('Sergio')
// hello()



// function fn(a = 0, b=0){
//     console.log(a + b);
    
// }
// fn(1,2)
// fn(1)
// fn()



// function rect(w, h = 100, bg = 'gold'){
//     document.writeln('<div id="shape"></div>')
//     let id = document.getElementById('shape')

//     id.style.width = w + 'px'
//     id.style.height = h + 'px'
//     id.style.background = bg
// }

// // rect(200, 100, 'green')
// // rect(200,100)
// // rect(300)
// rect(50, 50, 'red')



// let j = 2 // global var

// function n(){
//     let j = 3 // local var
// }

// let j = 2 

// function n(){
//     j = 3 
// }

// n()
// console.log(j); // 3





// function func(num1, num2){
//     function square(num){
//         return num * num
//     }
//     return square(num1) + square(num2)
// }

// console.log(func(2,3)); // 2* 2+3*3=> 4+9=13
// console.log(square(4))
// 



// function test(num){ // 5
//     function func(localNum){ // 7
//         console.log(localNum); // 7
        
//     }
//     func(num + 2) // 5 + 2 = 7
// }
// test(5)



// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function() {
//                     return [num1, num2, num3, num4]
//                 }
//             }
//         }
//     }
// }
 
// console.log(func(2)(3)(4)(5)());



// function hello(){
//     console.log('Hi');
    
// }

// let fn = hello
// console.log(fn);



// замыкание

// function test(){
//     let num = 5

//     return function(){
//         console.log(num);
//     }
// }

// let func = test()
// // console.log(func);
// func()



// function outer(n){
//     return function(x){
//         return n + x
//     }
// }

// let add = outer(5)
// console.log(add(10));

// let add1 = outer(6)
// console.log(add1(10));



// function test(city){
//     let n = 0

//     return function(){   
//         n++
//         console.log(city, n);}
    
// }

// let func1 = test('Moscow')
// func1()
// func1()
// let func2 = test('Sochi')
// func2()
// func2()
// func2()
// func1()



// function isBetween(a, b){
//     return function (x){
//         return x >= a && x <= b
//     }
// }

// function isArray(arr){
//     return function(x){
//         return arr.includes(x)
//     }
// }

// let arr = [4,7,1,3,5,2,6]
// console.log(arr.filter(isBetween(3, 6)));
// console.log(arr.filter(isArray([1, 2, 10])));


// let mas = ['копеек', 'копейка', 'копейки', '- число за пределами диап.']
// let f = -5
// let l = 99
// let ch = prompt('кол-во копеек: ' , 5)
// console.log(ch, count(f, l, ch)(mas));

// function count(start, end, num){
//     if(num < 0)
//     num = (-1) * num
//     let n = num % 10
//     let m = num % 100
//     let ch1

//     // let ch1
//     // if(start <= num && num <= end){
//     // ch1 = n == 1 && m != 11 ? 1 
//     // : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 
//     // : 0
//     // }else{
//     //     ch1 = 3
//     // }

//     ch1 = !(start <= num && num <= end) ? 3
//     : n == 1 && m != 11 ? 1 
//     : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 
//     : 0
//     return arr => arr[ch1]
// }



/////////////////////////////////////////////////////////////////
// let str = "I\'m a JavaScript \"programmer\""
// // document.writeln(str + '<br>');
// // document.writeln(str[2] + '<br>');

// // str = str[2] + 'y'
// // document.writeln(str + '<br>');
// // document.writeln(str.length + '<br>');

// // document.writeln(str[6] + '<br>');
// // document.writeln(str.at(6) + '<br>');
// // document.writeln(str.at(-2) + '<br>');

// // for(let n of str){
// //     console.log(n);
    
// // }

// // document.writeln(str.toUpperCase() + '<br>');
// // document.writeln(str.toLowerCase() + '<br>');
// // document.writeln(str + '<br>');

// // let n = prompt('Enter name', 'igor')
// // alert(first(n))

// // function first(st){
// //     // let newStr = st.at(0).toUpperCase()
// //     let newStr = st[0].toUpperCase()

// //     for(let i = 1; i < st.length; i++){
// //         // newStr += st.at(i).toLowerCase()
// //         newStr += st[i].toLowerCase()
// //     }

// //     return newStr
// // }



// // let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте.";
// // countLetters(s)

// // function countLetters(st){
// //     let letters = ['а','б','в']
// //     for(let i = 0; i < letters.length; i++){ //['а','б','в']
// //         let count = 0 // 0
// //         for(let j = 0; j < st.length; j++){ // "абббабввбабвбвббабвббабв"
// //             if(st[j] == letters[i]){ // в == в
// //                 count++ // 6
// //             }
// //         }
// //         document.writeln('Символ "' + letters[i] + "' встретился " + count + " раз<br>");
// //     }
// // }


// let str1 = "I'm learn JavaScript. I'm like JavaScript"

// str = str.concat('. ', str1)
// document.writeln(str + '<br>');

// let msg  = '*'
// document.writeln(msg.repeat(30) + '<br>');

// document.writeln(str.indexOf('JavaScript1') + '<br>'); // возвращает индекс , на котором находится подстрока или "-1" если ничего не найдено

// document.writeln(str.indexOf('JavaScript', 7) + '<br>');
// document.writeln(str.lastIndexOf('JavaScript') + '<br>'); // последнее совпадение либо поиск с правой стороны

// document.writeln(str.includes('JavaScript') + '<br>')
// document.writeln(str.startsWith('JavaScript', 6) + '<br>')
// document.writeln(str.endsWith('JavaScript', 47) + '<br>')
// document.writeln(str.length + '<br>')



// let email

// do{
//     email = prompt('Enter email:', 'test')
//     if(email.indexOf('@') == -1){
//         alert("Isn't Incorrected.")
//         continue
//     }
//     break

// }while(true)
//     alert('Is corrected')



// // let st = "I'm learn C++. I'm like C++"
// // let str = "I\'m a C++ \"programmer\""
// let arr = str.split('JavaScript')
// console.log(arr);
// let st = arr.join('C++')
// console.log(st + '<br>');

// // let text = st.replace('C++', 'JavaScript')
// let text = st.replaceAll('C++', 'JavaScript')
// console.log(text + '<br>');



// document.writeln(str.slice(0, 3) + '<br>')
// document.writeln(str.slice(6) + '<br>')
// document.writeln(str.slice(-20, -10) + '<br>')
// document.writeln(str.slice(3, 0) + '<br>')
// document.writeln(msg.repeat(30) + '<br>');

// document.writeln(str.substring(0, 3) + '<br>')
// document.writeln(str.substring(6) + '<br>')
// document.writeln(str.substring(3,0) + '<br>')



// let style = prompt('Ввести свойство CSS', 'background-color')
// alert(def(style))

// function def(st){
//     let arr = st.split('-')
//     console.log(arr);
//     for(let i = 1; i < arr.length; i++){
//         // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1)
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }

//     return arr.join('')
// }



// let hello = '   Hello  '
// console.log('>' + hello + '<');
// let beforeLength = hello.length
// console.log('Length string before:',beforeLength);

// hello = hello.trim()
// console.log('>' + hello + '<');
// let afterLength = hello.length
// console.log('Length string after:',afterLength);

// let add = hello.padStart(15, '_')
// console.log('>' + add + '<');
// add = hello.padEnd(15, '_')
// console.log('>' + add + '<');

// document.writeln(1)



// document.writeln('hello' > 'Hello')
// document.writeln('hello'.codePointAt(0))
// document.writeln('Hello'.codePointAt(0))
// document.writeln('Ё'.codePointAt(0)) // 1025
// document.writeln('А'.codePointAt(0)) // 1040
// document.writeln('Я'.codePointAt(0)) // 1071
// document.writeln('а'.codePointAt(0)) // 1072
// document.writeln('я'.codePointAt(0)) // 1103
// document.writeln('ё'.codePointAt(0)) // 1105
// // Ё...А-Яа-я...ё



// document.writeln(String.fromCodePoint(104))
// document.writeln(String.fromCodePoint(1025))

// let a = 97
// let b = 122
// if(a > b){
// for(let i = b; i <= a; i++){
//     document.writeln(String.fromCodePoint(i))
// }
// }else{

// for(let i = a; i <= b; i++){
//     document.writeln(String.fromCodePoint(i))
// }
// }



// let shortest = 12
// let longest = 18
// let minACSII = 33
// let maxACSII = 126

// function randomPass(){
//     let randomLength = rand(shortest, longest)
//     let res = ''
//     for(let i = 0; i < randomLength; i++){
//         let randomChar = String.fromCodePoint(rand(minACSII, maxACSII))
//         res = res += randomChar
//     }

//     return res
// }

// function rand(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// document.writeln('Your random pass: ' + randomPass())



// Рекурсивная функция

// function elevator(n){
//     if( n == 0){
//         document.writeln('You are in the basement<br>')
//         return
//     }
//     console.log(n);
    
//     elevator(n - 1)
//      document.writeln(n + ' ')
// }

// let n1 = prompt('What floor are you: ', 5)
// elevator(n1)



// function sum(n){
//     if(n <= 1){
//         return n
//     }
//     return n + sum(n - 1)
// }

// document.writeln(sum(5))



// let num = +prompt('Number: ', 2)
// let degree = +prompt('Degree:', 4)

// document.writeln(num, ' in degree ', degree, ' = ', deg(num,degree))

// function deg(ch, st){
//     if(st){
//         return ch * deg(ch, st - 1)
//     }
//     return 1
// }



// let factorial = n => {
//     let fact = 1
//     for(let i = 1; i <= n; i++){
//         fact *= i
//     }
//     return fact
// }
// document.writeln(factorial(5))



// стек: 5 4 3 2 1
// 1 > 0 ? 1 : 1
// let factorial = n => (n > 0) ? n * factorial(n - 1) : 1
// document.writeln(factorial(5))



// function toStr(n, base){ // 254
//     let convert = '0123456789ABCDEF'
//     if(n < base){
//         return convert[n]
//     }else{
//         return toStr(parseInt(n / base), base) + convert[n % base]
//     }
// }
// document.writeln(toStr(254, 16))




////////////////////////////////////////// 
/// СОБЫТИЯ

// function loadStr(){
//     alert('Page are loaded')
// }

// let m = document.getElementById('mes')

// function over(){
//     m.style.color = 'red'
// }

// function out(){
//     m.style.color = 'pink'
// }

// function change(){
//     let id = document.querySelector('h2')
//     id.style.color = 'blue'
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     document.body.style.background = `rgb(${r},${g},${b})`
// }

// let newimg = document.getElementById('newimg')

// function on(){
//     newimg.src = './JS_6/night.png'
// }

// function off(){
//     newimg.src = './JS_6/day.png'
// }



// let but = document.getElementById('but')

// but.onclick = function(){
//     alert('Thanx')
// }

// function hello(){
//     alert('Thanx')
// }

// but.onclick = hello



// let hex = '0123456789ABCDEF'.split('')
// console.log(hex);

// let button = document.getElementById('btn')
// let color = document.querySelector('.color')

// button.onclick = () => {
//     let hexColor = generateHex()
//     console.log(hexColor);
//     color.textContent = hexColor
//     document.body.style.background = hexColor
    
// }

// function generateHex(){
//     let hexColor = '#'
//     for(let i = 0; i < 6; i++){
//         hexColor += hex[getRandomNumber()]
//     }
//     return hexColor
// }

// function getRandomNumber(){
//     return Math.floor(Math.random() * hex.length)
// }



// function change(id){
//     id.innerHTML = 'New text'
//     id.style.color = 'red'
// }

// function change(id){
//     id.innerHTML = 'New text'
//     id.style.color = 'red'
// }



// function setColor(color){
//     document.body.style.background = color.className
// }



// let el = document.querySelector('#elem')

// // элемент.addEventListener('тип события', функция)
// el.addEventListener('click', function(){
//     el.innerHTML = 'New text'
// })

// el.addEventListener('contextmenu', function(){
//     el.style.color = 'green'
//     el.style.background = 'yellow'
// })



// let searchInput = document.querySelector('#searchInput')
// let list = document.querySelectorAll('#list li')

// searchInput.addEventListener('input', function(){
//     let searchTerm = this.value.toLowerCase()
//     // console.log(searchTerm);
//     // console.log(list.length);

//     for(let i = 0; i < list.length; i++){
//         let item = list[i]
//         if(item.textContent.toLowerCase().indexOf(searchTerm) !== -1){
//             item.style.display = 'block'
//         }else{
//             item.style.display = 'none'
//         }
//     }
    
// })



// let but = document.querySelector('button')

// but.addEventListener('click', function(event){
//     console.log(event);
    
// })



// let btns = document.querySelectorAll('input')

// let handleClick = function(e){
//     console.log('Clicked at:', e.target.value);
    
// }

// for(let i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', handleClick)
// }



// document.addEventListener('mousemove', function(e){
//     let c = document.querySelector('#ev')
//     let x = e.clientX
//     let y = e.clientY
//     // console.log(e);

//     c.textContent = 'X = ' + x + ', Y = ' + y

//     c.addEventListener('dblclick', function(e){
//         e.target.style.background = 'red'
//     })
// })



// let section = document.querySelector('section')
// let div = document.querySelector('div')
// let p = document.querySelector('p')

// section.addEventListener('click', function(){
//     section.style.background = 'red'
// })

// div.addEventListener('click', function(event){
//     div.style.background = 'orange'
//     event.stopPropagation()
// })

// p.addEventListener('click', function(){
//     p.style.background = 'yellow'
// })



// let link = document.querySelector('a')

// link.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('Link canceled');
    
// })



// let input = document.querySelector('#but')
// input.addEventListener('click', handle)

// function handle(){
//     alert('Thanx')
//     input.removeEventListener('click', handle)
// }



// setTimeout('alert("Text")', 1000)
// setTimeout(hello, 1000)
// setTimeout('hello("Hi", "friend")', 1000)
// setTimeout(hello, 1000, "Hi", "friend")

// function hello(h, n){
//     alert(h + ', ' + n + '!')
// }

// setTimeout(hello)

// function hello(){
//     alert('Hi')
// }



// document.writeln('<div id="dt">Make animated text</div>')

// let tag = document.querySelector('#dt')
// let text = document.querySelector('#dt').innerHTML
// let i = 0

// window.addEventListener('load', animText)

// function animText(){
//     tag.innerHTML = text.substring(0, i)
//     i++
//     if(i > text.length){
//         i = 0
//     }
    
//     setTimeout(animText, 150)
// }



// let d = new Date()
// document.writeln(d + '<br>')
// document.writeln(d.toDateString() + '<br>')
// document.writeln(d.getFullYear() + '<br>')
// document.writeln(d.getMonth() + '<br>') // месяцы от 0 до 11
// document.writeln(d.getDate() + '<br>') // 12
// document.writeln(d.getDay() + '<br>') // 0 - воскресенье



// let d = new Date(2026, 11, 18, 10, 0,0).getTime()
// console.log(d);

// Сегодня: 12 апреля 2026, Воскресенье



//// setInterval(функция, интервал)


// document.writeln('<input type="button" value="Start / Stop">')
// document.querySelector('input').addEventListener('click', st)

// function setColor(){
//     let x = document.body
//     x.style.background = (x.style.background == 'yellow') ? 'orange' : 'yellow'
// }

// let act, run  // run = undefined / false
// console.log(run);

// function st(){
//     if(!run){ // !false => true
//         act = setInterval(setColor, 1000)
//         // run = true
//     }else{
//         clearInterval(act)
//         // run = false
//     }
//     run = !run // false
    
// }

// document.writeln('<input type="button" value="Start">')
// document.writeln('<input type="button" value="Stop">')
// document.querySelector('input').addEventListener('click', st)
// document.querySelectorAll('input')[1].addEventListener('click', st2)

// function setColor(){
//     let x = document.body
//     x.style.background = (x.style.background == 'yellow') ? 'orange' : 'yellow'
// }

// let act
// function st(){
//     act = setInterval(setColor, 1000)
//     console.log(act);
// }

// function st2(){
//     clearInterval(act)
// }



// document.writeln('<div id="text">Time</div>')

// window.addEventListener('load', () => setInterval(time, 1000))

// window.addEventListener('load', function(){
//     setInterval(time, 1000)
// })

// function time(){
//     let d = new Date()
//     let hour = d.getHours()
//     let min = d.getMinutes()
//     let sec = d.getSeconds()
//     if(min < 10){
//         min = '0' + min
//     }
//     if(sec < 10){
//         sec = '0' + sec
//     }
//     let t = hour + ':' + min + ':' + sec
//     document.querySelector('#text').innerHTML = t
    
// }



// document.writeln(`
//     <input type='text' id='timer' value='0.0' size='4'> <br>
//     <br>
//     <input type='button' value='Start / Stop'> <br>
//     <br>
//     <input type='button' value='Clear'>
//     `)

// document.querySelector('input[value="Start / Stop"]').addEventListener('click', startTimer)
// document.querySelector('input[value="Clear"]').addEventListener('click', resetTimer)

// let act, run
// function startTimer(){
//     if(!run){
//         act = setInterval(incTimer, 100)
//     }else{
//         clearInterval(act)
//     }
//     run = !run
// }

// let tsec = 0
// function incTimer(){
//     tsec++
//     let t = tsec / 10.0
//     if(tsec%10 == 0){
//         t += '.0'
//     }
//     document.getElementById('timer').value = t

// }

// function resetTimer(){
//     document.getElementById('timer').value = '0.0'
//     tsec = 0
// }



// let countdownElement = document.querySelector('.countdown')
// let items = document.querySelectorAll('.countdown-item > h4')

// let countdownDate = new Date(2026, 3, 18, 16, 29, 0).getTime()

// function getCountTime(){
//     let now = new Date().getTime()

//     let distance = countdownDate - now

//     /*
//     1s = 1000msec
//     1m = 60sec
//     1h = 60m
//     1d = 24h
//     */

//     let oneDay = 24 * 60 * 60 * 1000
//     let oneHour = 60 * 60 * 1000
//     let oneMinute = 60 * 1000

//     let days = Math.floor(distance / oneDay)
//     let hours = Math.floor(distance % oneDay / oneHour)
//     let minutes = Math.floor(distance % oneHour / oneMinute)
//     let seconds = Math.floor(distance % oneMinute / 1000)

//     let values = [days, hours, minutes, seconds]

//     items.forEach(function(item, index){
//         item.textContent = values[index]
//     })
    
//     if(distance < 0){
//         clearInterval(countdown)
//         countdownElement.innerHTML = '<h4 class="expired">Время вышло!</h4>'
        
//     }
// }

// let countdown = setInterval(getCountTime, 1000)


// getCountTime()



// let but = document.querySelector('#cl')
// but.addEventListener('click', myMove)

// function myMove(){
//     let elem = document.getElementById('animate')
//     let pos = 0
//     let id = setInterval(frame, 10)

//     function frame(){
//         if(pos == 350){
//             clearInterval(id)
//         }else{
//             pos++
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }

//     }

// }



// document.image.border = '1'
// document.writeln('<br>Ширина изображения: ' + document.image.width)
// document.writeln('<br>Высота изображения: ' + document.image.height)

// document.image.width = 200 + 5
// document.image.height = 50 

// document.writeln('<br>*************************************************')
// document.writeln('<br>Ширина изображения: ' + document.image.width)
// document.writeln('<br>Высота изображения: ' + document.image.height)

// document.image.src = './JS_6/blue_star.png'



// document.image.addEventListener('click', changeImage)

// let flag = 0
// function changeImage(){
//     if(flag == 0){
//         document.image.src = './JS_6/blue_star.png'
//         flag = 1
//     }else{
//         document.image.src = './JS_6/golden_star.png'
//         flag = 0
//     }
// }



// let array = ['./JS_7/2.jpg', './JS_7/3.jpg', './JS_7/4.jpg']

// document.writeln('<input type="button" value="<" name="left">')
// document.writeln("<img id='sl' src='"+ array[0] +"'>")
// document.writeln('<input type="button" value=">" name="right">')

// document.getElementsByName('right')[0].addEventListener('click', setRight)
// document.getElementsByName('left')[0].addEventListener('click', setLeft)

// let i = 0
// let img = document.getElementById('sl')

// function setRight(){
//     i++
//     if(i == array.length){
//         i = 0
//     }
//     img.src = array[i]
// }

// function setLeft(){
//     i--
//     if(i < 0){
//         i = array.length - 1
//     }
//     img.src = array[i]
// }



// let imgTime = [
//     './JS_6/Task/c0.gif',
//     './JS_6/Task/c1.gif',
//     './JS_6/Task/c2.gif',
//     './JS_6/Task/c3.gif',
//     './JS_6/Task/c4.gif',
//     './JS_6/Task/c5.gif',
//     './JS_6/Task/c6.gif',
//     './JS_6/Task/c7.gif',
//     './JS_6/Task/c8.gif',
//     './JS_6/Task/c9.gif'
// ]
// let masImg = document.querySelectorAll('#block img')

// clock()

// function clock(){
//     let time = new Date()
//     let hours = time.getHours()
//     let min = time.getMinutes()
//     let sec = time.getSeconds()
//     getImg(hours, min, sec);
//     setTimeout(clock, 1000)
// }

// function getImg(h, m, s){  // h = 15
//     masImg[0].src = imgTime[parseInt(h / 10)]
//     masImg[1].src = imgTime[h % 10]

//     masImg[3].src = imgTime[Math.floor(m / 10)]
//     masImg[4].src = imgTime[m % 10]
//     if(s < 10){
//         masImg[6].src = imgTime[0]
//         masImg[7].src = imgTime[String(s)[0]]
//     }else{
//         masImg[6].src = imgTime[String(s)[0]]
//         masImg[7].src = imgTime[String(s)[1]]
//     }


// }


////////////////////////ДЗ
// document.querySelector('button').addEventListener('click', function(){
//     console.log(document.querySelector('input').value);
// })

// let a = 5
// let b = 7
// console.log(a, 'a');
// console.log(b, 'b');

// let temp = a
// a = b
// b = temp

// console.log(a, 'a');
// console.log(b, 'b');




//////////////////////////////////////////////////////
/* Document Object Model */
//////////////////////////////////////////////////////

// alert(document.documentElement.innerHTML)
// alert(document.head.innerHTML)
// alert(document.body.innerHTML)

// let myTitle = document.querySelector('h1').innerHTML
// console.log(myTitle);
// let title3 = document.querySelector('h3').firstChild.nodeValue
// let title3 = document.querySelector('h3').lastChild.nodeValue
// let title3 = document.querySelector('h3').childNodes[0]
// console.log(title3);

// document.querySelector('h1').innerHTML = document.querySelector('h3').innerHTML

// let myTitle = document.querySelector('h1').firstChild
// // alert(myTitle.nodeName) // H1
// alert(myTitle.nodeType) // 



// let elem = document.querySelector('#root')

// let tag = document.createElement('p') // <p></p>
// let node = document.createTextNode('Новый текст') // Новый текст

// tag.append(node) // <p>Новый текст</p>

// elem.append(tag) // добавляет новый элем. последним дочерним элементом внутри родительского

// elem.prepend(tag) // добавляет новый элем. первым дочерним элементом внутри родительского

// elem.before(tag) // добавляет элем. до выбранного id 

// elem.after(tag) // добавляет элем. после выбранного id 

// elem.replaceWith(tag) // заменяет ном элементом выбранный id


// let tree = document.querySelector('.tree')
// for(let li of tree.querySelectorAll('li')){
//     let span = document.createElement('span') // <span></span>
//     li.prepend(span) // <li><span></span>...</li>
//     span.append(span.nextSibling)
// }

// tree.addEventListener('click', function(event){
//     if(event.target.tagName != 'SPAN'){
//         return
//     }

//     let childrenContainer = event.target.parentNode.querySelector('ul')
//     if(!childrenContainer){
//         return
//     }

//     childrenContainer.hidden = !childrenContainer.hidden
// })



// let list = document.querySelector('ul')

// let newItem = document.createElement('li')
// // newItem.textContent = 'New <i>list element</i>'
// newItem.innerHTML = 'New <i>list element</i>'

// list.append(newItem)



// let  i = 1
// document.querySelector('#func1').addEventListener('click', change)
// document.querySelector('#func2').addEventListener('click', add)

// function change(){
//     let elem = document.querySelector('#list2').lastChild
//     document.querySelector('#list1').append(elem)
// }

// function add(){
//     let elem = document.createElement('li')
//     elem.innerHTML = 'Water' + i
//     document.querySelector('#list2').append(elem)
//     i++
// }



// let calendar = document.getElementById('calendar')
// let date = new Date()
// let year = date.getFullYear()
// let month = date.getMonth() + 1

// createCalendar(calendar, year, month)

// function createCalendar(elem, year, month){
//     let currDate = new Date(year, month -1, 1)
//     let findDate = new Date(year, month, 0)

//     while(currDate.getDay() != 1){
//         currDate.setDate(currDate.getDate() -1)
//     }
    
//     let currentMonth = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'June',
//         'July',
//         'Aug',
//         'Sept',
//         'Oct',
//         'Nov',
//         'Dec'
//     ]

//     let current = document.createElement('h2')
//     current.textContent = `${currentMonth[month -1]} ${year}`
//     elem.append(current)

//     let table = document.createElement('table')
//     table.innerHTML = `
//     <tr>
//         <th>пн</th>
//         <th>вт</th>
//         <th>ср</th>
//         <th>чт</th>
//         <th>пт</th>
//         <th>сб</th>
//         <th>вс</th>
//     </tr>
//     `
//     while(currDate <= findDate){
//         let tr = document.createElement('tr')
//         for(let i = 0; i < 7; i++){
//             let td = document.createElement('td')
//             if(currDate.getMonth() == month -1){
//                 td.textContent = currDate.getDate()
//             }
//             tr.append(td)
//             currDate.setDate(currDate.getDate() + 1)
//         }
//         table.append(tr)
//     }

//     elem.append(table)
// }



// let div = document.querySelector('#root')
// div.insertAdjacentHTML('beforebegin', '<p>Before selected elem</p>')
// div.insertAdjacentHTML('afterend', '<p>After selected elem</p>')
// div.insertAdjacentHTML('afterbegin', '<p>First inside selected elem</p>')
// div.insertAdjacentHTML('beforeend', '<p>A last inside selected elem</p>')

// let child = document.querySelector('#p1')
// // child.remove()
// let second = document.querySelector('#p2')
// second.after(child)



// let ul = document.querySelector('ul')
// let li = ul.cloneNode(true)

// li.querySelector('li').innerHTML = 'Начало клон-ых элементов'
// ul.after(li)



// let list = document.querySelector('.list') //ul
// list.insertAdjacentHTML('beforebegin', '<h2>List of </h2><hr>')
// let listInner = document.querySelector('h2')
// listInner.insertAdjacentText('beforeend', 'planets')
// list.insertAdjacentHTML('afterbegin', '<li>Sun</li>')
// list.insertAdjacentHTML('beforeend', '<li>Mars</li>')
// list.insertAdjacentHTML('afterend', '<hr>')

// let hr = document.querySelectorAll('hr')[1]
// let h4 = document.createElement('h4')
// h4.innerHTML = 'List end'
// hr.insertAdjacentElement('afterend', h4)

// let idRemove = setInterval(function(){
//     let li = document.querySelector('li:last-child')
//     if(li === null){
//         clearInterval(idRemove)
//         // console.log('list clear');
//         list.insertAdjacentHTML('afterbegin', '<li>List clear</li>')
        
//     }else{
//             li.remove()
//     }

// }, 500)



// let div = document.querySelector('div')
// div.className = 'alert'
// let activeDiv = document.querySelector('.active')
// activeDiv.classList.add('hidden')
// // activeDiv.classList.remove('hidden')
// activeDiv.classList.toggle('hidden')
// activeDiv.classList.replace('active', 'alert')



// let menu = document.querySelector('.menu')
// let child = document.querySelectorAll('.menu li')

// menu.addEventListener('click', (e) => {
//     if(e.target.tagName === 'LI'){
//         for(let item of child){
//             item.classList.remove('active')
//         }
//         e.target.classList.add('active')
//     }
// })



// let menuElem = document.getElementById('sweeties')
// let titleElem = menuElem.querySelector('.title')

// titleElem.addEventListener('click', function(){
//     menuElem.classList.toggle('open')
// })



// let brush = document.createElement('div')
// brush.classList.add('brush')

// brush.hidden = true

// document.addEventListener('mouseover', function(){
//     brush.hidden = false
// })

// document.addEventListener('mouseout', function(){
//     brush.hidden = true
// })

// document.addEventListener('mousemove', function(e){

//     brush.style.left = `${e.clientX}px`
//     brush.style.top = `${e.clientY}px`

//     if(e.buttons === 1){
//         let paint = document.createElement('div')
//         paint.classList.add('paint')

//         paint.style.left = `${e.clientX}px`
//         paint.style.top = `${e.clientY}px`

//         document.body.append(paint)
//     }
    
    
// })

// document.addEventListener('mousedown', function(){
//     brush.style.scale = '0.8'
// })

// document.addEventListener('mouseup', function(){
//     brush.style.scale = '1'
// })

// document.body.append(brush)



// let frogImg = document.getElementById('green-frog')

// console.log(frogImg.id);
// console.log(frogImg.className);
// console.log(frogImg.alt);
// console.log(frogImg.title);
// console.log(frogImg.src);

// console.log(frogImg.getAttribute('src'));

// frogImg.title = 'New text'

// frogImg.setAttribute('src', './JS_7/4.jpg')
// // frogImg.removeAttribute('src')
// console.log(frogImg.hasAttribute('src'));

// console.log(frogImg.getAttribute('data-frog'));

// console.log(frogImg.dataset.frog);



// let lengthPath = 5
// let pagination = document.querySelector('.pagination')
// let product = document.querySelector('.product-cover')
// let data = new Array(18)
// let filter = document.querySelector('.buttons')

// for(let i = 0; i < data.length; i++){
//     data[i] = document.createElement('div')
//     data[i].classList.add('card')
//     if(i % 3){
//         data[i].classList.add('blue')
//     }else{
//         data[i].classList.add('gray')
//     }
//     let node = document.createTextNode(i + 1)
//     data[i].append(node)
//     product.append(data[i])
// }

// let chunks = splitParts(data)
// renderChunks(0)
// renderPagination()

// pagination.addEventListener('click', e => {
//     let item = e.target.closest('.pag-item')

//     if(item){
//         let active = pagination.querySelector('.pag-item.active'), part
//         if(item.classList.contains('item-prev') || item.classList.contains('item-next')){
//             if(item.classList.contains('disable')){
//                 return false
//             }
//             part = +active.dataset.part
//             part = item.classList.contains('item-prev') ? part - 1 : part + 1
//             renderChunks(part)

//             active.classList.remove('active')

//             pagination.querySelector(`.pag-item[data-part='${part}']`).classlist.add('active')
//         }else{
//             active.classList.remove('active')
//             item.classList.add('active')
//             part = +item.dataset.part
//             renderChunks(part)
//         }

//         let prev = pagination.querySelector('.pag-item.item-prev')
//         let next = pagination.querySelector('.pag-item.item-next')

//         if(prev.classList.contains('disable')){
//             prev.classList.remove('disable')
//         }
//         if(next.classList.contains('disable')){
//             next.classList.remove('disable')
//         }
//         if(part === 0){
//             prev.classList.add('disable')
//         }
//         if(part === chunks.length - 1){
//             next.classList.add('disable')
//         }
//     }
// })

// function splitParts(arr){
//     if(arr.length > lengthPath){
//         let chunks = []

//         for(let i = 0; i < arr.length; i += lengthPath){
//             chunks.push(arr.slice(i, i + lengthPath))
//         }
//         return chunks
//     }else{
//         return arr
//     }
// }

// function renderChunks(part){
//     if(part >= 0 && part <= chunks.length){
//         product.innerHTML = ''
//         chunks[part].map(elem => product.append(elem))
//     }else{
//         return false
//     }
// }

// function renderPagination(){

//     if(chunks.length > 1){
//         chunks.map((elem, i) => pagination.insertAdjacentHTML('beforeend', `<li class='pag-item${i === 0 ? ' active' : ''}' data-part='${i}'><a href='#'>${i +1}</a></li>`))

//         pagination.insertAdjacentHTML('afterbegin', `<li class='pag-item item-pev disable'><a href='#'>prev</a></li>`)

//         pagination.insertAdjacentHTML('beforeend', `<li class='pag-item item-next'><a href='#'>next</a></li>`)
//     }
// }

// filter.addEventListener('click', e => {
//     let btn = e.target.closest('.btn')
//     pagination.innerHTML = ''
//     if(btn){
//         if(btn.dataset.filter !== 'all'){
//             chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)))
//         }else{
//             chunks = splitParts(data)
//         }
//     }
//     renderChunks(0)
//     renderPagination()
// })



// let form = document.querySelector('form')
// console.log(form.length);
// console.log(form.elements);
// console.log(form.name);
// console.log(form.method);
// console.log(form.action);

// document.form1.style.background = 'gray'

// document.forms[0].style.margin = '20px'
// document.forms['form1'].style.padding = '16px'
// document.forms.form1.style.border = '4px dotted silver'

// let key = form.elements[0]
// console.log(key);

// let key2 = form.elements['name1']
// console.log(key2);

// document.form1.name1.style.color = 'blue'
// document.form1['name1'].style.background = 'aqua'

// let txt = document.querySelector('#text1')
// let but = document.querySelector('button')

// but.addEventListener('click', content)

// function content(){
//     document.writeln(txt.value)
// }



// let text = document.querySelector('input')
// let output = document.querySelector('#length')

// text.addEventListener('input', function(){
//     output.textContent = text.value.length + ' / 20'
// })



// let form = document.querySelector('form')
// form.addEventListener('submit', function(e){
//     console.log('Save data:' + form.elements.value)
//     e.preventDefault()
// })



// let reg = document.querySelector('.reg')
// let h2 = document.querySelector('h2')
// let win = document.createElement('p')
// h2.after(win)

// reg.addEventListener('submit', function(e){
//     e.preventDefault()

//     let login = reg.login.value
//     let password = reg.psw.value
//     let password2 = reg.psw2.value
//     let errors = ''

//     if(login == '' || password == '' || password2 == ''){
//         win.className = 'red'
//         win.innerHTML = 'fill all strings'
//         return
//     }

//     if(password != password2){
//         errors += 'password is<br> not match!'
//     }

//     if(password.length < 6){
//         errors += 'Password is short!'
//     }

//     if(errors == ''){
//         win.className = 'green'
//         win.innerHTML = 'Register has been done.'
//     }else{
//         win.className = 'red'
//         win.innerHTML = errors
//     }

//     reg.login.value = '';
//     reg.psw.value = '';
//     reg.psw2.value = '';

// })



// let input = document.querySelector('#input')
// let list = document.querySelector('#list')

// input.addEventListener('keypress', function(e){
//     if(e.key == 'Enter'){
//         let li = document.createElement('li')
//         let task = document.createElement('span')
//         task.classList.add('task')
//         task.textContent = input.value
//         task.addEventListener('dblclick', function(){
//             let text =  this.textContent
//             this.textContent = ''

//             let edit = document.createElement('input')
//             edit.value = text
//             this.append(edit)

//             let self = this
//             edit.addEventListener('keypress', function(e){
//                 if(e.key == 'Enter'){
//                     self.textContent = edit.value
//                 }
//             })
//         })

//         li.append(task)

//         let remove = document.createElement('span')
//         remove.textContent = 'delete'
//         remove.classList.add('remove')
//         remove.addEventListener('click', function(){
//             // li.remove()
//             remove.parentNode.remove()

//         })
//         li.append(remove)

//         let mark = document.createElement('span')
//         mark.textContent = 'OK'
//         mark.classList.add('mark')
//         mark.addEventListener('click', function(){
//             mark.parentNode.classList.add('done') //toggle
//             mark.addEventListener('click', function(){
//                 mark.parentNode.classList.remove('done')
//             })
//         })
//         li.append(mark)

//         list.append(li)
//         input.value = ''

//     }
// })



// let checkbox = document.querySelector('#purple')
// checkbox.addEventListener('change', function(){
//     document.body.style.background = checkbox.checked ? 'mediumpurple' : ''
// })



// let btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     let checkboxes = document.querySelectorAll('input[name="lang"]:checked')
//     let selected = Array.from(checkboxes).map(checkbox => checkbox.value)

//     alert('Selected lang: ' + selected.join(', '))
//     console.log(selected.join(', '));
    
// })



// let input = document.querySelectorAll('input')
// let form = document.forms.form1

// for(let i = 0; i < form1.length; i++){
//     input[i].addEventListener('click', checkAll)
// }

// let numChecked
// function checkAll(){
//     numChecked = 0
//     for(let i = 0; i < form1.length; i++){
//         if(input[i].checked && input[i].type == 'checkbox'){
//             numChecked++
//         }
//     }

//     if(numChecked == 3){
//         for(let i = 0; i < form1.length; i++){
//             if(!input[i].checked && input[i].type == 'checkbox'){
//                 input[i].disabled = true
//             }
//         }
//     }else{
//         for(let i = 0; i < form1.length; i++){
//             input[i].disabled = false
//         }
//     }
// }


// let input = document.querySelectorAll('input[type="checkbox"]')
// let form = document.forms.form1

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', checkAll)
// }

// let numChecked
// function checkAll(){
//     numChecked = 0
//     for(let i = 0; i < input.length; i++){
//         if(input[i].checked){
//             numChecked++
//         }
//     }

//     if(numChecked == 3){
//         for(let i = 0; i < input.length; i++){
//             if(!input[i].checked){
//                 input[i].disabled = true
//             }
//         }
//     }else{
//         for(let i = 0; i < input.length; i++){
//             input[i].disabled = false
//         }
//     }
// }



// let choose = document.querySelector('input[type="button"]')

// choose.addEventListener('click', chooseColor)

// // function chooseColor(){
// //     let f = document.form3

// //     for(let i = 0; i < f.radio2.length; i++){
// //         if(f.radio2[i].checked){
// //         document.body.style.background  = f.radio2[i].value            
// //         }
// //     }
// // }

// function chooseColor(){
//     let f = document.form3
//     document.body.style.background = f.radio2.value            
// }



// let f = document.form3
//     for(let i = 0; i < f.radio2.length; i++){
//         f.radio2[i].addEventListener('change', chooseColor)
//     }

//     function chooseColor(e){
//         document.body.style.background  = e.target.value    
//     }



// let langs = document.querySelector('#langs')
// let langsOpt = ['Python', 'JS', 'C++', 'Java']

// langs.innerHTML = langsOpt.map(lang => `
//     <div>
//         <input type='radio' name='lang' value='${lang}' id='${lang}'>
//         <label for="${lang}">${lang}</label>
//     </div>
//     `).join('   ')

// let radioBtns = document.querySelectorAll('input[name="lang"]')
// for(let radioBtn of radioBtns){
//     radioBtn.addEventListener('change', showSelecterLang)
// }

// function showSelecterLang(){
//     if(this.checked){
//         document.querySelector('#langOutput').textContent = `You choice: ${this.value}`
//     }
// }



// let city = document.querySelector('#city')

// city.addEventListener('change', setImg)

/* Свойства select
select.option - коллекция из элементов <option>
select.value - знач. выбранного в данный момент <option>
select.selectedIndex - номер(индекс) выбранного <option>
*/
// function setImg(){
//     let cities = city.selectedIndex
//     let options = city.options
//     let code = options[cities].value
//     let div = document.querySelector('#img')
//     div.innerHTML = '<img src="./JS_7/img/'+code+'.png">'
// }



// let select = document.querySelector('select')
// let output = document.querySelector('#output')

// select.addEventListener('change', function(){
//     let num = 0
//     for(let i=0; i<select.options.length;i++){
//         let option = select.options[i]
//         if(option.selected){
//             num += Number(option.value)
//         }
//     }

//     output.textContent = num
// })



// let countries = document.querySelector('#countries')

// let ruCities = document.querySelector('#ru')
// let ukCities = document.querySelector('#uk')

// countries.addEventListener('change',  function(){
//     document.querySelector('.cities.active').classList.remove('active')

//     if(this.value == 'ru'){
//         ruCities.classList.add('active')
//     }
//     if(this.value == 'uk'){
//         ukCities.classList.add('active')
//     }
// })



// let opt = new Option('Text','value', true)
// console.log(opt);



// let btnAdd = document.querySelector('#btnAdd')
// let btnRemove = document.querySelector('#btnRemove')
// let taskInput = document.querySelector('#task')
// let taskList = document.querySelector('#taskList')

// btnAdd.addEventListener('click', e => {
//     e.preventDefault()

//     if(taskInput.value.trim() === ''){
//         alert('Enter task name')
//         return
//     }

//     let opt = new Option(taskInput.value, taskInput.value)
//     taskList.add(opt, undefined)
//     taskInput.value = ''
//     taskInput.focus()
// })

// btnRemove.addEventListener('click', e => {
//     e.preventDefault()

//     let selectedTasks = []

//     for(let i=0;i<taskList.options.length;i++){
//         selectedTasks[i] = taskList.options[i].selected
//     }
//     let index = taskList.options.length
//     while(index--){
//         if(selectedTasks[index]){
//             taskList.remove(index)
//         }
//     }
// })



// let input = document.querySelector('input')
// input.addEventListener('change', function(){
//     if(input.files.length > 0){
//         let file = input.files[0]
//         console.log('you select:', file.name);
//         if(file.type){
//             console.log('file type:', file.type);
            
//         }
        
//     }
// })



// let gas = document.querySelector('.gallon')
// let patrol = document.querySelectorAll('.patrol')
// let res 

// for(let i=0; i<patrol.length;i++){
//     patrol[i].addEventListener('click', function(){
//         let gallons = gas.value
//         let amount = this.getAttribute('data-pet')

//         res = gallons * amount
//         let sum = document.querySelector('.sum')
//         sum.innerHTML = res
        
//     })
// }



// document.getElementById('slider').addEventListener('input', function(){
//     document.getElementById('slider-value').textContent = this.value
// })



// let tds = document.querySelectorAll('td')
// for(let i=0;i<tds.length;i++){
//     tds[i].addEventListener('click', function func(){
//         let input = document.createElement('input')
//         input.value = this.innerHTML
//         this.innerHTML = ''
//         this.append(input)

//         let td = this
//         input.addEventListener('blur', function(){
//             td.innerHTML = this.value
//             td.addEventListener('click', func)
//         })

//         this.removeEventListener('click', func)
//     })
// }



// let userInput = document.getElementById('userInput')
// let name = document.getElementById('displayName')

// userInput.addEventListener('input', function(){
//     name.textContent = this.value || 'Xi'
// })



// let form = document.getElementById('myForm')

// form.addEventListener('submit', function(e){
//     // if(!form.checkValidity()){
//     // e.preventDefault()     
//     // alert('enter all fields')   
//     // }


//     // let username = form.username.value
//     // let password = form.password.value

//     // let formData = new FormData(form)
//     // console.log(formData.get('username'));
//     // console.log(formData.get('password'));
//     // console.log(formData);
//     let username = form.username.value
//     let password = form.password.value

//     if(username.length < 3){
//         e.preventDefault()
//         alert('Username is short!')
//     }
    
//     if(password.length < 6){
//         e.preventDefault()
//         alert('Pass is short!')
//     }

//     console.log(typeof username);
//     console.log(typeof password);
    

// })



/*Methonds:

search - возвращает позицию, на которой регулярное выр-е совпадает с вызывающей строкой, или "-1", если совпадений нет

match - получит все совпадения с регулярными выр-ми

replace - поиск и замена

split - делит строку на массив, разбивая её по указанной подстроке

test - выполняет поиск совпадений регулярного выр-я со строкой. Возвращает буллево знач. либо 'true' либо 'false'

*/

// let str = 'I found matches in ^ 2025 year 78382584 Hello_world ё'
// document.write(str+ '<br><br>')

// let regexp = /[^0-9]/g
// document.writeln(str.match(regexp) + '<br>')



// \s (space) - 
// \d (digit) - 
// \w (word) - 
// \b - граница слова
// u (unicode) - поддержка юникода
// m (multiline) - многострочный текст
// s (dotall) - включает \n
// \D - всё кроме цифр
// \S - не пробел
// \W - всё короме цифр, букв(латиница) и сомволов почеркивания

// let st = 'это пример строки с несколькими пробелами'
// let reg = 'здесь шаблон'

// let res = ''
// console.log(res); // 'это_пример строки_с_несколькими_пробелами' <= вывести переменную st текст с пробелами



// let string = 'My phone number: +7 (999) 123-45-67 . Phone number my friend: +7(987) 654-32-10'
// let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-d{2}/g
// let phoneNums = string.match(ex)



// let regexp = /\d{2}[-:]\d{2}/g
// document.write('завтрак в 09:00. ужин в 21-30'.match(regexp))

// let regexp = /\W/g
// document.write(str.match(regexp) + '<br>')

// document.write('Hello, Java!'.match(/\bJava\b/) + '<br>')
// document.write('Hello, Java!'.match(/\bJava!/) + '<br>')
// document.write('Hello, JavaScript!'.match(/\JavaScript\b/) + '<br>')

// document.write('1,23,456,78'.match(/\b\d{2}\b/g) + '<br>')
// document.write('12-,34,56'.match(/\b\d{2}\b/g) + '<br>')
// document.write('1 23 456 78'.match(/\d{2}/g) + '<br>')

// document.write('завтрак в 09:00 в комнате 123:456.'.match(/\b\d{2}:\d{2}\b/g))

// let regexp = /[\p{Alpha}\p{Nd}]/gu
// let regexp = /[\p{L}\p{N}]/gu
// document.write(str.match(regexp) + '<br>')

/*
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательностью ничего не должно быть)
*/

// let html = '909'
// let exp = /^\d{3}$/
// document.writeln(html.match(exp) + '<br>')



// function capitalize(st){
//     return st.replace(/^[а-я]/, u => u.toUpperCase())
// }

// console.log(capitalize('несколько слов'));

/* Кол-во повторений
+ => от 1 повторения до бесконечности {1,}
? => от 0 до 1 {0,1}
* => от 0 до бесконечности {0,}
*/

// let st = '+7(999)456-32-98'
// document.writeln(st.match(/\d*/g) + '<br>')
// document.writeln('100 10 1'.match(/\d0*/g) + '<br>')
// document.writeln('10, +23, -8, 5'.match(/[+-]?\d+/g) + '<br>')
// document.writeln('0 1 12.345 7890'.match(/\d+\.\d+/g) + '<br>')

// document.writeln('..Hello!... How are?.....'.match(/\.{3,}/g))

// function extractLinks(text){
//     let regexp = /https?:\/\/[\w.]+/g
//     return text.match(regexp) || []
// }

// console.log(extractLinks('<a href="https://vk.com"> and <a href="https://mail.ru">'));

// function validEmail(email){
//     let regexp = /^[a-z0-9_%+-.]+@[a-z0-9.-]+\.[a-z]{2,}$/i
//     // let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i
//     return regexp.test(email)
// }
// console.log(validEmail('user@site.com'));

// let st = ` JavaScript
// javascript
// JAVASCRIPT`
// let mas = st.match(/^\w+/gm)
// console.log(mas);
// mas.map((el) => console.log(el))

// let re = /CS.3/
// document.write('Standart CSS3'.match(re) + '<br>')
// document.write('Steel CS-3'.match(re) + '<br>')
// document.write('CS 3'.match(re) + '<br>')

// let st = 'hello\nworld'
// console.log(st);
// let exp = /hello.world/
// console.log(exp.test(st));

// let regexp = /html|css|java(script)?/gi
// let str1 = 'First time Java, before HTML, and now JavaScript'
// document.writeln(str1.match(regexp))

// let html = `
//     <b>text</b>
//     <img src="22.jpg">
//     <span>else</else>
//     <img src="ab22.jpg">
//     <img src="img.png">
//     <img src="df.gif">
// `

// let ex = /\w+\.(jpg|jpeg|png|bmp|gif)/ig
// document.writeln(html.match(ex))

// function validNumber(phoneNums){
//     let phoneRegex = /^(\+7|8)?\d{10}$/
//     return phoneRegex.test(phoneNums)
// }

// let phone = '+798654321'
// // let phone = '898654321'
// // let phone = '98654321'
// if(validNumber(phone)){
//     console.log('Number has valide!');
// }else{
//     console.log('Number has not valide!');
// }



// document.writeln('aaa'.replace('a', 'b') + '<br>')
// document.writeln('aaa'.replace(/a/g, 'b') + '<br>')

// let text = 'i kill you black dog'
// document.write(text + '<br>')
// let exp = /book|kill|black/ig
// text = text.replace(exp, '***')
// document.write('<p>' + text + '</p>')



// let st = '131243145654'
// let reg = /\d{2,4}?/g
// console.log(st.match(reg));

/*
*?, +?, ??
{2,4}?, {2,}?
*/ 

// let st = '<p>Hello world</p>'
// // let reg = /<.+?>/g
// let reg = /<[^>]+>/g
// console.log(st.match(reg));



// let st = '... <!-- My -- comment text --> .. <!----> ..'
// // let reg = /<[^>]+>/g
// let reg = /<!--.*-->/g
// alert(st.match(reg)); //<!-- My -- comment text -->, <!---->



// let st = '<> <a href="#"> <input type="radio" checked> <b>'
// let reg = /<[^>]+>/g
// alert(st.match(reg)); //<a href="#"> , <input type="radio" checked>, <b>



// let html = 'John Smith'
// let exp = /(John) Smith/
// document.write(html.match(exp) + '<br>')



// let html = 'site.com and my.site.com'
// let exp = /(\w+\.)+\w+/g
// document.write(html.match(exp) + '<br>')



// let st = '<h1>Hello, world</h1>'
// let tag = st.match(/<(.*?)>/)
// alert(tag[0])
// alert(tag[1])



// let date = '2026-05-30'
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/
// let match = date.match(reg)
// let format = match[3]+ '.' + match[2] + '.' + match[1]
// console.log(format);



// let st = '<span class="my">'
// let exp = /<(([a-z]+)\s*([^>]*))>/ 
// let res = st.match(exp)
// alert(res[3])



// let date = '2026-05-30 2026-10-15'
// let reg = /(?<year>[0-9]{4})-(?<month>\d{2})-(?<day>\d{2})/g
// // let match = date.match(reg)
// // let format = match[3]+ '.' + match[2] + '.' + match[1]
// // console.log(format);
// // console.log(match.day+ '.' + match.month + '.' + match.year);
// let res = date.matchAll(reg)
// for(let result of res){
//     let {year, month, day} = result.groups

//     document.write(`${day}.${month}.${year}`)
// }



// let st = 'John Smith'
// let re = /(\w+)\s(\w+)/
// document.write(st.replace(re, '$2 $1'))



// function add(str){
//     return str.replace(/([A-Z])/g, ' $1')
// }
// console.log(add('camelCase'));
// console.log(add('helloWorldItIsMe'));



// let text = 'red color: #f00 and green: #090'
// let ex = /(#[a-f0-9]{3})/ig
// text = text.replace(ex, '<span style="color:$1">$1</span>')
// document.write('<p>'+text+'</p>')



// let text = 'I like google.com and yandex.ru'
// let ex = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig
// text = text.replace(ex, '<a href="https://$1">$1</a>')
// document.write('<p>'+text+'</p>')



// 7 (xxx) xxx-xx-xx or 8 (xxx) xxx-xx-xx

// function formatPhoneNumb(phone){
//     let cleaned = phone.replace(/\D/g, '')
//     return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')
// }

// console.log(formatPhoneNumb('+7 999 1234567'));
// console.log(formatPhoneNumb('8 999 1234567'));
// console.log(formatPhoneNumb('999 1234567'));
// console.log(formatPhoneNumb('79991234567'));
// console.log(formatPhoneNumb('7(999)123 45 67'));



// document.write('Love HTML'.replace(/HTML/, '$& and Javascript'))



// let st = `Он сказал: "I'm at home".`
// // let re = /(["'])(.*?)\1/g
// let re = /(?<quote>["'])(.*?)\k<quote>/g
// document.write(st.match(re) + '<br>')



// позитивная опережающая проверка X(?=Y) = Х если за ним следует Y
// let st = '1 course costs 30 rub'
// document.write(st.match(/\d+(?= rub)/g) + '<br>')

// негативная опережающая проверка X(?!Y), Х если за ним не следует Y
// document.write(st.match(/\d+(?! rub)/g) + '<br>')

// позитивная ретроспективная (?<=Y)X, X если следует за Y
// let st = '1 course costs $30'
// document.write(st.match(/(?<=\$)\d+/) + '<br>')

// негативная ретроспективная X(?<!Y) = Х если не следует за Y
// let st = '1 course costs $30'
// document.write(st.match(/(?<=\$)\d+/g) + '<br>')
// document.write(st.match(/(?<!\$)\d+/g) + '<br>')



// document.write('Hello, Error'.match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/))

// // (?=.*...)

// function validPassword(pw){
//     let pwEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
//     return pwEx.test(pw)
// }

// console.log(validPassword('QWererty23!#'));
// console.log(validPassword('$qwERqq5qq'));



// let but = document.querySelector('#but')
// but.addEventListener('click', smsUser)

// function smsUser(){
//     let name = document.querySelector('#your_name').value
//     let text = document.querySelector('#text').value
//     let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig
//         text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5")
    
//         document.writeln(`
//             <fieldset>
//                 <legend>${name}</legend>
//                 <div>${text}</div>
//             </fieldset>    
//         `)

//     // let form = document.querySelector('form')
//     // form.insertAdjacentHTML('afterend', `
//     //     <fieldset>
//     //         <legend><b>${name}</b></legend>
//     //         <div>${text}</div>
//     //     </fieldset>
//     //     `)
// }



// let str = "some text sasha@gmail.com mail";
// let regExpBBMail = /([0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
// str = str.replace(regExpBBMail, "<span style='color:red'>$1</span>");



// let st = '  text string first    '
// st = st.replace(/^\s+|\s+$/g, '')
// console.log('>' + st + '<');



// let date = '25-10-2012, 13/09/2003, 12.12.2012, 01:02:2002'
// let re = date.split(/[-\/,.:]/)
// console.log(re);



console.log('add changes');
























