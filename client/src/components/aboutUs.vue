<template>
<div class="container">
<div class="col-md-8 offset-md-2 text-center">
    <div class="col-md-10 offset-md-1 text-center">
      <h1 class="txt shadow-orange offset-md-1 col-md-pull-1"><span class="pago shadow-dark">UDOCoin Payment System</span></h1><br><br>
    </div>
    <p class="text-justify">  En años recientes Venezuela ha estado inmersa en una gran crisis
        económica con consecuencias significativas, dentro de las cuales se puede
        mencionar la ausencia de efectivo circulante en el país, como uno de los
        problemas más graves. Las largas colas para pagar a través de los puntos
        de venta de los comercios y, a su vez, en instituciones bancarias para
        obtener un mínimo de dinero en efectivo a utilizarse en gastos cotidianos, se
        han convertido en el día a día del venezolano. <br><br>
        Como solucion a esta problematica presentamos el sistema de pago <span class="pago shadow-dark">UDOCoin Payment System</span>
        con el fin de aprovechar tecnologias en tendencia como la cadena de bloques y ser
        de facil acceso a cualquier persona teniendo una interfaz sencilla e intituiva
        </p>
        <!-- UDOCOIN-->
        <img class="logo" src="../assets/images/udocoinlogo.png">
        <H1>Criptomoneda UDOCoin</H1>
        <p class="text-justify">El UDOCOIN es una propuesta a todos los sistemas tradicionales
            y centralizados de pago actuales en Venezuela, presentándose como
            una solución al problema que los mismos presentan con la economía
            actual y tomando ventaja de la madurez temprana del mundo de las
            criptomonedas y su idea de alternativa a sistemas económicos. Esta
            criptomoneda está diseñada para funcionar en el sistema de pago
            udocoin payment systems y servir al propósito del mismo que es la
            realización de pagos diarios a través de una cadena de bloques. </p>
            <button class="btn btn-info" @click="goTo('https://drive.google.com/file/d/1QmMKgwv-sksqcqi14Q5Z5CBz5H3jWGi6/view?usp=sharing')">WHITE PAPER UDOCOIN</button>
</div>
<div class="row">
    <div class="container text-center">
        <h1>Desarrolladores</h1>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="cardbody text-center">
                <h3>Daniel Gamboa</h3>
                <img class="profilepicture" src="../assets/images/daniel-picture.jpeg" alt="">
                <p>Cuasi-ing en Computacion <br>
                <p>Universidad de Oriente <br>
                <p>24 años de edad</p>
                <button class="btn btn-info" @click="goTo('https://github.com/danielgamboar')" >Github Profile</button>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="cardbody text-center">
                <h3>Raul Cordoba</h3>
                <img class="profilepicture" src="../assets/images/raul-picture.jpeg" alt="">
                <p>Cuasi-ing en Computacion <br>
                <p>Universidad de Oriente <br>
                <p>23 años de edad</p>
                <button class="btn btn-info" @click="goTo('https://github.com/reppito')" >Github Profile</button>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  methods: {
    goTo (url) {
      location.href = url
    }
  }
}
</script>

<style>
.profilepicture{
    width: 120px;
    border-radius: 100%;
    border-style: solid;
    color: #f96d00;
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
  border-color: #df6203;
  margin-left: 0;
}
p{
  font-family: 'Ubuntu';
  font-size: 400;
}
.shadow-dark{
  text-shadow: 1px 1px 2px #393e46;
}
.shadow-orange{
  text-shadow: 1px 1px 2px #f96d00;
}
.txt{
  font-family: 'Ubuntu';
  color: #5c636e;
}
.pago{
  color: #f96d00;
  font-family: 'Pacifico';
  text-align: center;
}
.logo{
  width: 300px;
}
</style>
