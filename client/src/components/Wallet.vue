<template>
  <div class="posts">
      <input v-model="address" placeholder="add address">
      <p>{{address}}</p>
      <b-button variant="success" @click="getBalance">prueba</b-button>
      <p>{{Wallet}}</p>
    </div>
</template>

<script>
import Blockchain from '@/services/BlockChainServices'
export default {
  name: 'Wallet',
  data () {
    return {
      Wallet: {},
      address: ''
    }
  },
  mounted () {

  },
  methods: {
    async getBalance () {
      const address = this.address
      const response = await Blockchain.getAddresstbalance({address})
      console.log(response)
      this.Wallet = response.data
    }
  }
}
</script>
