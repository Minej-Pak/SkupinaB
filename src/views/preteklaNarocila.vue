<template>
  <h1>Pretekla Naročila</h1>
  <div class="card" v-for="items in precisceno" :key="items">
    <ul class="narocilo">{{items.username}} {{items.narocilo}} {{items.prikazanId}}
      <li>{{items.name}} {{items.quantity}}x {{items.price}}€</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      precisceno: JSON.parse(localStorage.getItem('zgodovinaKosarice')),
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color:whitesmoke;
}
ul, li {
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  text-align: center;
  list-style-type: none;
  color: black;
}
.narocilo{
  font-size: 25px;
  color:red;
}

.card {
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  width: 300px;
  margin-left: 41%;
}

</style>

