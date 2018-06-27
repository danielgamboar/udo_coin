<template>
<b-container>
    <b-card header="<b>Lista de contactos.</b>"
                    border-variant="dark"
                    header-bg-variant="primary">
                <b-list-group
                    border-variant="dark">
                    <b-list-group-item>
                        <p class="txt">
                            Contacto 1
                        </p>
                        <b-button-group size="sm">
                            <b-button variant="primary" class="text">
                                Seleccionar
                            </b-button>
                            <b-button variant="danger" class="text">
                                Eliminar
                            </b-button>
                        </b-button-group>
                    </b-list-group-item>
                </b-list-group>
                <p class="card-text mt-1 txt">
                    Algun mensaje que queramos colocar. Lo podemos borrar.
                </p>
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
    this.listContacts()
  },
  methods: {
    async listContacts () {
      try {
        const response = await contactService.listContacts({
          cedulaUser: this.$store.state.user.cedula
        })
        console.log(response)
      } catch (err) {
        console.log(err.error)
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
.txt{
    font-family: 'Ubuntu';
    color: #393e46;
}
</style>
