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

async function main() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0]);

    console.log({ user, posts, comments });
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
