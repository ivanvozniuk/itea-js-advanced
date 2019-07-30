document.addEventListener("DOMContentLoaded", () => {
	if (document.body.classList.contains("admin")) {

		//form

		const transitionDefault = "1s";

		function fadeIn(elem) {
			elem.style.opacity = 0;
			elem.classList.remove("d-none");
			elem.style.animation = `${transitionDefault} fadeIn`;
			elem.addEventListener("animationend", () => elem.style.opacity = 1);
		}

		const login = "admin";
		const password = "admin";

		const validateAdminAuth = (form, e) => {
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
				setTimeout(() => {
					const formWrapper = document.querySelector(".form-wrapper");
					const content = document.querySelector(".content");

					formWrapper.classList.add("translateUpper");
					// formWrapper.addEventListener("transitionend", () => formWrapper.remove())
					fadeIn(content);
				}, 1000)
			}
		}

		const form = document.querySelector(".form-auth");
		form.addEventListener("submit", e => validateAdminAuth(form, e))


		// editor


		const editor = document.querySelector(".edit-menu");
					editor.open = () => editor.classList.add("open");
					editor.close = () => editor.classList.remove("open");

		const editorContent = document.querySelector(".edit-menu__content");

		const editableElements = document.querySelectorAll(".editable");

		const rgbToHex = rgb => {
			rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
			return (rgb && rgb.length === 4) ? "#" +
			 ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			 ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			 ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
		}

		const linkData = (input, target, targetChangingStyle, inputValue) => {
			input.addEventListener("input", () => {
				if (targetChangingStyle.includes(".")) {
					const styleAfterDot = targetChangingStyle.slice(targetChangingStyle.indexOf(".") + 1);
					target.style[styleAfterDot] = inputValue || input.value
				}
				else {
					target[targetChangingStyle] = inputValue || input.value;
				}
			})
		}

		const renderTextEditor = target => {
			const { textContent } = target;
			const textFontSize = window.getComputedStyle(target, null).getPropertyValue('font-size').slice(0, -2); // slice pixels
			const textColor = window.getComputedStyle(target, null).getPropertyValue('color');

			editorContent.innerHTML = `
				<div class="form-group">
					<label for="textContent">Change content</label>
					<textarea class="form-control" id="textContent">${textContent}</textarea>
				</div>
				<div class="form-group">
					<label for="textFontSize">Change font size</label>
					<input type="number" min="8" max="60" class="form-control" id="textFontSize" value=${textFontSize} />
				</div>
				<div class="form-group">
					<label for="textColor">Change color</label>
					<input type="color" class="form-control" id="textColor" value=${rgbToHex(textColor)} />
				</div>
				<div>
					
				</div>
			`

			const textContentInput = document.querySelector(".edit-menu__content #textContent");
						linkData(textContentInput, target, "textContent");
			
			const fontSizeInput = document.querySelector(".edit-menu__content #textFontSize");
						linkData(fontSizeInput, target, "style.fontSize");
						// fontSizeInput.addEventListener("input", () => {
						// 	target.style.fontSize = fontSizeInput.value + "px";
						// })
			const textColorInput = document.querySelector(".edit-menu__content #textColor");
						textColorInput.addEventListener("input", () => {
							target.style.color = textColorInput.value;
						})
		}

		editableElements.forEach(el => el.addEventListener("click", e => {
			const { target } = e;

			e.preventDefault();
			const editorType = target.dataset.editableType;
			switch (editorType) {
				case "text":
					console.log(target)
					renderTextEditor(target)
					break;
			}
			editor.open();

		}))

		const closeEditor = document.querySelector(".edit-menu__close");
					closeEditor.addEventListener("click", () => {
						editor.close();
					})


	}
})