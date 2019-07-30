/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/


let isLogined = !!localStorage.getItem("username");

const form = document.createElement("form");
			form.style = `border: 2px solid black; width: 500px; position: absolute; left: 50%; top: 50%;
			transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; padding: 25px;
			box-shadow: 0 0 20px #ccc`;
			form.addEventListener("submit", e => {
				e.preventDefault();

				const login = "admin";
				const password = "12345678";

				if (loginInput.value === login && passwordInput.value === password) {

					const confirmSpan = document.createElement("span");
								confirmSpan.style = "margin-top: 10px; font-size: 22px; color: green;";
								confirmSpan.textContent = "Confirm!"
					form.appendChild(confirmSpan);

					localStorage.setItem("username", loginInput.value);

					loginedTitle.textContent = localStorage.getItem("username");
					document.querySelector(".rejectSpan") && document.querySelector(".rejectSpan").remove();
					setTimeout(() => {
						confirmSpan.remove();
						renderPage();
					}, 700);

				}
				else {
					if (!form.contains(document.querySelector(".rejectSpan"))) {
						const rejectSpan = document.createElement("span");
									rejectSpan.classList.add("rejectSpan")
									rejectSpan.style = "margin-top: 10px; font-size: 22px; color: red;"
									rejectSpan.textContent = "Access denied!";
						form.appendChild(rejectSpan);
					}
				}

			})

const passwordInput = document.createElement("input");
			passwordInput.type = "password";
			passwordInput.placeholder = "Your password";

const loginInput = document.createElement("input");
			loginInput.placeholder = "Your login";

const submit = document.createElement("input");
			submit.type = "submit";
			submit.value = "Submit!";

[loginInput, passwordInput, submit].forEach(input => {
	input.style=`padding: 10px; border-radius: 10px; border: 1px solid black; margin: 10px 0;`
	form.appendChild(input);
});

const loginedPage = document.createElement("div");
			loginedPage.style = `display: flex; flex-direction: column; justify-content: center;
			align-items: center; height: 100vh`;

const loginedTitle = document.createElement("h1");
			loginedTitle.textContent = localStorage.getItem("username");

const loginedExit = document.createElement("a");
			loginedExit.textContent = "Exit";
			loginedExit.href = "#" // to get link default styles
			loginedExit.style = "margin-top: 25px; font-size: 30px;"
			loginedExit.addEventListener("click", e => {
				e.preventDefault();
				localStorage.removeItem("username");
				renderPage();
			});

loginedPage.appendChild(loginedTitle);
loginedPage.appendChild(loginedExit);

const renderPage = () => {
	document.body.contains(loginedPage) && loginedPage.remove();
	document.body.contains(form) && form.remove();
	isLogined = !!localStorage.getItem("username");
	isLogined ? document.body.appendChild(loginedPage) : document.body.appendChild(form);
}

renderPage();