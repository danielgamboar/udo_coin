<template>
    <div>hola {{ Wallet }}</div>
</template>
<script>
import Blockchain from '@/services/BlockChainServices'
export default {
  data () {
    return {
      Wallet: {}
    }
  },
  mounted () {
    this.getWallet()
  },
  methods: {
    async getWallet () {
      const response = await Blockchain.fetchWallet()
      console.log(response)
      this.Wallet = response.data
    }
  }
}
</script>

<style>
</style>
