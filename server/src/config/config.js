module.exports={
    port: process.env.PORT || 8081,
    Blockchain: {
        port: 2898,
        host: 'localhost',
        user: "multichainrpc",
        pass: "B6vU3V1kGL1UvdjLHvDNnBDZ2qWHvgQeXNy6ohFZHfz1"

    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}