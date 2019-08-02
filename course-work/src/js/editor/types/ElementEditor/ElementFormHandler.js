import setStyles from "../../functions/setStyles"

export default class ElementFormHandler {
	constructor() {
		this.changes = JSON.parse(localStorage.getItem("elementsChanges")) || [];
	}
	handleForm() {
		const ElementForm = document.getElementById("elementForm");
		
		
		ElementForm.addEventListener("submit", e => {
			e.preventDefault();

			const targetId = document.querySelector(".editable.active").editableId;

			const elementsFormWithoutCarouselAndSubmitButton = elems => elems.filter(elem => (
				elem.type !== "submit" && elem.dataset.type !== "carousel"
			));
			const elementsFormCarousel = elems => elems.filter(elem => elem.dataset.type === "carousel");

			elementsFormWithoutCarouselAndSubmitButton([...ElementForm.elements]).forEach(({ id, value }) => {
				this.changes.push({
					id: targetId,
					[id]: value
				})
			});

			const carouselElements = elementsFormCarousel([...ElementForm.elements]).map(({ id, checked, value }) => {
				switch(id) {
					case "dataset.ride":
						return checked ? "carousel" : "false"
					case "dataset.interval":
						return Number(value)
					case "dataset.pause":
						return checked ? "hover" : false
					case "dataset.keyboard":
						return checked
				}
			 })
			 console.log(carouselElements);

			carouselElements.length && (
				localStorage.setItem("carouselSettings", JSON.stringify(carouselElements))
			)
			localStorage.setItem("elementsChanges", JSON.stringify(this.changes))
			
		})
	}
	setChangedStyles() {
		this.changes.forEach(({ id, ...props }) => {
			const target = [...document.querySelectorAll(".editable")].find(item => item.editableId == id);
			for (const key in props) {
				switch(key) {
					case "style.fontSize":
					case "style.borderRadius":
						setStyles(target, key, (props[key] + "px"))
						break;
					case "src":
						setStyles(target, key, `/static/${props[key].slice(12)}`) 
						break;
					default:
						setStyles(target, key, props[key]);
					}
			}
		})
	}
	init() {
		this.handleForm();
		this.setChangedStyles();
	}
}