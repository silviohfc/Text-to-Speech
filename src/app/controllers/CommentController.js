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
            await Comment.create(comment)
            return res.send('Created comment')
        }
        catch(err) {
            console.log(err)
        }
        
    }
}