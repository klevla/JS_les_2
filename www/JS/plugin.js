
// Присваивание. задачи
// 1 Сокращенная запись
// let a = '';
// let b = '';
// let c = '';
// a += 10;
// b *= 18;
// c -= 10;
//
// console.log(a, b, c);

// let x = '';
// let y = '';
// let i = '';
// x += a;
// // y *= z;
// i *= 5 * y;
//
// console.log(x, y, i);

//2 Возведение переменной в квадрат

let k = '';
k **= 2;

console.log(k);

// Условные операторы
// 1

let userInfo;

if (userInfo === 'hidden') {
    userInfo = 'visible';
}else {
    userInfo = 'hidden';
}

// userInfo === 'hidden' ? 'visible' : 'hidden';

// 2

let n;

if (n === 0) {
    console.log(n = 1);
} else if (n < 0) {
    console.log( 'less then zero' );
} else if (n > 0) {
    console.log(n *=10);
}

let p = 0;

p === 0 ? console.log(p = 1) : p < 0 ? console.log('less then zero') : console.log(p *= 10);

//Switch case. Задачи

let a = '';

switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}

//Преобразование типов
//1
// let a = 0 || 'string';
// // 'string' -> true
// let a = 1 && 'string';
// // 'string' -> the last true
// let a = null || 25;
// // 25 -> true
// let a = null && 25;
// //null -> false
// let a = null || 0 || 35;
// //35 -> true
// let a = null && 0 && 35;
//null -> the first false

//2
let r;

r = 12 + 14 + '12';
// -> '2612' -операции выполняются слева-направо, число сложаться как числа. а затем при сложении оо строкой их сумма преобразуется в строку и произойдет конкатенация
r = 3 + 2 - '1';
// -> 4 -строка преобразуется в число
r = '3' + 2 - 1;
// -> 31 -получившаяся строка "32" преобразовалась в число 32 из которого вычлась 1
r = true + 2;
// -> 3 , true преобразовалось в 1
r = +'10' + 1;
//11 - плюс перед строкой преобразовал ее в число
r = undefined + 2;
//NaN -undefined преобразовался в NaN
r = null + 5;
//5 - null преобразовался в 0
r = true + undefined;
// NaN
console.log(r);