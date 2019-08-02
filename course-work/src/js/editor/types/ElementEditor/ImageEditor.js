import Opacity from "../../components/Opacity";
import SourceImage from "../../components/SourceImage";
import BorderRadius from "../../components/BorderRadius";

export default class TextEditor {
	constructor(target, editorContent) {
		this.target = target;
		this.editorContent = editorContent;
	}
	init() {
		const types = [SourceImage, Opacity, BorderRadius];

		this.editorContent.innerHTML = "";

		types.forEach(Type => {
			const type = new Type(this.target);
			this.editorContent.innerHTML += type.render();
		})
		
		types.forEach(Type => {
			const type = new Type(this.target);
			type.handleBindInputData()
		})
	}
}