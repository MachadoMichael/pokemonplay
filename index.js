const express = require('express')
const app = express()
const path = require('path')

app.listen(process.env.PORT || 3000)

app.use('/', express.static(path.join(__dirname, 'public')))