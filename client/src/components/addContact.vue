<template>
    <b-container>
        <p color="red">{{error}}</p>
        <b-card header="<b>Rellene el formulario para agregar un nuevo contacto.</b>"
                border-variant="dark"
                header-bg-variant="primary"
                class="size">
                <b-form-group horizontal
                    breakpoint="lg"
                    label="Informacion del contacto"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="grayTxt">
                        <b-form-group horizontal
                            label="Cedula:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="id">
                            <b-form-input size="sm" v-model="cedulaContact"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="alias:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="id">
                            <b-form-input size="sm" v-model="alias"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button class="txt" @click="regcontact">
                                Registrar
                            </b-button>
                        </b-form-group>
                </b-form-group>
        </b-card>
    </b-container>
</template>
<script>
import contactService from '@/services/ContactService'
export default {
  data () {
    return {
      name: null,
      lastname: null,
      cedulaContact: null,
      alias: null,
      error: null
    }
  },
  methods: {
    async regcontact () {
      try {
        const response = await contactService.regContact({
          cedulaUser: this.$store.state.user.cedula,
          cedulaContact: this.cedulaContact,
          alias: this.alias
        })
        this.error = response.data.message
      } catch (err) {
        this.error = err.response.data.message
      }
    }
  }
}
</script>
<style>
.size{
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}
.grayTxt{
    color: #393e46;
}
.form-control{
    border: 1px solid #5c636e;
}
.btn-primary {
    color: #fff !important;
    background-color: #f96d00;
    border-color: #f96d00;
    float: left !important;
    margin-left: 53%;
}
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
