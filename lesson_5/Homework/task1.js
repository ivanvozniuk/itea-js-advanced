/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.
*/

let CommentLogic = {
	addLike() {
		this.likes++;
	},
	image: "https://www.globaleaks.org/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
}

function Comment(name, text, image) {
	this.name = name;
	this.text = text;
	this.likes = 0;
	if (image) this.image = image;
	Object.setPrototypeOf(this, CommentLogic);
}

const Comment1 = new Comment("Sasha", "Awesome!");
const Comment2 = new Comment("Igor", "Sometimes i think about the universe but it seems hard for me");
const Comment3 = new Comment("Pes", "I'm dog", "https://cdn.vox-cdn.com/thumbor/USPKT0Vcmjkcx_7kb-lBLnuJ1Is=/983x935:2424x2667/1200x800/filters:focal(1351x1042:1991x1682)/cdn.vox-cdn.com/uploads/chorus_image/image/60034597/GettyImages_971886594.0.jpg");
const Comment4 = new Comment("Gertruda", "My name is the most beautiful in the world", "https://www.gettyimages.co.uk/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg");

const commentsArray = [Comment1, Comment2, Comment3, Comment4];

const commentsFeed = document.getElementById("CommentsFeed");

function printComments(array) {
	array.forEach(({ image, text, name}) => {
		const commentLayout = `
			<div style="display:flex; flex-direction:column; width: 260px; margin: 20px; align-items: center; box-shadow: 0 0 15px #ccc; border-radius: 25px; padding: 15px;">
				<img src="${image}" width="100" height="100" />
				<p><b style="font-size: 20px;">${name}</b></p>
				<p style="text-align: center">${text}</p>
			</div>
		`
		commentsFeed.innerHTML += commentLayout;
	})
}

printComments(commentsArray);