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
        let narocilo = {narocilo : "Narocilo", username: "", id: 0, prikazanId: 0};
        let trenutnaKosarica = JSON.parse(localStorage.getItem('cart'));
        let uporabnikZgodovina = JSON.parse(localStorage.getItem('uporabnikZgodovina'));
        let temp = JSON.parse(localStorage.getItem('vpisanUporabnik'));
        let trenutenUporabnik = temp.username
        let uniqueId = Math.floor(Math.random() * 100);
        if(uporabnikZgodovina == null){
          narocilo.prikazanId = uniqueId
          narocilo.id = uniqueId
          narocilo.username = trenutenUporabnik
          vpisano.push(narocilo)
          for(let i = 0; i < trenutnaKosarica.length; i++) {
            trenutnaKosarica[i].id = uniqueId;
            vpisano.push(trenutnaKosarica[i])
          }
          posodobiLocalStorage(vpisano)
        }else {
          narocilo.prikazanId = uniqueId
          narocilo.id = uniqueId
          narocilo.username = trenutenUporabnik
          uporabnikZgodovina.push(narocilo)
          for(let i = 0; i < trenutnaKosarica.length; i++){
            trenutnaKosarica[i].id = uniqueId;
            uporabnikZgodovina.push(trenutnaKosarica[i])
          }
          posodobiLocalStorage(uporabnikZgodovina)
        }
        console.log(uporabnikZgodovina)
        localStorage.removeItem("cart");
        location.reload();
      },
    }
  }
</script>