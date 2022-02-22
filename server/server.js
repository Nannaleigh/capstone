require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const {SERVER_PORT} = process.env || 5464
const { seed } = require('./seed.js')
const { getTodo } = require('./controller.js')
app.use(express.json())
app.use(express.static('public'))

app.post('/seed', seed)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// });
app.get('/todo', getTodo)

app.listen(SERVER_PORT, () => console.log (`Listening to you on port ${SERVER_PORT}`))

