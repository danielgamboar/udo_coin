const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

let multichain = require("multichain-node")({
    port: 6462,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "81ihZ9VLUdHKmz4iEdMnhyDMXFYUs1pdNwkpStbZzs1K"
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// TEST
app.get('/Wallet', (req, res) => {

    multichain.getInfo((err, info) => {
        if(err){
            throw err;
        }
        console.log(info)
        res.send([info])
    })

  })
  
app.listen(process.env.PORT || 8081)
