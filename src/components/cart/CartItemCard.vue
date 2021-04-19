<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost }}</h4>
    </div>
      <p>{{ description }}</p>
    <div><button class="remove" @click="removeFromCart()">Remove</button></div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description () {
      return this.product.description.substring(0, 120)
    },
    item_cost(){
      return this.product.price * this.product.quantity
    }
  },
  methods:{
    removeFromCart(){
      this.$store.commit('removeFromCart', this.product)
    }
  }
}
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-around;
  }

  button.remove{
    padding: 10px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
  }
}

</style>