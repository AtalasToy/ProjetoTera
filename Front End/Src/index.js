const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send(`servidor online`)
})
app.listen(3000)