import renderAdminPage from "./functions/renderAdminPage";

document.addEventListener("DOMContentLoaded", () => {
	if (document.body.classList.contains("admin")) {

		renderAdminPage();

	}
})