<template>
    <div class="card">
      <h3 class="imeIgre">{{ igra.imeIgre }}</h3>
      <img v-bind:src="igra.slika" alt="none">
      <h5 class="cena">Cena: €{{ igra.cena.toFixed(2) }}</h5>
      <p class="opis">Opis igre: {{ opis }}</p>
      <p class="tip">Tip igre: {{ igra.tip1 }} {{ igra.tip2 }} {{ igra.tip3 }}</p>
      <button class="vidiGumb" @click="$emit('igre', igra)">Oglej</button>
    </div>
</template>

<script>
export default {
  props: ['igra'],
  computed: {
    opis(){
      return this.igra.opis.substring(0, 150)
    }
  }
}

</script>

<style lang="scss">
.imeIgre {
  color: #111111;
}

.vidiIgro{
  padding: 10px;
  background-color: lightgreen;
  color: #111111;
  border: none;
}

.card{
  background-color: white;
  box-shadow: 0 0 5px gray;
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;

  h5.cena{
    color: gray;
  }

  p.opis{
    font-size: .85rem;
  }

  p.tip{
    color: gray;
  }
}

button.vidiGumb{
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card{
    width: 350px;
    margin: 10px;
  }
}
</style>