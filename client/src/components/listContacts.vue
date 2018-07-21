<template>
<b-container>
    <b-card header="<b>Lista de contactos.</b>"
                    border-variant="dark"
                    header-bg-variant="primary">
                <b-list-group
                    border-variant="dark" v-for="contact in listcontacts" :key="contact._id">
                    <b-list-group-item>
                        <p class="txt">
                            Cédula: {{contact.cedulaContact}} Alias: {{contact.alias}}
                        </p>
                        <b-button-group size="sm">
                            <b-button v-bind:to="{name: 'sendMoney', params: { cedula: contact.cedulaContact }}"  variant="info" class="text">
                                Seleccionar
                            </b-button>
                            <b-button @click="deleteContact(contact._id)" variant="danger" class="text">
                                Eliminar
                            </b-button>
                        </b-button-group>
                    </b-list-group-item>
                </b-list-group>
                <!-- <p class="card-text mt-1 txt">
                    Algun mensaje que queramos colocar. Lo podemos borrar.
                </p> -->
            </b-card>
</b-container>
</template>

<script>
import contactService from '@/services/ContactService'
export default {
  data () {
    return {
      listcontacts: null
    }
  },
  mounted () {
    if (!this.$store.state.isUsserloggedIn) {
      this.$router.push({
        name: 'Index'
      })
    } else {
      this.listContacts()
    }
  },
  methods: {
    async listContacts () {
      try {
        const response = await contactService.listContacts({
          cedulaUser: this.$store.state.user.cedula
        })
        this.listcontacts = response.data
      } catch (err) {
        console.log(err.error)
      }
    },
    async deleteContact (id) {
      await contactService.delete(id)
      this.listContacts()
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
.btn-info {
  color: #fff;
  background-color: #f96d00;
  border-color: #f96d00;
  margin-left: 0;
}
.btn-info:hover {
  color: #fff;
  background-color: #df6203;
  border-color: #f96d00;
  margin-left: 0;
}
.txt{
    font-family: 'Ubuntu';
    color: #393e46;
}
</style>
