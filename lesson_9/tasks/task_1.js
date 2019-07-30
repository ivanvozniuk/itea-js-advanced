/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

document.body.style.background = localStorage.getItem("randomColor") || "#fff";

const button = document.createElement("button");
			button.textContent = "Generete random color!";
			button.style = "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)";
			button.addEventListener("click", () => {
				const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
				document.body.style.background = randomColor;
				localStorage.setItem("randomColor", randomColor)
			})
document.body.appendChild(button);