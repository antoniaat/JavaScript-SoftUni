function createArticle() {

	let title = document.getElementById('createTitle');
	let content = document.getElementById('createContent');
	let articleList = document.getElementById('articles');

	if (title.value && content.value) {
		let article = document.createElement('article');
		let h3 = document.createElement('h3');
		let p = document.createElement('p');

		h3.textContent = title.value;
		p.textContent = content.value;

		article.appendChild(h3);
		article.appendChild(p);

		articleList.appendChild(article);
	}

	title.value = "";
	content.value = "";
}