import { notes } from "../../../../cache-data-for-search-api/data"

export default (req, res) => {
  const results = req.query.q ?
    notes.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}