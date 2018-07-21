<template>
<div class="container fluid">
  <div class="col-md-8 offset-md-2 text-center">
    <div class="col-md-10 offset-md-1 text-center">
      <img class="logo" src="../assets/images/udocoinlogo.png">
      <h1 class="txt shadow-orange offset-md-1 col-md-pull-1">BIENVENIDO A <br><span class="pago shadow-dark">UDOCoin Payment System</span></h1><br><br>
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
        <div class="">
          <button @click="navigateTo({name : 'Login'})" class="btn btn-info">login</button>
          <button @click="navigateTo({name : 'register'})" class="btn btn-info">registro</button>
        </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to UDOCoin Payment System'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style  scoped>
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
  width: 200px;
}
</style>
