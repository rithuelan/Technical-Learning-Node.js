import sanitize from "sanitize-html";

app.post("/comment", (req, res) => {
  const cleanComment = sanitize(req.body.comment);
  res.send({ safe: cleanComment });
});
