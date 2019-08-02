import TextEditor from "./types/ElementEditor/TextEditor";
import ButtonEditor from "./types/ElementEditor/ButtonEditor";
import MainEditor from "./types/MainEditor/index";
import ImageEditor from "./types/ElementEditor/ImageEditor";
import ElementFormHandler from "./types/ElementEditor/ElementFormHandler";
import CarouselEditor from "./types/ElementEditor/CarouselEditor";
import BlockEditor from "./types/ElementEditor/BlockEditor"
import trackEditableNodes from "./functions/trackEditableNodes";

const InitEditor = () => {
	trackEditableNodes();
	
	const editor = document.querySelector(".edit-menu");
				editor.open = () => editor.classList.add("open");
				editor.close = () => editor.classList.remove("open");

	const editableElements = document.querySelectorAll(".editable");

	const removeAllOutlines = () => editableElements.forEach(el => el.classList.remove("active"));

	const editorElementContent = document.querySelector(".edit-menu__element-content");
	const editorMainContent = document.querySelector(".edit-menu__main-content")

	new MainEditor(null, editorMainContent).init();
	new ElementFormHandler().init();

	const openMenuButton = document.querySelector(".edit-menu__open");
	openMenuButton.addEventListener("click", () => {
		editor.open()
		openMenuButton.classList.remove("active");
	});

	editableElements.forEach(el => el.addEventListener("click", e => {
		e.preventDefault();
		const { target } = e;

		removeAllOutlines();
		el.classList.add("active");

		const editorType = target.dataset.editableType;
		switch (editorType) {
			case "text":
				new TextEditor(target, editorElementContent).init()
				break;
			case "button":
				new ButtonEditor(target, editorElementContent).init()
				break;
			case "image":
				new ImageEditor(target, editorElementContent).init()
				break;
			case "block":
				new BlockEditor(target, editorElementContent).init()
				break;
			case "carousel":
				new CarouselEditor(target, editorElementContent).init()
				break;
			default: return false;
		}
		openMenuButton.classList.remove("active");
		editor.open();

	}))

	const closeEditor = document.querySelector(".edit-menu__close");
				closeEditor.addEventListener("click", () => {
					removeAllOutlines();
					editor.close();
					openMenuButton.classList.add("active");
				})
}

export default InitEditor;