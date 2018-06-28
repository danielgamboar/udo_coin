import Api from '@/services/Api'

export default {
  regContact (params) {
    return Api().post('regContact', params)
  },
  listContacts (params) {
    return Api().post('listContacts', params)
  },
  delete (id) {
    return Api().delete('contacts/' + id)
  }
}
