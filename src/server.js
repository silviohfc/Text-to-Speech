const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const cors = require('cors')

const db = require('./config/database')

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server
})

server.listen(5000, () => {
    console.log('Server is running')
})