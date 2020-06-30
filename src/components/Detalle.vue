<template>
  <div class="detalle" id="pp">
    <span>{{ name }}</span>
    <hr />
    <Buleano name="activado" v-bind:parent="name"/>
    <hr />
    <Rango v-bind:obj="obj.opacidad" name="opacidad"/>
    <hr />
    <Rango v-bind:obj="obj.grosor" name="grosor"/>
  </div>
</template>

<script>
import Buleano from './Buleano.vue'
import Rango from './Rango.vue'
export default {
  name: 'Detalle',
    data () {
      return {
        bul: Buleano.valor,
        range: 0
      }
    },
    components: {
    Rango,
    Buleano
},
  props: {
    obj: Object,
    name: String
  }
}
</script>
<style>
span{
font-weight: bold;
}
</style>