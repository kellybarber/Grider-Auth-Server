const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mogoose = require('mongoose')
const router = require('./router')

mongoose.connect('mongodb://localhost:auth/auth')

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port, () => console.log("Listening on Port", port)) 

