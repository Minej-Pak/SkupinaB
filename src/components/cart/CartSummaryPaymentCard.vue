<template>
  <div class="cart-item-card">
    <h3>Cart Total: €{{cart_total}}</h3>
    <button @click="dodajKosarico" class="view-product-button">Pay by credit card</button>
  </div>
</template>

<script>
  export default {
    computed: {
      cart_total() {
        return this.$store.getters.cartTotal
      }
    },
    methods: {
      dodajKosarico() {
        let trenutnaKosarica = localStorage.getItem("cart");
        let uporabnik = JSON.parse(localStorage.getItem('data'));
        let vpisanUporabnik = JSON.parse(localStorage.getItem('vpisanUporabnik'));
        for (let y = 0; y <= uporabnik.length; y++) {
          for (let i = -1; i <= uporabnik.length; i++) {
            if (uporabnik[y].username == vpisanUporabnik.username && trenutnaKosarica.length != 2) {
              uporabnik[y].vsaNaročila.push(trenutnaKosarica)
              localStorage.setItem("data", JSON.stringify(uporabnik))
              return true;
            } else {
              console.log("Uporabnik ni najden ali je košarica prazna.")
              return true;
            }
          }
        }
      },
    }
  }
</script>