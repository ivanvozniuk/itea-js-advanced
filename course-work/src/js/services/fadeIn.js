import { transitionDefault } from "../store/values";

export default function fadeIn(elem) {
	elem.style.opacity = 0;
	elem.classList.remove("d-none");
	elem.style.animation = `${transitionDefault} fadeIn`;
	elem.addEventListener("animationend", () => elem.style.opacity = 1);
}