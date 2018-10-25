function getArticleGenerator(articles) {
    let articlesNew = articles;

    return function () {
        if (articlesNew.length > 0) {
            let article = $('<article>');
            article.append(`<p>${articlesNew.shift()}</p>`);
            $('#content').append(article);
        }
    }
}