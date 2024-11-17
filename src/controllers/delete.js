const db = require('../db/database')

module.exports = (req, res) => {
    const id = req.body.id

    if (!id) {
        // 400 - Bad Request
        return res.status(400).json({ error: 'Id is required' })
    }

    try {
        const deleteUser = db.prepare('DELETE FROM users WHERE id = ?')
        deleteUser.run(req.body.id)

        if (!deleteUser) {
            // 404 - Not Found
            return res.status(404).json({ error: 'User not found!' })
        };

        // 200 - ok
        res.status(200).json({ message: 'Deleted, meow!' });

    } catch (error) {
        // 500 - Internal Server Error
        res.status(500).json({ error: error.message })
    }
}
