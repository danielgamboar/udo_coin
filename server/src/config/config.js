module.exports={
    port: process.env.PORT || 8081,
    Blockchain: {
        port: 6462,
        host: 'localhost',
        user: "multichainrpc",
        pass: "81ihZ9VLUdHKmz4iEdMnhyDMXFYUs1pdNwkpStbZzs1K"
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}