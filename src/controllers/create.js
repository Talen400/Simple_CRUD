const db = require('../db/database')

module.exports = (req, res) => {
    const { name } = req.body

    if (!name) {
        // 400 - Bad Request
        return res.status(400).json({ error: 'Name is required' })
    }

    try {
        const insert = db.prepare('INSERT INTO users (name) VALUES (?)')
        insert.run(name)
        // 201 - Created
        res.status(201).json({
            message: 'User created successfully meow!',
            name,
        })
    } catch (error) {
        // 500 - Internal Server Error
        res.status(500).json({ error: error.message })
    }
}
