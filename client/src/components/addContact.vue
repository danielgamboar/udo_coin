<template>
    <b-container>
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
                            label="Nombre:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="name">
                            <b-form-input size="sm" id="name"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Apellido:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="lastName">
                            <b-form-input size="sm" id="lastName"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Correo:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="email">
                            <b-form-input size="sm" id="email" type="email"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Cedula:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="id">
                            <b-form-input size="sm" id="id"></b-form-input>
                        </b-form-group>
                        <b-form-group horizontal
                            label="Direccion:"
                            class="txt col-sm-9"
                            label-class="text-sm-left"
                            label-for="address">
                            <b-form-input size="sm" id="address"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button class="txt" variant="primary">
                                Registrar
                            </b-button>
                        </b-form-group>
                </b-form-group>
        </b-card>
    </b-container>
</template>
<script>
export default {}
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
