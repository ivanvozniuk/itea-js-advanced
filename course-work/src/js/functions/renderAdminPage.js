import fadeIn from "../services/fadeIn";
import validateAdminAuth from "./validateAdminForm";
import Content from "../layouts/Content";
import Form from "../layouts/Form";
import InitEditor from "../editor";

const renderAdminPage = (instantly = true) => {
	if (localStorage.getItem("logined")) {
		if (instantly) {
			document.body.innerHTML = Content;
			const content = document.querySelector(".content");
			fadeIn(content);
		}
		else {
			document.body.innerHTML += Content;
			document.querySelector(".content").classList.remove("d-none");
		}
		InitEditor();
	}
	else {
		document.body.innerHTML = Form;
		const formWrapper = document.querySelector(".form-wrapper");
		const form = document.querySelector(".form-auth")
		fadeIn(formWrapper);
		form.addEventListener("submit", e => validateAdminAuth(e, form, formWrapper))
	}
}

export default renderAdminPage;