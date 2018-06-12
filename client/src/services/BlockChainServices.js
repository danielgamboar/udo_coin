import Api from '@/services/Api'

export default {
  getAddresstbalance (params) {
    return Api().post('AddressBalance', params)
  }
}
