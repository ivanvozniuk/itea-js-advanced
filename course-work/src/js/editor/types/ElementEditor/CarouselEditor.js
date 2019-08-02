import Carousel from "../../components/Carousel";
import Opacity from "../../components/Opacity";
import BorderRadius from "../../components/BorderRadius";

export default class CarouselEditor {
	constructor(target, editorContent) {
		this.target = target;
		this.editorContent = editorContent;
	}
	init() {
		const types = [Carousel, Opacity, BorderRadius];

		this.editorContent.innerHTML = "<h4>Works only after page reload</h4>";

		types.forEach(Type => {
			const type = new Type(this.target);
			this.editorContent.innerHTML += type.render();
		})
		types.forEach(Type => {
			const type = new Type(this.target);
			type.handleBindInputData();
		})
	}
	settings(ride, interval, pause, keyboard) {
		return {
			ride: ride, //autoplay
			interval: interval,
			pause: pause,
			keyboard: keyboard
		}
	}
}