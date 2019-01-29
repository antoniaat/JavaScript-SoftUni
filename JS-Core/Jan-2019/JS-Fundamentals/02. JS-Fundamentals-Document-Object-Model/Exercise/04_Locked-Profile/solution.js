function solve() {
    let showMoreBtn = document.getElementsByTagName('button');

    Array.from(showMoreBtn).forEach(btn => {
        btn.addEventListener('click', (event) => {

            let parent = event.target.parentNode;

            if (parent.children[4].checked) {

                let hiddenDiv = parent.children[9];

                if (btn.textContent === 'Show more') {
                    hiddenDiv.style.display = "block";
                    btn.textContent = "Hide it";

                } else {
                    hiddenDiv.style.display = "none";
                    btn.textContent = "Show more";
                }
            }
        });
    })
}