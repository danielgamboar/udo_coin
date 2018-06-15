import Api from '@/services/Api'

export default {
  getAddressbalance (params) {
    return Api().post('AddressBalance', params)
  },
  getAddresstransactions (params) {
    return Api().post('AdresssTransactions', params)
  },
  Transaction (params) {
    return Api().post('Transaction', params)
  }
}
