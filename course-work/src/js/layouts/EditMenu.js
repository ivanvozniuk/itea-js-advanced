import { login, password } from "../store/data"

const EditMenu = `
	<div class="edit-menu">
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#elementForm">Element</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#mainForm">Main</a>
			</li>
		</ul>
		<div class="tab-content">
			<form class="tab-pane fade show active" id="elementForm">
				<div class="edit-menu__element-content">
					<h2>No selected to edit elements.</h2>
				</div>
				<button type="submit" class="btn btn-lg btn-success edit-menu__submit">Save changes!</button>
			</form>
			<form class="tab-pane fade" id="mainForm">
				<div>
					<div class="edit-menu__main-content">

					</div>
					<label for="login"><b>Current login:</b> ${login}</label>
					<label for="password"><b>Current password:</b> ${password}</label>
					<label>You can change it:</label>
					<div class="form-group">
						<input id="login" class="form-control" type="text" placeholder="New login" />
					</div>
					<div class="form-group">
						<input id="password" class="form-control" type="text" placeholder="New password" />
					</div>
				</div>
				<div class="main__buttons-block">
					<button class="btn btn-danger btn__exit">Exit</button>
					<button class="btn btn-warning btn__reset-changes">Reset changes</button>
					<button type="submit" class="btn btn-lg btn-success edit-menu__submit">Save changes!</button>
				</div>
			</form>
		</div>
		<div class="edit-menu__close">
			<svg focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path fill="#dc3545" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
			</svg>
		</div>
	</div>
`

export default EditMenu;