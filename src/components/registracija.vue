<template>
  <body>
  <h1>Registracija novega uporabnika</h1>
  <form align="center">
    <div class="form_container">
      <label>Uporabniško ime: </label>
        <input type="text" id="username" name="username" placeholder="Uporabniško ime">

      <label>E-mail: </label>
        <input type="email" id="email" name="email" placeholder="E-mail naslov">

      <label>Geslo: </label>
        <input type="password" id="password" name="password" placeholder="Vnesi geslo" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Geslo mora vsebovati številko, eno veliko in majhno črko ter mora biti najmanj 8 mestno." required>

      <label for="phone">Telefonska številka:</label>
        <input type="tel" id="phone" name="phone" placeholder="040-200-540" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required>

      <label for="birthday">Datum rojstva:</label>
        <input type="date" id="birthday" name="birthday">

      <button type="submit">Registracija</button>
      <button  onclick="location.href='/' " type="button" class="cancelbtn"> Prekliči</button> Že obstoječ <a href="/prijava"> uporabnik? </a>
    </div>
  </form>
  </body>
</template>

<style scoped>
h1 {
  text-align: center;
  color: whitesmoke;
}

a {
  color: darkgrey;
}
button {
  background-color: lightgreen;
  width: auto;
  color: black;
  padding: 10px 18px;
  margin: 10px 5px;
  border: none;
  cursor: pointer;
}
input[type=text], input[type=password], input[type=email], input[type=tel], input[type=date]  {
  width: 100%;
  margin: 20px 0px;
  padding: 12px 20px;
  display: inline-block;
  border: 2px black;
  box-sizing: border-box;
}
button:hover {
  opacity: 0.7;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  margin: 10px 5px;
  background-color: lightcoral;
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
