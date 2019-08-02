import BindInputData from "../functions/BindInputData";

export default class SourceImage {
	constructor(target, carousel = false) {
		this.target = target;
		this.image = target.src;
		this.carousel = carousel;
	}
	render() {
		return `
			<div class="form-group" data-alt="${this.target.alt}">
				<label for="src">Image:</label>
				<img src=${this.image} style="max-width: 200px" />
				<input data-style="src" type="file" />
			</div>
			
		`
	}
	handleBindInputData() {
		if (this.carousel) {
			const input = document.querySelector(`.form-group[data-alt='${this.target.alt}'] input[data-style='src']`);
			BindInputData(input, this.target, "src", "image")
		}
		else {
			const input = document.querySelector("input[data-style='src']");
			BindInputData(input, this.target, "src", "image")
		}
		
	}
}