const express = require('express')
const routes = express.Router()

const CommentController = require('../app/controllers/CommentController')

routes.get('/favicon.ico', (req, res) => res.status(204));

routes.get('/', CommentController.index)
routes.post('/', CommentController.create)

module.exports = routes