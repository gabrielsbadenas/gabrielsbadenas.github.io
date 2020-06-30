<template>
  <div class="color" id="pp">
    <span>{{ name }}</span>
    <br/>
    <select id="color" v-model="selected">
      <option v-bind:key="n.nombre" v-for="n in obj.lista" v-bind:value="n.nombre">{{ n.nombre }}</option>
    </select></div>
</template>

<script>
export default {
  name: 'Color',
    data () {
    return {
      selected: ''
    }
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