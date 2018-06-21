<template>
<b-container>
    <b-card
        title="Transaction info"
        subtitle="adress here">
        <!-- Tambien podriamos colocar un p para la direccion de la wallet que se esta consultando -->
        <b-row>
            <b-col class="border">
                id transaction
            </b-col>
            <b-col class="border">
                concept
            </b-col>
        </b-row>
        <b-row>
            <b-col class="border">
                amount
            </b-col>
            <b-col class="border">
                from/to who
            </b-col>
        </b-row>
    </b-card>
</b-container>
</template>
<script>
export default {
}
</script>
<style scoped>
.container{
    padding-top: 6em;
    text-align: center;
}
.border{
    border: 1px solid #5c636e !important;
}
.card{
    position: relative;
    margin: 2.5em auto;
    padding: 20px 40px 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #5c636e;
}
h4{
  font-family: 'Ubuntu';
  color: #5c636e;
}
</style>
