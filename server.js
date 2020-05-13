const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.set('view engine', 'njk')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(routes)

server.listen(5000, (req, res)=>{
    console.log('server is running')
})