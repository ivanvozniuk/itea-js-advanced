import BindInputData from "../functions/BindInputData";

export default class Opacity {
	constructor(target) {
		this.target = target;
		this.opacity = window.getComputedStyle(this.target, null).getPropertyValue('opacity');
	}
	render() {
		return `
			<div class="form-group">
				<label for="style.opacity">Opacity</label>
				<input 
					type="range" 
					min="0" max="1" 
					step="0.01" 
					class="custom-range" 
					value=${this.opacity}
					data-style="style.opacity" 
				/>
			</div>
		`
	}
	handleBindInputData() {
		const opacityInput = document.querySelector("input[data-style='style.opacity']");
		BindInputData(opacityInput, this.target, "style.opacity",);
	}
}