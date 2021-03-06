import BindInputData from "../functions/BindInputData";
import rgbToHex from "../../services/rgbToHex";

export default class TextColor {
	constructor(target) {
		this.target = target;
		this.textColor = rgbToHex(window.getComputedStyle(this.target, null).getPropertyValue('color'));
	}
	render() {
		return `
			<div class="form-group">
				<label>Text color</label>
				<input type="color" class="form-control" data-style="style.color" value=${this.textColor} />
			</div>
		`
	}
	handleBindInputData() {
		const textColorInput = document.querySelector("input[data-style='style.color']");
		BindInputData(textColorInput, this.target, "style.color");
	}
}