const Comment = require('../models/Comment')

module.exports = {
    async index(req, res) {
        try {
            const [rows] = await Comment.all()
            return res.render('index', { comments: rows })
        }
        catch(err) {
            console.log(err)
        }
    },

    async create(req, res) {
        const { comment } = req.body

        try {
            const [{ insertId }] = await Comment.create(comment)
            const results = await Comment.find(insertId)
            const data = results[0][0]
            
            return res.json(data)
        }
        catch(err) {
            console.log(err)
        }
        
    }
}