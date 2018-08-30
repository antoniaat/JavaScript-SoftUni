function loadRepos() {
    // $("#repos").empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    $.ajax({
        url,
        success: displayRepos,
        error: displayError
    });
    
    function displayRepos(respons) {
        $('#repos').empty();
        for (let repo in respons) {
            let currentLink = respons[repo].html_url;
            $('#repos').append($(`<li>`)
                .append($(`<a>${respons[repo].full_name}</a>`).attr('href', currentLink)))

        }
    }

    function displayError(err) {
        $('#repos').empty();
        $('#repos').append('<li>Error</li>')
    }

}