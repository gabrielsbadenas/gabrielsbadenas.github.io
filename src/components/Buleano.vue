<template>
    <div class="buleano" id="pp">
    <p>{{ name }}</p>
    <form>
    <input type="radio" v-model="valor" v-bind:id="parent+name+'si'" name="buleano" value="true">
        <label for="true">
            Si
        </label>
    <input type="radio" v-model="valor" v-bind:id="parent+name+'no'" name="buleano" value="false">
        <label for="false">
            No
        </label>
    </form>
    </div>
</template>

<script>
export default {
  name: 'Buleano',
    data () {
    return {
      valor: false
    }
  },
  props: {
    name: String,
    parent: {
        default: '',
        type: String
    }
  }
}
</script>
<style>
p{
font-weight: bold;
}
</style>
