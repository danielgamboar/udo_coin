<template>
    <b-container>
        <b-card header="<b>Rellene el formulario para agregar un nuevo contacto.</b>"
                border-variant="dark"
                header-bg-variant="primary">
            <b-form inline>
                <label class="" for="Nom"></label>
                <b-input class="txt" id="concepto" placeholder="Concepto" />
                <label class="" for="monto"></label>
                <b-input id="monto" class="txt" placeholder="00.00" />
                <b-button class="marginleft" type="submit" size="sm" variant="success">Send</b-button>
            </b-form>
        </b-card>
    </b-container>
</template>
<script>
export default {}
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
