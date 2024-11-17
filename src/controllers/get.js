const db = require('../db/database')

module.exports = (req, res) => {
    try {
        const getUser = db.prepare('SELECT * FROM users WHERE id = ?')
        const user = getUser.get(req.body.id)

        if (!user) {
            // 404 - Not Found
            return res.status(404).json({ error: 'User not found!' })
        }

        // 200 - OK
        res.status(200).json({ message: 'User found, meow!', user: user })
    } catch (error) {
        // 500 - Internal Server Error
        res.status(500).json({ error: error.message })
    }
}
