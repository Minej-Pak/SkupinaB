<template>
    <h1>Zgodovina kosarice</h1>
  <input type="text" v-model="id" placeholder="Vnesi id naročila">
  <button type="submit" @click="handleButton">Izbriši naročilo</button>
     <ul v-if="prikazano.username = vpisanUporabnik.username">
       <li v-for="items in prikazano" :key="items">{{items.narocilo}} {{items.prikazanId}} {{items.username}}<br>{{items.name}} {{items.price}}</li>
     </ul>
</template>

<script>
export default {
  data() {
    return {
      vpisanUporabnik: JSON.parse(localStorage.getItem('vpisanUporabnik')),
      prikazano: JSON.parse(localStorage.getItem('uporabnikZgodovina')),
      id: ''
    }
  },
  methods: {
    handleButton() {
      const id = this.id
      for (let i = 0; i <= this.prikazano.length - 1; i++) {
          for (let y = 0; y <= this.prikazano.length - 1; y++) {
            if (this.prikazano[i].id == id) {
            this.prikazano.splice(i, y);
            // localStorage.setItem('data', JSON.stringify(this.prikazano));
            console.log(this.prikazano)
          }
        }
      }
    }
  }
}
</script>

<style scoped>
h1, div {
  text-align: center;
  color:whitesmoke;
}
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  text-align: center;
}
input[type=text]  {
  margin-left: 43%;
  margin-bottom: 20px;
}
button {
  width: auto;
  background-color: #e85454;
  border-radius: 10px;
  margin-left: 10px;
}

button:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #C4464b;
}
</style>

