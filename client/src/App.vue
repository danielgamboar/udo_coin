<template>
 <div class="mainstreat">
   <div class="contenido">
    <navigation></navigation>
    <router-view/>
    <foot></foot>
   </div>
 </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import foot from '@/components/foot.vue'
export default {
  name: 'App',
  components: {navigation, foot}
}
</script>
<style scoped>
body{
  font-family: 'Ubuntu' !important;
}
@font-face{
    font-family: 'Ubuntu';
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-Italic.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-Light.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-Medium.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf');
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Ubuntu/Ubuntu-Regular.ttf');
  }
  @font-face{
    font-family:  'Pacifico';
    src: url('/home/danielgamboar/Documentos/Tesis/udo_coin/client/src/assets/fonts/Pacifico/Pacifico-Regular.ttf');
  }
  .mainstreat{
  }
</style>
