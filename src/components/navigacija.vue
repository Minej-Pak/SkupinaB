<template>
  <head>
  </head>

  <body>
    <header>
      <img class="logo" src='@/assets/logo.png' alt="logotip">
      <nav>
          <ul class="nav_links">
              <li><router-link :to="{ name:'home'} ">Domov</router-link></li>
              <li><router-link :to="{ name:'cart'}">Kosarica</router-link></li>
              <li><router-link :to="{ name:'about'}">O Podjetju</router-link></li>
          </ul>
      </nav>
      <div>
        <button class="login-btn" onclick="location.href='/prijava';">Prijava</button>
        <button class="register-btn" onclick="location.href='/registracija';">Registracija</button>
      </div>
    </header>
  </body>
</template>

<style scoped>

.login-btn {
  margin-left: 20px;
  padding: 9px 25px;
  cursor: pointer;
  border-style: none;
  outline:none;
  background-color: #8ee53f;
  color: #1d1d1d;
  font-size: 0.8em;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
}

.login-btn:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #b4ee7f;
}

.register-btn {
  margin-left: 20px;
  padding: 9px 25px;
  cursor: pointer;
  border-style: none;
  outline:none;
  background-color: #e85454;
  color: #1d1d1d;
  font-size: 0.8em;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
}

.register-btn:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #C4464b;
}

</style>
