
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
	</form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/

const renderToJsonForm = async () => {
	const layout = `
		<form class="form_to-json">
			<legend>Convert to json!</legend>
			<input name="name" placeholder="Name" />
			<input name="age" placeholder="Age" />
			<input name="password" placeholder="Password" type="password" />
			<button>Convert</button>
		</form>
	`
	document.body.innerHTML += layout;
}
const renderFromJsonForm = () => {
	const layout = `
		<form class="form_from-json">
			<legend>Convert from json!</legend>
			<input name="json" placeholder="Json string" />
			<button>Convert</button>
		</form>
	`
	document.body.innerHTML += layout;
}

const toJsonFormHandler = e => {
	e.preventDefault();
	const formData = {
		name: document.querySelector(".form_to-json input[name='name']").value,
		age: document.querySelector(".form_to-json input[name='age']").value,
		password: document.querySelector(".form_to-json input[name='password']").value
	}
	const formDataJson = JSON.stringify(formData);
	console.log(formDataJson)
}

const fromJsonFormHandler = e => {
	e.preventDefault();
	const jsonString = document.querySelector(".form_from-json input[name='json']").value;
	const parsedObject = JSON.parse(jsonString);
	console.log(parsedObject)
}

renderToJsonForm()
renderFromJsonForm()

document.querySelector(".form_to-json").addEventListener("submit", toJsonFormHandler);
document.querySelector(".form_from-json").addEventListener("submit", fromJsonFormHandler)