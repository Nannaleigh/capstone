
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const SERVER_PORT = process.env.PORT || 5464


app.use(express.json())
app.use(express.static('public'))
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const {
    getAllComments, createComment
  } = require('./controller')
  
  app.get("/api/comments", getAllComments);
  app.post("/api/comments", createComment);

app.listen(SERVER_PORT, () => console.log (`Listening to you on port ${SERVER_PORT}`))
