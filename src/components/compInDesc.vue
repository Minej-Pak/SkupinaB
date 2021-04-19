<template>
  <div class="opisOdzadje" :class="{show: active}" @click="$emit('zapri')"/>
  <div class="opis" :class="{show: active}">
    <div class="zapriOpis" @click="$emit('zapri')">
      X
    </div>
    <div v-if="igra" class="opisDetail">
      <h3 class="text-center">{{ igra.imeIgre }}</h3>
      <p class="opisIgre">{{ igra.opis }}</p>
      <h3 class="text-center">{{ igra.cena.toFixed(2) }}</h3>

      <div class="skupek" v-if="igraSkupek">
        <h3>Skupek</h3>
        <h4>{{ igraSkupek }}</h4>
      </div>

      <div class="gumb">
        <button class="odstrani" @click="removeFromCart()">Odstrani</button>
        <button class="dodaj" @click="addToCart()">Dodaj</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['igra', 'active'],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.igra)
    },
    removeFromCart(){
      this.$store.commit('removeFromCart', this.igra)
    }
  },
  computed: {
    igraSkupek() {
      return this.$store.getters.productQuantity(this.igra)
    }
  }
}
</script>

<style lang="scss">
.opisOdzadje{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display .5s;

  &.show{
    display: block;
  }
}

.opis{
  width: 95vh;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vh;
  padding: 15px;
  transition: left;
  z-index: 101;
  overflow-y: scroll;

  &.show{
    left: 0;
  }
}

.zapriOpis{
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;

  &.hover{
    background-color: lightgray;
  }
}

.opisIgre{
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description{
    padding: 20px;
    line-height: 1.5rem;

  }

  .gumb{
    button{
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}

@media (min-width: 500px) {
  .opis{
    width: 450px;
  }
}
</style>