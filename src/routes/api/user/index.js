const express = require('express')
const router = express.Router()

const create = require('../../../controllers/create')
const get = require('../../../controllers/get')
const update = require('../../../controllers/update')
const deleted = require('../../../controllers/delete')

router.post('/', create)
router.get('/:id', get)
router.put('/:id', update)
router.delete('/:id', deleted)

router.get('/', (req, res) => {
    res.send('Users data!')
})

module.exports = router
