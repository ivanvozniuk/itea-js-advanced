import BindInputData from "../functions/BindInputData";

export default class FontSize {
	constructor(target) {
		this.target = target;
		this.borderRadius = window.getComputedStyle(this.target, null).getPropertyValue('border-radius').slice(0, -2);
	}
	render() {
		return `
			<div class="form-group">
				<label for="style.borderRadius">Border radius</label>
				<input 
					type="number"
					min="0" 
					max="300" 
					class="form-control" id="style.borderRadius" 
					value=${this.borderRadius} 
				/>
			</div>
		`
	}
	handleBindInputData() {
		const fontSizeInput = document.getElementById("style.borderRadius");
		BindInputData(fontSizeInput, this.target, "style.borderRadius", "pixels");
	}
}