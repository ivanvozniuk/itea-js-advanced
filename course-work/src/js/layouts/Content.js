import EditMenu from "./EditMenu";
import CarouselEditor from "../editor/types/ElementEditor/CarouselEditor";



const carouselSettings = JSON.parse(localStorage.getItem("carouselSettings")) || ["false", 1000, false, true];

const { ride, interval, pause, keyboard } = new CarouselEditor().settings(...carouselSettings);

const Content = `
	<div class="content d-none d-flex">
		${EditMenu}

		<div class="layout">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark relative">
				<svg focusable="false" class="edit-menu__open active absolute" width="32" height="32" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path fill="#218838" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z">
					</path>
				</svg>
				<div class="container">
					<a class="navbar-brand editable" data-editable-type="text" href="#">Logo</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">Home
									<span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Services</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<header class="bg-primary py-5 mb-5">
				<div class="container h-100">
					<div class="row h-100 align-items-center">
						<div class="col-lg-12">
							<h1 class="display-4 text-white mt-5 mb-2 editable" data-editable-type="text">Business Name or Tagline</h1>
							<p class="lead mb-5 text-white-50 editable" data-editable-type="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
						</div>
					</div>
				</div>
			</header>

			<div class="container">

				<div class="row">
					<div class="col-md-8 mb-5">
						<h2 class="editable" data-editable-type="text" >What We Do</h2>
						<hr>
						<p class="editable" data-editable-type="text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
						<p class="editable" data-editable-type="text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
						<a class="btn btn-primary btn-lg editable" data-editable-type="button" href="#">Call to Action &raquo;</a>
					</div>
					<div class="col-md-4 mb-5">
						<h2 class="editable" data-editable-type="text" >Contact Us</h2>
						<hr>
						<address>
							<strong class="editable" data-editable-type="text">Our location</strong>
							<br><span class="editable" data-editable-type="text">3481 Melrose Place</span>
							<br><span class="editable" data-editable-type="text">Beverly Hills, CA 90210</span>
							<br>
						</address>
						<address>
							<span title="Phone" class="editable" data-editable-type="text">Phone: (123) 456-7890</span>
							<br>
							<span title="Email" class="editable" data-editable-type="text">
								Email: 
								<a href="mailto:#">name@example.com</a>
							</span>
							
						</address>
					</div>
				</div>

				<div class="col-lg-9 ml-auto mr-auto" >
					<div
						data-editable-type="carousel"
						class="carousel slide my-4 editable"
						data-ride="${ride}"
						data-pause="${pause}"
						data-interval="${interval}"
						data-keyboard="${keyboard}"
					>
						<ol class="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div class="carousel-inner" role="listbox">
							<div class="carousel-item active">
								<img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
							</div>
							<div class="carousel-item">
								<img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
							</div>
							<div class="carousel-item">
								<img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4 mb-5">
						<div class="card h-100">
							<img class="card-img-top editable" data-editable-type="image" src="http://placehold.it/300x200" alt="">
							<div class="card-body">
								<h4 class="card-title editable" data-editable-type="text">Card title</h4>
								<p class="card-text editable" data-editable-type="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
							</div>
							<div class="card-footer">
								<a href="#" class="btn btn-primary editable" data-editable-type="button">Find Out More!</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-5">
						<div class="card h-100">
							<img class="card-img-top editable" data-editable-type="image" src="http://placehold.it/300x200" alt="">
							<div class="card-body">
								<h4 class="card-title editable" data-editable-type="text">Card title</h4>
								<p class="card-text editable" data-editable-type="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
							</div>
							<div class="card-footer">
								<a href="#" class="btn btn-primary editable" data-editable-type="button">Find Out More!</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-5">
						<div class="card h-100">
							<img class="card-img-top editable" data-editable-type="image" src="http://placehold.it/300x200" alt="">
							<div class="card-body">
								<h4 class="card-title editable" data-editable-type="text">Card title</h4>
								<p class="card-text editable" data-editable-type="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							</div>
							<div class="card-footer">
								<a href="#" class="btn btn-primary editable" data-editable-type="button">Find Out More!</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer class="py-5 bg-dark">
				<div class="container">
					<p class="m-0 text-center text-white editable" data-editable-type="text">Copyright &copy; Your Website 2019</p>
				</div>
			</footer>
		</div>

	</div>
`
export default Content;