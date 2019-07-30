/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let Train = {
	name: "Треск",
	speed: 90,
	passengers: 300,
	go() {
		return `Поезд ${this.name} везет ${this.passengers} пассажиров со скоростью ${this.speed} км/ч`
	},
	stop() {
		this.speed = 0;
		return `Поезд ${this.name} остановился. Скорость ${this.speed} км/ч`
	},
	pickPassengers(passengers) {
		this.passengers += passengers;
		return `Поезд ${this.name} подобрал ${passengers} пассажиров`
	}
}