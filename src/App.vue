<template>
  <glavna-navigacija></glavna-navigacija>
  <router-view></router-view>
</template>

<script>
import navigacija from '@/components/navigacija.vue'

export default {
  name: 'App',
  components: {
    'glavna-navigacija': navigacija
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>