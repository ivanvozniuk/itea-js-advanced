import { login, password } from "../store/data";
import renderAdminPage from "./renderAdminPage";

const validateAdminAuth = (e, form, formWrapper) => {
	e.preventDefault();


	const loginInput = form.elements.login;
	const passwordInput = form.elements.password;

	[loginInput, passwordInput].forEach(input => {
		if (input.classList.contains("is-valid")) {
			input.classList.remove("is-valid")
		}
		else if (input.classList.contains("is-invalid")) {
			input.classList.remove("is-invalid")
		}
	});

	const isValidLogin = loginInput.value === login;
	const isValidPassword = passwordInput.value === password;

	isValidLogin ? loginInput.classList.add("is-valid") : loginInput.classList.add("is-invalid");
	isValidPassword ? passwordInput.classList.add("is-valid") : passwordInput.classList.add("is-invalid");

	if (isValidLogin && isValidPassword) {
		localStorage.setItem("logined", "true");
		

		setTimeout(() => {
			renderAdminPage(false)
			const formWrapper = document.querySelector(".form-wrapper");
			formWrapper.classList.add("translateUpper");
			formWrapper.addEventListener("transitionend", () => {
				formWrapper.remove();
			})
		}, 1000)
	}
}

export default validateAdminAuth;