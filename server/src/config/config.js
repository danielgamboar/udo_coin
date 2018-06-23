module.exports={
    port: process.env.PORT || 8081,
    Blockchain: {
        port: 7422,
        host: 'localhost',
        user: "multichainrpc",
        pass: "FiBfjPfxDQRbjTwPRBWuqJc98pQTVR1CajTLaRxvmZM7"
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}