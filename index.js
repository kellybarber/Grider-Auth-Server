const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')

mongoose.connect('mongodb://localhost/auth')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port, () => console.log("Listening on Port", port)) 

