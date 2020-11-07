const db = require('../../config/database')

module.exports = {
    all() {
        try {
            return db.query('SELECT * FROM comments')
        }
        catch(err) {
            console.log(err)
        }
    },

    create(data) {
        try {
            return db.query(`
                INSERT INTO comments (comment, path) VALUES (?, ?);
            `, [data.comment, data.path])
        }
        catch(err) {
            console.log(err)
        }
    },

    find(id) {
        try {
            return db.query('SELECT * FROM comments WHERE id = ?', [id])
        }
        catch(err) {
            console.log(err)
        }
    }
}