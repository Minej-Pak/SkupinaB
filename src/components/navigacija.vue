<template>
  <head>
  </head>

  <body>
    <header>
      <img class="logo" src='@/assets/logo.png' alt="logotip">
      <nav>
          <ul class="nav_links">
              <li><router-link :to="{ name:'home'} ">Domov</router-link></li>
              <li><router-link :to="{ name:'igra'} ">Igra</router-link></li>
              <li><router-link :to="{ name:'kosarica'}">Kosarica</router-link></li>
              <li><router-link :to="{ name:'about'}">O Podjetju</router-link></li>
          </ul>
      </nav>
      <div class="gumba">
        <a href='/prijava'><button>Prijava</button></a>
        <a href='/registracija'><button>Registracija</button></a>
      </div>
    </header>
  </body>
</template>

<style scoped>

</style>
