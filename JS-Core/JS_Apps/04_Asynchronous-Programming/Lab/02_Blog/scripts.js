let credentials = {
    'appId': 'kid_Hk_vfeelE',
    'appSecret': '4ec5be104f5644d0bc3a64ed92c85905'
};

function attachEvents() {
    function loadPosts(ev) {
        let url = 'https://baas.kinvey.com/appdata/kid_Hk_vfeelE/posts';

        $.ajax({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Basic ' + btoa('peter:123')
            }
        })
            .then(function (data) {
                for (const key of data) {
                    $('#posts')
                        .append(`<option value="${key._id}">${key.title}</option>`);

                }
            })
            .catch(error => console.log(error));
    }

    function loadPostComments(postId) {
        let commentsUrl = 'https://baas.kinvey.com/appdata/kid_Hk_vfeelE/comments/?query={"postId":"' + postId + '"}';
        $('#post-comments').empty();

        $.ajax({
            method: 'GET',
            url: commentsUrl,
            beforeSend: function() {
                $('#post-comments')
                    .append(`<li id="loading-comments-caption"><h3>Loading comments...</h3></li>`)
            },
            headers: {
                'Authorization': 'Basic ' + btoa('peter:123')
            },
            complete: function () {
                $('#loading-comments-caption').remove();
            }
        })
            .then(function (data) {
                for (const key of data) {
                    $('#post-comments')
                        .append(`<li>${key.text}</li>`)
                }
            })
            .catch(error => $('#post-comments').append(`<li>Error: ${error.statusText}</li>`));
    }

    function loadPostDetails(ev) {
        let postId = $($('#posts option:selected')[0]).val();
        let postUrl = 'https://baas.kinvey.com/appdata/kid_Hk_vfeelE/posts/' + postId;

        $.ajax({
            method: 'GET',
            url: postUrl,
            headers: {
                'Authorization': 'Basic ' + btoa('peter:123')
            }
        })
            .then(function (data) {
                $('#post-title').text(data.title);
                $('#post-body').text(data.body);

                loadPostComments(postId);
            })
            .catch(error => console.log(error));
    }

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(loadPostDetails);
}