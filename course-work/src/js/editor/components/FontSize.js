import BindInputData from "../functions/BindInputData";

export default class FontSize {
	constructor(target) {
		this.target = target;
		this.fontSize = window.getComputedStyle(this.target, null).getPropertyValue('font-size').slice(0, -2); // slice pixels;
	}
	render() {
		return `
			<div class="form-group">
				<label for="style.fontSize">Font size</label>
				<input type="number" min="8" max="100" class="form-control" id="style.fontSize" value=${this.fontSize} />
			</div>
		`
	}
	handleBindInputData() {
		const fontSizeInput = document.getElementById("style.fontSize");
		BindInputData(fontSizeInput, this.target, "style.fontSize", "pixels");
	}
}