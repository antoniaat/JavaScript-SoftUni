function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let moreText = document.getElementById('extra');

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        button.textContent = "Less";
    }
    else {
        moreText.style.display = "none";
        button.textContent = "More";
    }
}