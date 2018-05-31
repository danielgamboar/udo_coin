<template>
  <div class="posts">
      <p>
        <span><b>{{ Wall }}</b></span><br />
      </p>
    </div>
</template>

<script>
import Blockchain from '@/services/BlockChainServices'
export default {
  name: 'Wallet',
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
