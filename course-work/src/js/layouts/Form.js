const Form = `
	<div class="form-wrapper d-none">
		<form class="form-auth">
			<h2 class="form-auth__heading">Authorization</h2>
			<div class="form-group">
				<label for="exampleInputEmail1">Login</label>
				<input type="text" class="form-control" id="exampleInputEmail1" name="login" placeholder="Enter login">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Enter password">
			</div>
			<button type="submit" class="btn btn-lg btn-primary">Submit</button>
		</form>
	</div>
`

export default Form;