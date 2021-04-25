<template>
  <body>
  <h1>Prijava</h1>
  <form align="center" @submit.prevent="handleSubmit">
    <div class="form_container">
      <label>Uporabniško ime: </label>
      <input type="text" v-model="username" placeholder="Uporabniško ime" autofocus>

      <label>E-mail: </label>
      <input type="email" v-model="email" placeholder="E-mail naslov">

      <label>Geslo: </label>
      <input type="password" v-model="password" placeholder="Vnesi geslo" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Geslo mora vsebovati številko, eno veliko in majhno črko ter mora biti najmanj 8 mestno.">

      <button type="submit">Prijava</button>
      <input type="checkbox" checked="checked"> Zapomni si me
      <button onclick="location.href='/';" type="button" class="cancelbtn"> Prekliči</button> Pozabljeno <a href="/obnova_gesla"> geslo? </a>
    </div>
  </form>
  </body>
</template>

<script>

import preveriVpisanega from "@/data/preveriPrijavo";

export default {
  name: 'prijava',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      jeAdmin: false,
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        jeAdmin: this.jeAdmin,
      };
      preveriVpisanega(data)
    },
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

input[type=text], input[type=password], input[type=email]  {
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
