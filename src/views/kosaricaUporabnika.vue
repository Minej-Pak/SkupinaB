<template>
    <h1>Zgodovina kosarice</h1>
  <div v-for="items in prikazano" :key="items">{{items.username}}{{items.name}}</div>
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

<style>
h1 {
  text-align: center;
  color:whitesmoke;
}
</style>