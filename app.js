const express = require('express')
const app = express()
const port = 3000

const listener = () => console.log(`Party on port ${port}!`)
app.listen(port, listener)
