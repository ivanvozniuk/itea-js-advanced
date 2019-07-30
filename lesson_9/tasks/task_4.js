/*

  Задание:
    Написать конструктор обьекта. Отдельные функции разбить на модули
    и использовать внутри самого конструктора.
    Каждую функцию выделить в отдельный модуль и собрать.

    Тематика - птицы.
    Птицы могут:
      - Нестись
      - Летать
      - Плавать
      - Кушать
      - Охотиться
      - Петь
      - Переносить почту
      - Бегать

  Составить птиц (пару на выбор, не обязательно всех):
      Страус
      Голубь
      Курица
      Пингвин
      Чайка
      Ястреб
      Сова

 */

class Bird {
	constructor(birdType, ...funcs) {
		this.birdType = birdType;
		funcs.forEach(func => this[func.name] = func);
	}
}


const Chicken = new Bird("Chicken", run, carryEggs, eat);

console.log(Chicken.eat(), "|", Chicken.run(), "|", Chicken.eat());

const Owl = new Bird("Owl", hunt, deliverMail, rotateHead, eat);

console.log(Owl.hunt(), "|", Owl.deliverMail(), "|", Owl.rotateHead(), "|", Owl.eat());



function run() {
	return `${this.birdType} can run`
}
function carryEggs() {
	return `${this.birdType} can carry egs`
}
function eat() {
	return `${this.birdType} can eat`
}
function hunt() {
	return `${this.birdType} can hunt`
}
function deliverMail() {
	return `${this.birdType} can deliver mail`
}
function rotateHead () {
	return `${this.birdType} can rotate its head 360 degrees`
}