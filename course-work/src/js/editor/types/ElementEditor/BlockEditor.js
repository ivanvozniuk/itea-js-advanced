import BackgroundColor from "../../components/BackgroundColor";
import Opacity from "../../components/Opacity";

export default class TextEditor {
	constructor(target, editorContent) {
		this.target = target;
		this.editorContent = editorContent;
	}
	init() {
		const types = [Opacity, BackgroundColor];

		this.editorContent.innerHTML = "";

		types.forEach(Type => {
			const type = new Type(this.target);
			this.editorContent.innerHTML += type.render();
		
		})
		
		types.forEach(Type => {
			const type = new Type(this.target);
			type.handleBindInputData();
		})
	}
}