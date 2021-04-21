<template>
  <body>
  <h1>Registracija novega uporabnika</h1>
  <form align="center" @submit.prevent="handleSubmit">
    <div class="form_container">

      <label>Uporabniško ime: </label>
      <input type="text" v-model="username" placeholder="Uporabniško ime" required autofocus>

      <label>E-mail: </label>
      <input type="email" v-model="email"  placeholder="E-mail naslov" required>

      <label>Geslo: </label>
      <input type="password" v-model="password"  placeholder="Vnesi geslo" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Geslo mora vsebovati številko, eno veliko in majhno črko ter mora biti najmanj 8 mestno.">

      <label>Ponovi geslo: </label>
      <input type="password" v-model="password_confirm"  placeholder="Ponovno vnesi geslo" required>

      <button type="submit">Registriraj me</button>

      <!--      <button @click="clearStorage" type="submit">Ščisti storage</button>-->
      <button  onclick="location.href='/' " type="button" class="cancelbtn"> Prekliči</button> Že obstoječ <a href="/prijava"> uporabnik? </a>

    </div>
  </form>
  </body>
</template>

<script>

import preveriUporabnika from "@/data/validacija";

export default {
  name: 'registracija',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      };
      preveriUporabnika(data)
    },
    clearStorage() {
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: whitesmoke;
}

a {
  color: darkgrey;
}

a:hover {
  color: blue;
}

input[type=text], input[type=password], input[type=email], input[type=tel], input[type=date]  {
  width: 100%;
  margin: 20px 0px;
  padding: 12px 20px;
  display: inline-block;
  border: 2px black;
  box-sizing: border-box;
}

button {
  background-color: #8ee53f;
  width: auto;
  color: black;
  padding: 10px 18px;
  margin: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
button:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 6px 15px #b4ee7f;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  margin: 10px 5px;
  background-color: #e85454;
  border-radius: 10px;
}

.cancelbtn:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #C4464b;
}

.form_container {
  margin-top: 25px;
  padding: 25px;
  background-color: whitesmoke;
  display: inline-block;
  border: lightcoral 2px solid;
}

.form_container label {
  text-align: left;
  display: flex;
  padding-left: 10px;
}
</style>
