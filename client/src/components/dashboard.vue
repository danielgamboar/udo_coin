<template>
<b-container>
    <div class="text-center">
        <h1>TRANSACCIONES</h1>
    </div>
    <div class="container">
            <table class="table table-striped table-sm">
                <thead class="thead-dark">
                    <th scope="col"><b>#</b></th>
                    <th scope="col" class="text-center">txid</th>
                    <th scope="col">comentario</th>
                    <th scope="col">destinatario/receptor</th>
                    <th scope="col">cantidad</th>
                </thead>
                <tbody>
                        <tr v-for="(transaction,index) in transactions" :key="index" v-if="transaction.balance.assets.length > 0">
                            <th scope="row">{{index+1}}</th>
                            <th >just</th>
                            <th >{{transaction.comment}}</th>
                            <th >{{transaction.to}}</th>
                            <th >{{transaction.balance.assets[0].qty}}</th>
                        </tr>
                </tbody>
            </table>
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
    this.listTransactions()
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
th{
  color:#f96d00;
}
</style>
