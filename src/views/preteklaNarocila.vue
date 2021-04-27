<template>
  <h1>Pretekla Naročila</h1>
  <div class="seznam" v-for="items in precisceno" :key="items">
    <ul class="narocilo">{{items.username}} {{items.narocilo}} {{items.prikazanId}}
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
      precisceno: JSON.parse(localStorage.getItem('zgodovinaKosarice')),
      stevilkaNarocila: [],
      preteklaNarocila: [],
    }
  },
  methods: {
    preciscenaKosaricaUporabnika() {
      for (let i = 0; i <= this.prikazano.length - 1; i++) {
        if (this.prikazano[i].username === this.vpisanUporabnik.username) {
          this.stevilkaNarocila.push(this.prikazano[i].id)
        }
      }

      for(let y = 0; y <= this.stevilkaNarocila.length - 1; y++) {
        for (let i = 0; i <= this.prikazano.length - 1; i++) {
          if (this.prikazano[i].id == this.stevilkaNarocila[y]) {
            this.preteklaNarocila.push(this.prikazano[i])
          }
        }
      }
      let preciscenoNarocilo = this.preteklaNarocila.filter(function (el) {
        return el != null;
      });
      console.log(preciscenoNarocilo)
      localStorage.setItem('zgodovinaKosarice', JSON.stringify(preciscenoNarocilo));
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

