<template>
<b-container class="tab">
    <div class="text-center">
        <h1>Transacciones.</h1>
    </div>
    <div>
        <div class="card border-warning mb-3" v-for="(transaction,index) in transactions" :key="index" v-if="transaction.balance.assets.length > 0">
            <div class="card-header bg-dark text-white fluid">
               <h5 class="card-title border-warning tittle">Transacción #{{index+1}}</h5>
            </div>
            <div class="card-body cardBody border-warning text-left">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID Transacción: <b> {{transaction.txid}}</b></li>
                    <li class="list-group-item">Comentario: <b>{{transaction.comment}}</b></li>
                    <li class="list-group-item">De/A: <b>{{transaction.to}}</b></li>
                    <li class="list-group-item">Monto: <b>{{transaction.balance.assets[0].qty}}</b></li>
                </ul>
            </div>
        </div>
    </div>
</b-container>
</template>
<script>
import Blockchain from '@/services/BlockChainServices'
export default {
  name: 'dashboard',
  data () {
    return {
      transactions: null
    }
  },
  mounted () {
    if (!this.$store.state.isUsserloggedIn) {
      this.$router.push({
        name: 'Index'
      })
    } else {
      this.listTransactions()
    }
  },
  methods: {
    async listTransactions () {
      if (this.$store.state.isUsserloggedIn) {
        const response = await Blockchain.getAddresstransactions({
          address: this.$store.state.user.Address
        })
        this.transactions = response.data.slice().reverse()
      } else {
        this.$router.push({
          name: 'Login'
        })
      }
    }
  }
}
</script>
<style scoped>
b{
    color:#393e46;
}
.size{
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    width: 100%;
}
.grayBackground{
    background-color: #5c636e;
}
.container{
    text-align: center;
}
.border{
    border: 1px solid #fff !important;
}
.grayBorder{
    border: 1px solid #5c636e !important;
}
.txtWhite{
    color: #fff !important;
    font-family: 'Ubuntu';
}
.txtBlack{
    color: #5c636e !important;
    font-family: 'Ubuntu';
}
.bg-primary {
    background-color: #393e46 !important;
}
.border-warning{
    border-color: #393e46 !important;
}
.bg-dark {
    background-color: #5c636e !important;
}
.card{
    position: relative;
    margin: 2.5em auto;
    padding: 20px 40px 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #5c636e;
}
h4{
  font-family: 'Ubuntu';
  color: #5c636e;
}
.cardBody{
  color:#393e46;
}
.tab{
    width: 100;
}
.titlle{
    font-family: 'Ubuntu' !important;
    color: #fff !important;
}
</style>
