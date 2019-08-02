import BindInputData from "../functions/BindInputData";

export default class TextStyle {
	constructor(target) {
		this.target = target;
		this.currentFontWeight = window.getComputedStyle(this.target, null).getPropertyValue('font-weight');
		this.fontWeights = [200, 300, 400, 500, 600, 700, 800, 900];
		this.currentFontStyle = window.getComputedStyle(this.target, null).getPropertyValue('font-style');
	}
	render() {
		return `
			<div class="form-group">
				<label for="style.fontWeight">Font weight</label>
				<select class="custom-select" id="style.fontWeight">
					${this.fontWeights.map(item => {
						return `<option ${item == this.currentFontWeight && "selected"} value=${item}>${item}</option>`
					})};
				</select>
			</div>
		`
	}
	handleBindInputData() {
		const fontWeightInput = document.getElementById("style.fontWeight");
		BindInputData(fontWeightInput, this.target, "style.fontWeight", "number");
	}
}