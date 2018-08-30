function create(sentences) {
    let container = document.getElementById('content');

    for (let i = 0; i < sentences.length; i++) {
        let currentElement = sentences[i];
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = currentElement;
        div.appendChild(paragraph);

        container.appendChild(div);
    }
}