import Api from '@/services/Api'

export default {
  fetchWallet () {
    return Api().get('Wallet')
  }
}
