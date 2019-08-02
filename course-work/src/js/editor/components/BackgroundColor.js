import BindInputData from "../functions/BindInputData";
import rgbToHex from "../../services/rgbToHex";

export default class BackgroundColor {
	constructor(target) {
		this.target = target;
		this.backgroundColor = rgbToHex(window.getComputedStyle(this.target, null).getPropertyValue('background-color'));
		console.log(this.backgroundColor)
	}
	render() {
		return `
			<div class="form-group">
				<label for="style.backgroundColor">Background</label>
				<input type="color" class="form-control" data-style="style.backgroundColor" value=${this.backgroundColor} />
			</div>
		`
	}
	handleBindInputData() {
		const backrgoundColorInput = document.querySelector("input[data-style='style.backgroundColor']");
		BindInputData(backrgoundColorInput, this.target, "style.backgroundColor");
	}
}