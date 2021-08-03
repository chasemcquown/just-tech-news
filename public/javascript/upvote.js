async function upvoteClickHandler(event) {
    event.preventDefault();
  
    // the folowing code (const id = ...) will allow us to grab the post id from the URL so that we can use it in our PUT request to make the upvote go through, since the PUT will require the user id and the post id
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
}
  
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);