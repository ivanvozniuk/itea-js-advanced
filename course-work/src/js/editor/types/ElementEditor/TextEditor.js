import TextContent from "../../components/TextContent";
import FontSize from "../../components/FontSize"
import TextColor from "../../components/TextColor";
import TextStyle from "../../components/TextStyle";
import Opacity from "../../components/Opacity";

export default class TextEditor {
	constructor(target, editorContent) {
		this.target = target;
		this.editorContent = editorContent;
	}
	init() {
		const types = [TextContent, FontSize, TextColor, TextStyle, Opacity];

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