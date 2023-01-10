import { notes } from "../../../../cache-data-for-search-api/data";

export default (req, res) => {
  const results = req.query.q
    ? notes.filter(
        (post) =>
          post.title.toLowerCase().includes(req.query.q.toLowerCase()) ||
          post.tags?.filter(t => t.toLowerCase().includes(req.query.q.toLowerCase())).length ||
          post.keywords?.toLowerCase().includes(req.query.q.toLowerCase()) ||
          post.description?.toLowerCase().includes(req.query.q.toLowerCase())
      )
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
