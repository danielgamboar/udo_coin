<template>
<b-container>
    <b-card-group deck>
        <b-card header="<b>Lista de Transacciones.</b>"
                class="txtWhite border"
                header-bg-variant="primary">
                <!-- aqui se puede agregar el for para las transacciones -->
            <div v-for="(transaction,index) in transactions" :key="index" v-if="transaction.balance.assets.length > 0">
                <b-card class="txtBlack border">
                    <p class="grayBackground  txtWhite size">Transacción {{index}}</p>
                    <b-row>
                        <b-col class=" ">
                            ID de Transacción: {{transaction.txid}}
                        </b-col>
                        <b-col class=" ">
                            Concepto: {{transaction.comment}}
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="">
                            Monto: {{transaction.balance.assets[0].qty}} UDOCoin
                        </b-col>
                        <b-col class="">
                            De: {{transaction.to}}
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-card>
    </b-card-group>
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
    margin-right: 25%;
    margin-left: 25%;
}
.grayBackground{
    background-color: #5c636e;
}
.container{
    padding-top: 6em;
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
</style>
