<template>
  <div class="vKosarici">
    <div class="glava">
      <h3>{{ igra.imeIgre }}</h3>
      <h4>Kolicina: {{ igra.quantity}}</h4>
      <h4>Skupaj: {{ igraSkupaj.toFixed(2) }}</h4>
    </div>
    <p> {{ opis }} </p>
  </div>
</template>

<script>
export default {
  props:['igra'],
  computed:{
    opis(){
      return this.igra.opis.substring(0, 120)
    },
    igraSkupaj(){
      return this.igra.cena * this.igra.quantity
    }
  }
}
</script>

<style lang="scss">
.vKosarici{
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .glava{
    display: flex;
    justify-content: space-around;
  }
}
</style>