<template>
  <head>
  </head>

  <body>
    <header>
      <img class="logo" src='@/assets/logo.png' alt="logotip">
      <nav>
          <ul class="nav_links">
              <li><router-link :to="{ name:'home'} ">Domov</router-link></li>
              <li><router-link v-if="uporabnikPrijavljen" :to="{ name:'cart'}">Kosarica</router-link></li>
              <li><router-link v-if="uporabnikPrijavljen" :to="{ name:'kosaricaUporabnika'}">Zgodovina kosarice</router-link></li>
              <li><router-link :to="{ name:'about'}">O Podjetju</router-link></li>
              <li><router-link v-if="jeAdmin" :to="{ name:'seznamUporabnikov'}">Seznam Uporabnikov</router-link></li>
          </ul>
      </nav>
      <span v-if="uporabnikPrijavljen">{{infoPrijavljenega}}</span>
      <div>
        <div v-if="uporabnikPrijavljen"><button class="odjava-btn" v-on:click="odjavi">Odjavi se</button></div>
        <button v-if="uporabnikOdjavlen" class="login-btn" onclick="location.href='/prijava';">Prijava</button>
        <button v-if="uporabnikOdjavlen" class="register-btn" onclick="location.href='/registracija';">Registracija</button>
        <button @click="clearStorage" class="login-btn">Ščisti storage</button>
      </div>
    </header>
  </body>
</template>

<script>
export default {
  name: 'navigacija',
  created() {
    if (localStorage.getItem("vpisanUporabnik") != null) {
      this.uporabnikPrijavljen = true;
      this.uporabnikOdjavlen = false;
      var prijavljen = JSON.parse(localStorage.getItem("vpisanUporabnik"));
      this.infoPrijavljenega += prijavljen.username;
      this.jeAdmin = prijavljen.jeAdmin;
    }
  },
  methods: {
    odjavi() {
      localStorage.removeItem("vpisanUporabnik");
      location.reload();
      window.location.href = "/";
    },
    clearStorage() {
      localStorage.removeItem("uporabnikZgodovina");
    }
  },
  data(){
    return {
      infoPrijavljenega : "Trenutno prijavljen uporabnik: ",
      uporabnikPrijavljen: false,
      uporabnikOdjavlen: true,
      jeAdmin: false,
    }
  }
}
</script>

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

.odjava-btn {
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

.odjava-btn:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #C4464b;
}

span {
  color:whitesmoke;
}
</style>
