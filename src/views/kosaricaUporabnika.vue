<template>
    <h1>Zgodovina kosarice</h1>
  <div
      v-for="items in prikazano" :key="items"><br>{{items.narocilo}}{{items.name}} {{items.price}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      prikazano: JSON.parse(localStorage.getItem("uporabnikZgodovina")),
    }
  }
}
</script>

<style scoped>
h1, div {
  text-align: center;
  color:whitesmoke;
}
</style>