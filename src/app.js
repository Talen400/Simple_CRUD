const express = require('express')
const app = express()
const port = 3000

const routers = require('./routes')
app.use(express.json())

app.use('/', routers)

app.listen(port, () => {
    console.log('Server Connected meow!')
})
