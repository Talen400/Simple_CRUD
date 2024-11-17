const express = require('express')
const router = express.Router()
const api = require('./api')

router.use('/api', api)

router.get('/', (req, res) => {
    res.send('Routers read meow!')
})

module.exports = router
