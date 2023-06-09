async function commentFormHandler(event) {
    event.preventDefault();

    const body = document.querySelector('textarea[name="comment-body"]').value.trim();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (body) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
