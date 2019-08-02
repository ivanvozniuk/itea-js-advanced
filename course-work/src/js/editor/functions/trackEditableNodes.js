const trackEditableNodes = () => {
	document.querySelectorAll(".editable").forEach((item, index) => item.editableId = index);
}

export default trackEditableNodes;