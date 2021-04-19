<template>
  <div class="vKosarici">
    <h3>Skupna cena: € {{ igraSkupaj.toFixed(2)  }}</h3>
    <button class="vidiGumb">Placaj z kartico</button>
  </div>
</template>

<script>
  export default {
    computed: {
      igraSkupaj(){
        return this.$store.getters.skupnaCena
      }
    }
  }
</script>