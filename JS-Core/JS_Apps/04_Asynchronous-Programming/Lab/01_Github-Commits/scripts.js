function loadCommits() {
    let username = $('#username').val();
    let repo = $('#repo').val();

    let commits = $('#commits');

    $.get(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then((data) => {
            displayCommits(data);
        }).catch(showError);

    function displayCommits(data) {
        for (let key in data) {
            let author = data[key].commit.author.name;
            let message = data[key].commit.message;

            let newListItem = $('<li>');
            newListItem.text(`${author}: ${message}`);

            $('#commits').append(newListItem);
        }
    }
    
    function showError() {
        let newListItem = $('<li>');
        newListItem.text(`Error: 404 (Not Found)`);

        $('#commits').append(newListItem);
    }
}