/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/

class Posts {
	constructor() {
		this.posts = [];
		if (localStorage.getItem("posts")) {
			JSON.parse(localStorage.getItem("posts")).map(({ about, _id, created_at, isActive, title }) => {
				this.posts.push(new Post(about, _id, created_at, isActive, title));
			})
		}
		
	}
	fetchAndRenderData = (url) => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				data.forEach(({ about, _id, created_at, isActive, title }) => {
					this.posts.push(new Post(about, _id, created_at, isActive, title));
				})
			})
			.then(() => this.render())
			.then(() => this.putPostsToLocalStorage(this.posts))
	}
	render = () => {

		document.getElementById("postsList") && document.getElementById("postsList").remove();

		const postsList = document.createElement("ul");
					postsList.id = "postsList";
					postsList.style = "margin: 0 auto; padding: 0 40px";
					
		document.body.appendChild(postsList);

		this.posts.forEach(post => {
			const { about, _id, created_at, isActive, title, likes, addLike } = post;
			postsList.innerHTML += `
				<li data-id="${_id}" style="display: flex; flex-direction: column; align-items: center; text-align: center;
				margin: 30px 0; box-shadow: 0 0 20px #ccc; padding: 20px; border-radius: 25px;">
					<span style="margin-bottom: 10px">About: ${about}</span>
					<span style="margin-bottom: 10px">Date: ${created_at}</span>
					<span style="margin-bottom: 10px">Is active: ${isActive}</span>
					<span style="margin-bottom: 10px">Title: ${title}</span>
					<span class="likes">Likes: ${likes}</span>
					<button class="button__like">Like!</button>
				</li>
			`
			if (this.posts.indexOf(post) === this.posts.length - 1) {
				document.querySelectorAll(".button__like").forEach((btn, index) => btn.addEventListener("click", () => {
					this.posts[index].addLike();
					this.render();
				}));
			}
		});

		document.body.appendChild(postsList);
		document.querySelectorAll(".likes").forEach(btn => btn.addEventListener("click", () => {

		}))
	}
	addPost = post => this.posts.unshift(post);
	putPostsToLocalStorage = () => localStorage.setItem("posts", JSON.stringify(this.posts));
}

class Post {
	constructor(about, _id, created_at, isActive, title) {
		this.about = about;
		this._id = _id;
		this.created_at = created_at;
		this.isActive = isActive;
		this.title = title;
		this.likes = 0;
	}
	addLike = () => {
		console.log(this._id)
		this.likes = this.likes + 1; 
	}
}

const header = document.createElement("header");
			header.style = "display: flex; justify-content: space-around; margin-top: 15px";

const fetchAndRenderDataButton = document.createElement("button");
			fetchAndRenderDataButton.textContent = "Fetch and render data";
			fetchAndRenderDataButton.addEventListener("click", () => {
				mainPosts.fetchAndRenderData("http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2");
			})

const addPostPanel = document.createElement("div");
			addPostPanel.style = "width: 570px; display: flex; justify-content: space-between; align-items: flex-start;"

const aboutInput = document.createElement("textarea");
			aboutInput.placeholder = "Write about the post";
			aboutInput.style = "height: 90px";

const activeSelect = document.createElement("select");
const disabledOption = new Option("Is post active?", "hidden", true, true);
			disabledOption.disabled = true;
			disabledOption.style.display = "none";
			activeSelect.appendChild(disabledOption)
			activeSelect.appendChild(new Option("Yes", "yes"));
			activeSelect.appendChild(new Option("No", "no"));

const titleInput = document.createElement("input");
			titleInput.placeholder = "Write the post title";

const submit = document.createElement("button");
			submit.textContent = "Add post!";
			submit.addEventListener("click", () => {
				const about = aboutInput.value;
				const isActive = activeSelect.value = "yes" ? true : false;
				const title = titleInput.value;

				mainPosts.addPost(new Post(about, Date.now(), new Date, isActive, title));	
				mainPosts.putPostsToLocalStorage();
				mainPosts.render();
			})

addPostPanel.appendChild(aboutInput)
addPostPanel.appendChild(activeSelect)
addPostPanel.appendChild(titleInput)
addPostPanel.appendChild(submit)

header.appendChild(addPostPanel);
header.appendChild(fetchAndRenderDataButton);

document.body.appendChild(header);

const mainPosts = new Posts();
			mainPosts.render()