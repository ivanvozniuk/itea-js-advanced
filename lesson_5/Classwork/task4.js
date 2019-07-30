/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
			String.fromCharCode(189, 43, 190, 61) // ½+¾
*/


// const RUSSIAN_MIN_LETTER_CHAR_CODE = 1072;
// const RUSSIAN_MAX_LETTER_CHAR_CODE = 1103;

// function encryptCesar(step, word) {
// 	let letters = word.split("");
// 	let encryptedLetters = letters.map(letter => {
// 		if (letter === " " || letter === "," || letter==="!" || letter==="?") return letter;
// 		if (letter.toLowerCase().charCodeAt() + step > RUSSIAN_MAX_LETTER_CHAR_CODE) {
// 			const difference = RUSSIAN_MAX_LETTER_CHAR_CODE + step - 1 - letter.toLowerCase().charCodeAt();
// 			return String.fromCharCode(RUSSIAN_MIN_LETTER_CHAR_CODE + difference);
// 		}
// 		return String.fromCharCode(letter.toLowerCase().charCodeAt() + step);
// 	})
// 	return encryptedLetters.join("");
// }

// function decryptCesar(step, word) {
// 	let letters = word.split("");
// 	let decryptedLetters = letters.map(letter => {
// 		if (letter === " " || letter === ",") return letter;
// 		if (letter.toLowerCase().charCodeAt() - step < RUSSIAN_MIN_LETTER_CHAR_CODE) {
// 			let difference = RUSSIAN_MIN_LETTER_CHAR_CODE + step - 1 - letter.toLowerCase().charCodeAt();
// 			return String.fromCharCode(RUSSIAN_MAX_LETTER_CHAR_CODE - difference);
// 		}
// 		return String.fromCharCode(letter.toLowerCase().charCodeAt() - step);
// 	});
// 	return decryptedLetters.join("");
// }

// console.log(encryptCesar(9, "Владивосток"));
// console.log(decryptCesar(9, encryptCesar(9, "Владивосток")));

// --------------------------- выше калечный вариант ---------------------------

const upperCaseAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"; 
const lowerCaseAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const skipSymbols = [" ", "?", "!", ",", ":", ";", ".", "(", ")", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function decryptCesar(step, word) {
	const letters = word.split("");
	const decryptedLettersArray = letters.map(letter => {
		if (skipSymbols.includes(letter)) return letter;

		if (upperCaseAlphabet.indexOf(letter) !== -1) {
			let upperCaseLetterIndex = upperCaseAlphabet.indexOf(letter);
			let difference = upperCaseLetterIndex - step;
			if (difference < 0) {
				return upperCaseAlphabet[upperCaseAlphabet.length + difference]
			}
			return upperCaseAlphabet[upperCaseLetterIndex - step]
		}

		else if (lowerCaseAlphabet.indexOf(letter) !== -1) {
			let lowerCaseLetterIndex = lowerCaseAlphabet.indexOf(letter);
			let difference = lowerCaseLetterIndex - step;
			if (difference < 0) {
				return lowerCaseAlphabet[lowerCaseAlphabet.length + difference]
			}
			return lowerCaseAlphabet[lowerCaseLetterIndex - step]
		}
	})

	return decryptedLettersArray.join("");
}

function encryptCesar(step, word) {
	const letters = word.split("");
	const encryptedLettersArray = letters.map(letter => {
		if (skipSymbols.includes(letter)) return letter;

		if (upperCaseAlphabet.indexOf(letter) !== -1) {
			let upperCaseLetterIndex = upperCaseAlphabet.indexOf(letter);
			let difference = upperCaseAlphabet.length - (upperCaseLetterIndex + step);
			if (difference <= 0) {
				return upperCaseAlphabet[0 - difference]
			}
			return upperCaseAlphabet[upperCaseLetterIndex + step]
		}

		else if (lowerCaseAlphabet.indexOf(letter) !== -1) {
			let lowerCaseLetterIndex = lowerCaseAlphabet.indexOf(letter);
			let difference = lowerCaseAlphabet.length - (lowerCaseLetterIndex + step);
			if (difference <= 0) {
				return lowerCaseAlphabet[0 - difference]
			}
			return lowerCaseAlphabet[lowerCaseLetterIndex + step]
		}
	})

	return encryptedLettersArray.join("");
}

console.log(encryptCesar(4, "Эй, что вы имеете ввиду?!"))
console.log(decryptCesar(4, encryptCesar(4, "Эй, что вы имеете ввиду?!")))
