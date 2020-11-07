const { createPool } = require('mysql2/promise')

module.exports = createPool({
    host: 'localhost',
    database: 'text_to_speech',
    user: 'root',
    password: '12345678'
})