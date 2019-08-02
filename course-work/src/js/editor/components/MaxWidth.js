import BindInputData from "../functions/BindInputData";

export default class MaxWidth {
	constructor(targets, targetsName = "") {
		this.targets = targets;
		this.targetsName = targetsName;
		this.maxWidth = window.getComputedStyle(this.targets[0], null).getPropertyValue('max-width').slice(0, -2);
	}
	render() {
		return `
			<div class="form-group full-width no-margin-right">
				<label for="maxWidth">${this.targetsName} max width: 
					<span class="max-width-indicator">${this.maxWidth}</span> px
				</label>
				<input 
					type="range" 
					min="200" max="1920" 
					step="1" 
					class="custom-range"  
					id="maxWidth"
					value=${this.maxWidth} 
				/>
				
			</div>
		`
	}
	indicateMaxWidthValue(value) {
		document.querySelector(".max-width-indicator").textContent = value;
	}
	handleBindInputData() {
		const maxWidthInput = document.getElementById("maxWidth");
					BindInputData(maxWidthInput, this.targets, "style.maxWidth", "pixels", this.indicateMaxWidthValue);
	}
}