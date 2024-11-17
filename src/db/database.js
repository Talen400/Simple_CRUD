const Database = require('better-sqlite3')
const db = new Database('example.db')

db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
    `
).run()

module.exports = db
