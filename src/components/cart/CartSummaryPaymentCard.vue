<template>
  <div class="cart-item-card">
    <h3>Cart Total: €{{cart_total}}</h3>
    <button @click="dodajKosarico" class="view-product-button">Pay by credit card</button>
  </div>
</template>

<script>
function posodobiLocalStorage(vpisano){
  localStorage.setItem("uporabnikZgodovina", JSON.stringify(vpisano));
}

  export default {
  data(){
    return{
      stevec: 1,
    }
  },
    computed: {
      cart_total() {
        return this.$store.getters.cartTotal
      }
    },
    methods: {
      dodajKosarico(){
        let vpisano = [];
        let narocilo = {narocilo : "Narocilo"};
        let trenutnaKosarica = JSON.parse(localStorage.getItem('cart'));
        let uporabnikZgodovina = JSON.parse(localStorage.getItem('uporabnikZgodovina'));
        if(uporabnikZgodovina == null){
          vpisano.push(narocilo)
          for(let i = 0; i < trenutnaKosarica.length; i++) {
            vpisano.push(trenutnaKosarica[i])
          }
          posodobiLocalStorage(vpisano)
        }else {
          uporabnikZgodovina.push(narocilo)
          for(let i = 0; i < trenutnaKosarica.length; i++){
            uporabnikZgodovina.push(trenutnaKosarica[i])
          }
          posodobiLocalStorage(uporabnikZgodovina)
        }
        console.log(uporabnikZgodovina)
        localStorage.removeItem("cart");
        location.reload();
      }
    }
  }
</script>