<template>
  <div class="linea" id="pp">
    <span>{{ name }}</span>
    <hr />
    <Rango v-bind:obj="obj.opacidad" name="opacidad"/>
    <hr />
    <Rango v-bind:obj="obj.longitud" name="longitud"/>
    <hr />
    <Rango v-bind:obj="obj.grosor" name="grosor"/>
    <hr />
    <Rango v-bind:obj="obj.inclinacion" name="inclinacion"/>
    <hr />
    <Buleano name="error de movimiento" v-bind:parent="name"/>
    <hr />
    <Buleano name="error de disparo" v-bind:parent="name"/>
  </div>
</template>

<script>
import Buleano from './Buleano.vue'
import Rango from './Rango.vue'
export default {
  name: 'Detalle',
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