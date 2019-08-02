const setStyles = (target, style, value) => {
	if (style.includes(".")) {
		target.style[style.slice(6)] = value;
	}
	else {
		return target[style] = value;
	}
}

export default setStyles;