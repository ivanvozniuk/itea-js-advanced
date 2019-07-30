/*

  Модули в JS
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

  Так как для экспорта и импорта нету родной поддержки в
  браузерах, то нам понадобится сборщик который это умеет делать

  Выбор пал на вебпак

  npm i
  npm run cli

  Затестим - в консоли наберем команду webpack
*/

// console.log('WEBPACK WORKING45567!')

import imports from './imports';


// Для экспорта и импорта обязательно нужно имя
import Classes from './classes/';
console.log( 'Classes', Classes )

// let { test1 } = Classes;
// console.log('index module1', str);

// let { prop1, prop2 } = x;
// console.log( prop1, prop2 );

// import SMSNG from './modules/1';

// import { str, st2 } from './modules/1'; // 15 kb
// console.log( str, st2 );
// //
// import someObj from './modules/2';
// console.log(someObj);
// // // // //
// import { mArray, mObj, User } from './modules/3';
// console.log( mArray, mObj, User);
// //
// const Butch = new User('Butch');
// console.log(Butch);
//
// import $ from 'jquery';
// $('html').html('<h1>Hello!</h1>');
