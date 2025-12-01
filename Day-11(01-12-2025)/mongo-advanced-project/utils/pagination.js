exports.applyPagination = (query, req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  return query.skip(skip).limit(limit);
};
