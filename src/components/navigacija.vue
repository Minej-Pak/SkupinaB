<template>
  <div class="hello">
    <nav>
      <ul>
        <li>
          <router-link :to="{ name:'home'} ">Domov</router-link>
        </li>
        <li>
          <router-link :to="{ name:'igra'} ">Igra</router-link>
        </li>
        <li class="registracija">
          <router-link :to="{ name:'registracija'}">Registracija</router-link>
        </li>
        <li class="prijava">
          <router-link :to="{ name:'prijava'}">Prijava</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>
