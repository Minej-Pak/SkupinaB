<template>
  <div>
    <h1>Kosarica</h1>
    <opisIgre v-for="product in igra" :key="product.id" :product="product"/>
    <skupajCena/>
  </div>
</template>

<script>
import opisIgre from '@/components/cartItemCard.vue'
import skupajCena from '@/components/cartSkupek.vue'

export default {
  components:{
    opisIgre, skupajCena
  },
  computed: {
    igra(){
      return this.$store.getters.vKosarici
    }
  }
}
</script>

