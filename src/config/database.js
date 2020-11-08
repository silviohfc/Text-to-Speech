const { createPool } = require('mysql2/promise')

module.exports = createPool({
    host: 'your_host',
    database: 'text_to_speech',
    user: 'your_user',
    password: 'your_pass'
})