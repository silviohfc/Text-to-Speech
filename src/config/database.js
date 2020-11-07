const mysql = require('mysql2/promise')

const dbConfig = {
    user: 'root',
    password: '12345678',
    server: 'localhost',
    port: '3306',
    database: 'text_to_speech'
}

async function connect(config) {
    const { user, password, server, port, database } = config

    return await mysql.createConnection(`mysql://${user}:${password}@${server}:${port}/${database}`)
}

module.exports = connect(dbConfig)