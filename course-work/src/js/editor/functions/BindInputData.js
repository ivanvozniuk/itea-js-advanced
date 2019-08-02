import setStyles from "./setStyles";

const BindData = (input, target, targetChangingStyle, handleType, callback = () => {}) => {
	input.addEventListener("input", () => {
		switch (handleType) {
			case "pixels":
				if (target.length) {
					target.forEach(targ => {
						setStyles(targ, targetChangingStyle, (input.value + "px"))
					})
				}
				else {
					setStyles(target, targetChangingStyle, (input.value + "px"))
				}
				break;
			case "number":
				setStyles(target, targetChangingStyle, (parseInt(input.value)))
				break;
			case "image":
				console.log(input.value)
				setStyles(target, targetChangingStyle, `/static/${input.value.slice(12)}`) 
				break;
			default:
				setStyles(target, targetChangingStyle, input.value);
		}
		callback(input.value)
	})
}
export default BindData;