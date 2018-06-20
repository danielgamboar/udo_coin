module.exports={
    port: process.env.PORT || 8081,
    Blockchain: {
        port: 6748,
        host: 'localhost',
        user: "multichainrpc",
        pass: "BduSFdwEiRZjryLXaVJ54navNuHqkFPQ9sUZ9vBBjNZF"
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}