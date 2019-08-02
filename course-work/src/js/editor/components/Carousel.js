export default class Carousel {
	constructor(target) {
		this.target = target;
		this.ride = target.dataset.ride;
		this.interval = target.dataset.interval;
		this.pause = target.dataset.pause;
		this.keyboard = target.dataset.keyboard;
	}
	render() {
		return `
			<div class="form-group">
				<label for="dataset.ride">Autoplay</label>
				<input id="dataset.ride" data-type="carousel" ${this.ride == "carousel" && "checked"} type="checkbox" />
			</div>
			<div class="form-group">
				<label for="dataset.interval">Interval</label>
				<input type="number" data-type="carousel" value=${this.interval} class="form-control" id="dataset.interval" /> 
			</div>
			<div class="form-group">
				<label for="dataset.pause">Pause on hover</label>
				<input ${this.pause == "hover" && "checked"} data-type="carousel" type="checkbox" id="dataset.pause" /> 
			</div>
			<div class="form-group">
				<label for="dataset.keyboard">Use keyboard</label>
				<input type="checkbox" ${this.keyboard == "true" && "checked"} data-type="carousel" id="dataset.keyboard" /> 
			</div>
		`
	}
	handleBindInputData() {
		
	}
}