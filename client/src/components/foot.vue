<template>
        <div class="bg-info  text-center aling-bottom-text" id="footer">
            <p class="txt"><b> Universidad de Oriente </b></p>
            <p id="title" class="text-white">UDOCoin <span id="pago">Payment System</span></p>
            <p class="txt">Daniel Rojas y Raul Cordoba-2018</p>
        </div>
</template>
<script>
export default {
  name: 'foot'
}
</script>
<style scoped>
p {
    margin-top: 0;
    margin-bottom: 0;
}
.txt{
  font-family: 'Ubuntu' !important;
  font-weight: 1.5em;
  color: #fdb44b;
}
#title{
  font-family: 'Ubuntu';
}
#pago{
  color: #f96d00;
  font-family: 'Pacifico'
}
.bg-info {
  margin-top: 5.75em;
  background-color: #393e46 !important;
  width: auto;
}
</style>
