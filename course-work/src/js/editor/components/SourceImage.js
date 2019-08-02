import BindInputData from "../functions/BindInputData";

export default class FontSize {
	constructor(target) {
		this.target = target;
		this.image = target.src;
	}
	render() {
		return `
			<div class="form-group">
				<label for="src">Image:</label>
				<img src=${this.image} style="max-width: 200px" />
				<input type="file" id="src" />
			</div>
			
		`
	}
	handleBindInputData() {
		const imageInput = document.querySelector(".edit-menu__element-content #src");
		BindInputData(imageInput, this.target, "src", "image");
	}
}