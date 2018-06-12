<template>
        <div class="bg-info  text-center">
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
  font-family: 'Assistant';
  font-weight: 1.5em;
  color: #565656;
}
#title{
  font-family: 'Pacifico';
}
#pago{
  color: #76323f;
}
.bg-info {
  background-color: #c09f80 !important;
}
</style>
