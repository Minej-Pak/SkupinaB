<template>
  <glavna-navigacija></glavna-navigacija>
  <router-view></router-view>
</template>

<script>
import navigacija from '@/components/navigacija.vue'

export default {
  // mounted() {
  //   this.$store.commit('updateKosaricaFromLocalStorage')
  // },
  name: 'App',
  components: {
    'glavna-navigacija': navigacija
  }
}
</script>
