/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

		Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.
*/

const fetchAndPrintData = async () => {
	const res = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
	const data = await res.json();
	let counter = 0;
	const layout = `
		<table>
			<tr>
				<th>#</th>
				<th>Company</th>
				<th>Balance</th>
				<th>Show registration date</th> 
				<th>Show adress</th>
			</tr>
			${data.map(({ company, address, registered, balance}) => {
				const layout = `
				<tr>
					<td>${counter++}</td>
					<td>${company}</td>
					<td>
						<button class="button_show">Show balance</button>
						<span style="display: none;">${balance}</span>
					</td>
					<td>
						<button class="button_show">Show register date</button>
						<span style="display: none;">${registered}</span>
					</td>
					<td>${address.country}, ${address.city}</td>
				</tr>
				`
				return layout;
			}).join(" ")}
		</table>
	`
	document.body.innerHTML += layout;

	const buttonsShow = document.querySelectorAll(".button_show");
	buttonsShow.forEach(btn => btn.addEventListener("click", () => {
		btn.style.display = "none";
		btn.nextElementSibling.style.display = "inline-block";
	}));
}
fetchAndPrintData();
