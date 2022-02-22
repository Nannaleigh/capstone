
const express = require('express')
const app = express()
const path = require('path')
const SERVER_PORT = process.env.PORT || 5464


app.use(express.json())
app.use(express.static('public'))

// app.post('/seed', seed)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.listen(SERVER_PORT, () => console.log (`Listening to you on port ${SERVER_PORT}`))
