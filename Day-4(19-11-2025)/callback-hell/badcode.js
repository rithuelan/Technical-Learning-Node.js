// Simulating async tasks with setTimeout

getUser(1, (err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    getComments(posts[0], (err, comments) => {
      if (err) return console.error(err);

      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

// Async functions
function getUser(id, cb) {
  setTimeout(() => cb(null, { id, name: "Rithiha" }), 1000);
}
function getPosts(uid, cb) {
  setTimeout(() => cb(null, ["post1", "post2"]), 1000);
}
function getComments(post, cb) {
  setTimeout(() => cb(null, ["comment1", "comment2"]), 1000);
}
