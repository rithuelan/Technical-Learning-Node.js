function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "Rithiha" }), 300);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 300);
  });
}

function getComments(post) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Comment A", "Comment B"]), 300);
  });
}

getUser(1)
  .then(user => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return getComments(posts[0]);
  })
  .then(comments => {
    console.log("Comments:", comments);
  })
  .catch(err => console.error("Error:", err));
