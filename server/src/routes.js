module.exports= (app,moongose) => {
    //Requests
//TRansaction between 2 address
app.post('/Transaction',(req,res) => {
    multichain.sendAssetFrom({
        from: req.body.fromAddress,
        to: req.body.toAddress,
        asset: 'Udo',
        comment: req.body.comment,
        qty : req.body.qty
    }, (err,txid)=> {
        res.send(txid)
    })
})
// get transactions from an Address
app.post('/AdresssTransactions', (req,res) =>{
    multichain.listAddressTransactions({
        address: req.body.address,
        skip: 0
        }, (err,list) => {
            res.send(list)
        })
    })
// get balance from an Address
app.post('/AddressBalance', (req,res)=>{
    multichain.getAddressBalances({
        address: req.body.address,
        miconf: 0
    }, (err,bal)=>{
        if(err){
            console.log(err)
        }
            res.send(bal)
    })
})
}