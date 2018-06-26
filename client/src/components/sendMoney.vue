<template>
    <b-container>
        <b-card-group deck>
            <!-- Lista de contactos -->
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
                    <b-list-group-item>
                        <p class="txt">
                            Contacto 2
                        </p>
                    </b-list-group-item>
                    <b-list-group-item>
                        <p class="txt">
                            Contacto 3
                        </p>
                    </b-list-group-item>
                </b-list-group>
                <p class="card-text mt-1 txt">
                    Algun mensaje que queramos colocar. Lo podemos borrar.
                </p>
            </b-card>
            <!-- Formulario de envio -->
            <b-card header="<b>Informacion para envio de UDOCoin.</b>"
                    border-variant="dark"
                    header-bg-variant="primary">
                <b-list-group>
                    <b-list-group-item>
                        <p class="txt">
                            Contacto 1
                        </p>
                    </b-list-group-item>
                    <b-list-group>
                        <b-list-group-item>
                            <b-form inline>
                                <label class="" for="concepto"></label>
                                <b-input class="txt" id="concepto" placeholder="Concepto" />
                                <label class="" for="monto"></label>
                                <b-input id="monto" class="txt" placeholder="00.00" />
                                <b-button class="marginleft" type="submit" size="sm" variant="success">Send</b-button>
                            </b-form>
                        </b-list-group-item>
                    </b-list-group>
                </b-list-group>
            </b-card>
        </b-card-group>
    </b-container>
</template>
<script>
export default {
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
