<template>
    <b-container>
        <p>{{message}}</p>
        <b-card-group deck>
            <!-- Lista de contactos -->
            <!-- Formulario de envio -->
            <b-card header="<b>Informacion para envio de UDOCoin.</b>"
                    border-variant="dark"
                    header-bg-variant="primary">
                <b-list-group>
                    <b-list-group>
                        <b-list-group-item>
                                <b-input class="txt" v-model="cedula" placeholder="cedula"></b-input>
                                <label class="" for="monto"></label>
                                <b-input v-model="comment" id="concepto" placeholder="Concepto" />
                                <label class="" for="monto"></label>
                                <b-input id="monto" v-model="qty" class="txt" placeholder="00.00" />
                                <b-button class="marginleft" @click="sendTransaction" variant="info">Send</b-button>
                        </b-list-group-item>
                    </b-list-group>
                </b-list-group>
            </b-card>
        </b-card-group>
    </b-container>
</template>
<script>
import BlockChaincontroller from '@/services/BlockChainServices'
export default {
  data () {
    return {
      qty: null,
      comment: null,
      cedula: this.$route.params.cedula,
      message: null
    }
  },
  mounted: function () {
    if (!this.$store.state.isUsserloggedIn) {
      this.$router.push({
        name: 'Index'
      })
    }
  },
  methods: {
    async sendTransaction () {
      try {
        const response = await BlockChaincontroller.Transaction({
          from: this.$store.state.user.Address,
          cedula: this.cedula,
          qty: this.qty,
          comment: this.comment
        })
        if (response.data.code > 0) {
          this.message = 'transferencia exitosa txid: ' + response.data.message
          this.$root.$emit('paymentSent', this.qty)
        } else {
          console.log(response.data)
        }
      } catch (err) {
        this.message = err.response.data.message
      }
    }
  }
}
</script>
<style>
.container{
    padding-top: 3em;
    text-align: center;
}
.btn-group > .btn:first-child {
    margin-right: 0;
    margin-left: 0;
}
.bg-primary {
    background-color: #5c636e !important;
}
b{
    color: #fff;
    font-family: 'Ubuntu';
}
.btn-success {
    font-family: 'Ubuntu';
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    margin-left: 0;
}
.btn-info:hover {
  color: #fff;
  background-color: #df6203;
  border-color: #df6203;
  margin-left: 0;
}
.txt{
    font-family: 'Ubuntu';
    color: #393e46;
}
</style>
