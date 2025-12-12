export const getPosts = (req, res) => {
  res.json([
    { id: 1, title: "Secure API Development" },
    { id: 2, title: "Authentication & Authorization" },
  ]);
};
