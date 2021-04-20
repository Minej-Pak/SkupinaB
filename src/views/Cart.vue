<template>
<div>
<h1>Your cart</h1>

  <CartItemCard
    v-for="product in products"
    :key="product.id"
    :product="product" />
<CartSummaryPaymentCard/>
</div>
</template>

<script>
import CartItemCard from "@/components/cart/CartItemCard.vue"
import CartSummaryPaymentCard from "@/components/cart/CartSummaryPaymentCard.vue";

export default {
  components:{
    CartSummaryPaymentCard, CartItemCard
    },
    computed:{
      products() {
        return this.$store.getters.cartItems
    }
  }
}
</script>

<style>
  h1 {
    text-align: center;
    color:whitesmoke;
  }
</style>