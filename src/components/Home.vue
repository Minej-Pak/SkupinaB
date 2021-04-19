<template>
  <div>
    <opisIgre :igra="igra" :active="active.opisIgre" v-on:zapri="zapri"/>
    <div>
      <home v-for="igra in seznamIger" :key="igra.id" :igra="igra" v-on:igre="vidiIgro($event)"/>
    </div>
  </div>
</template>

<script>
import seznamIger from '@/data/seznamIger.js'
import home from '@/components/compInHome.vue'
import opisIgre from '@/components/compInDesc.vue'

export default{
  name: 'index',
  components: {
    home, opisIgre
  },
  data (){
    return {
      seznamIger: seznamIger,
      product: null,
      active:{
        opisIgre: false
      }
    }
  },
  methods: {
    vidiIgro(igra){
      this.product = igra
      this.active.opisIgre = true
      console.log("---------------------------")
      console.log(this.product)
      console.log("---------------------------")
    },
    zapri(){
      this.active.opisIgre = false
    }
  }
}
</script>

<style lang="scss">

</style>

