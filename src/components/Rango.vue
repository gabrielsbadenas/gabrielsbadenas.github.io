<template>
  <div class="rango" id="pp">
    <span>{{ name }}</span>
    <input type="number" id="num" v-model.number="obj.valor" v-bind:step="obj.salto" v-bind:min="obj.minimo" v-bind:max="obj.maximo"/>
  </div>
</template>

<script>
export default {
  name: 'Rango',
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