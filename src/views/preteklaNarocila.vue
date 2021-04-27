<template>
  <h1>Pretekla Naročila</h1>
  <div class="seznam" v-for="items in prikazano" :key="items">
    <ul v-if="items.username === vpisanUporabnik.username" class="narocilo">{{items.username}} {{items.narocilo}} {{items.prikazanId}}
      <li>{{items.name}} {{items.price}} {{items.quantity}}</li><br>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vpisanUporabnik: JSON.parse(localStorage.getItem('vpisanUporabnik')),
      prikazano: JSON.parse(localStorage.getItem('uporabnikZgodovina')),
    }
  },
}
</script>

<style scoped>
h1, div {
  text-align: center;
  color:whitesmoke;
}
ul {
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  text-align: center;
  list-style-type: circle;
}
.narocilo{
  font-size: 25px;
  color:red;
}

</style>

