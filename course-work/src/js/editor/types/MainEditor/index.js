import MaxWidth from "../../components/MaxWidth";
import setStyles from "../../functions/setStyles";
import { password } from "../../../store/data";

export default class MainEditor {
	constructor(target, editorContent) {
		this.target = target;
		this.editorContent = editorContent;
	}

	init() {
		this.handleResetButton();
		this.renderWrapperMaxWidthEditor();
		this.setChangedStyle();
		this.handleForm();
		this.handleExitButton();
		
	}

	renderWrapperMaxWidthEditor() {
		const maxWidth = new MaxWidth(document.querySelectorAll(".container"), "Container");
			this.editorContent.innerHTML += maxWidth.render();
				maxWidth.handleBindInputData();
	}

	handleExitButton() {
		document.querySelector(".btn__exit").addEventListener("click", () => {
			localStorage.removeItem("logined");
			location.reload();
		})
	}

	handleResetButton() {
		document.querySelector(".btn__reset-changes").addEventListener("click", () => {
			localStorage.removeItem("elementsChanges");
			localStorage.removeItem("carouselSettings");
			localStorage.removeItem("containerMaxWidth");
			location.reload();
		})
	}

	handleForm() {
		const mainForm = document.getElementById("mainForm");

		mainForm.addEventListener("click", e => {
			e.preventDefault();
			const { login, password } = mainForm.elements;

			localStorage.setItem("containerMaxWidth", document.getElementById("maxWidth").value);

			if (login.value && password.value) {
				[login, password].forEach(item => {
					item.classList.remove("is-invalid");
					item.classList.add("is-valid")
				})
				localStorage.setItem("login", login.value)
				localStorage.setItem("password", password.value)
			}
			else if (login.value) {
				[login, password].forEach(item => {
					item.classList.remove("is-invalid");
					item.classList.remove("is-valid");
				})
				password.classList.add("is-invalid");
				login.classList.add("is-valid")
			}
			else if (password.value) {
				[login, password].forEach(item => {
					item.classList.remove("is-invalid");
					item.classList.remove("is-valid");
				})
				login.classList.add("is-invalid");
				password.classList.add("is-valid");
			}
		})
	}

	setChangedStyle() {
		document.querySelectorAll(".container").forEach(container => {
			setStyles(container, "style.maxWidth", (localStorage.getItem("containerMaxWidth") + "px") || "1440px");
		})
	}
	
}