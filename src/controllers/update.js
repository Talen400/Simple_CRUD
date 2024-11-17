const db = require('../db/database')

module.exports = (req, res) => {
    try {
        const updateUserId = db.prepare(
            'UPDATE users SET name = ? WHERE id = ?'
        )

        updateUserId.run(req.body.name, req.body.id)

        if (!updateUserId) {
            // 404 - Not Found
            return res.status(404).json({ error: 'User not found!' })
        }
        // 200 - OK
        res.status(200).json({ message: 'Updated, meow!', update: req.body })
    } catch (error) {
        // 500 - Internal Server Error
        res.status(500).json({ error: error.message })
    }
}
