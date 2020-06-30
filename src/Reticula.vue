<template>
  <div id="Reticula">
    <table>
      <tr>
        <td>
          <tr class="a"><Color id="color" v-bind:obj="q.color" name="Color de la reticula"/></tr>
          <tr class="a"><Buleano name="atenuar reticula por error de disparo" id="atenuar"/></tr>
        </td>
        <td><Detalle v-bind:obj="q.contorno" name="Contorno" id="Contorno"/></td>
        <td><Detalle v-bind:obj="q.punto" name="Punto" id="Punto"/></td>
      </tr>
      <tr>
        <td><Buleano name="mostrar reticula de jugador observado" id="espectador"/></td>
        <td><Linea v-bind:obj="q.interior" name="Lineas interiores" id="Interior"/></td>
        <td><Linea v-bind:obj="q.exterior" name="Lineas exteriores" id="Exterior"/></td>
      </tr>
  </table>  
  </div>
</template>

<script>
import Buleano from './components/Buleano.vue'
import Color from './components/Color.vue'
import Detalle from './components/Detalle.vue'
import Linea from './components/Linea.vue'
import j from './json.js'
export default {
  name: 'Reticula',
  components: {
    Color,
    Detalle,
    Buleano,
    Linea
  },
  data: function() {
    return {
      q: j.v
    }
  }
}
</script>
<style>
  tr,td{
    border: 1px;
    margin: 1px;
    border-style:solid;
  }
  #color,#atenuar{
    border: 1px;
    margin: 1px;
    border-style:solid;
  }
  #j{border-style: solid;text-align: center;width:50%;  margin-left: auto;margin-right: auto;margin-top: 2px;}

  table{
    background-color: #d6daf0;
    border: 1px solid #b7c5d9;
  }
</style>