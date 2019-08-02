import BindInputData from "../functions/BindInputData";

export default class TextContent {
	constructor(target) {
		this.target = target;
		this.textContent = target.textContent.replace(/[\s{2,}]+/g, ' ');
	}
	render() {
		return `
			<div class="form-group full-width no-margin-right">
				<label for="textContent">Content</label>
				<textarea class="form-control" id="textContent">${this.textContent}</textarea>
			</div>
		`
	}
	handleBindInputData() {
		const textContentInput = document.querySelector(".edit-menu__element-content #textContent");
		BindInputData(textContentInput, this.target, "textContent");
	}
}