import BindInputData from "../functions/BindInputData";

export default class TextContent {
	constructor(target) {
		this.target = target;
		this.textContent = target.textContent.replace(/[\s{2,}]+/g, ' ');
	}
	render() {
		return `
			<div class="form-group full-width no-margin-right">
				<label>Content</label>
				<textarea class="form-control" data-style="textContent">${this.textContent}</textarea>
			</div>
		`
	}
	handleBindInputData() {
		const textContentInput = document.querySelector("textarea[data-style='textContent']");
		BindInputData(textContentInput, this.target, "textContent");
	}
}