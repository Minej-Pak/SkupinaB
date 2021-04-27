<template>
    <h1>Zgodovina kosarice</h1>
  <input type="text" v-model="id" placeholder="Vnesi id naročila">
  <button type="submit" @click="handleButton">Izbriši naročilo</button>
     <ul>
       <li v-for="items in prikazano" :key="items">{{items.username}}{{items.narocilo}} {{items.prikazanId}}<br>{{items.name}}</li>
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
      let index;
      let kolikoIzbrisat = 0;
      const id = this.id
      for (let i = 0; i <= this.prikazano.length - 1; i++) {
          if (this.prikazano[i].id == id) {
            kolikoIzbrisat = kolikoIzbrisat+1;
        }
      }
      for (let i = 0; i <= this.prikazano.length - 1; i++) {
        if (this.prikazano[i].id == id) {
          index = i;
          break;
        }
      }
      this.prikazano.splice(index ,kolikoIzbrisat);
      //localStorage.setItem('uporabnikZgodovina', JSON.stringify(this.prikazano));
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

