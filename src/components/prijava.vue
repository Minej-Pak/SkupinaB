<template>
  <div class="container">
    <label>Uporabniško ime (E-mail) : </label>
        <input type="text" placeholder="Vnesi uporabniško ime" name="username" required>
    <label>Geslo : </label>
        <input type="password" placeholder="Vnesi geslo" name="password" required>
    <button type="submit">Prijava</button>
        <input type="checkbox" checked="checked"> Zapomni si me
    <button type="button" class="cancelbtn"> Prekliči</button>
          Pozabljeno <a href="#"> geslo? </a>
  </div>
</template>

<style scoped>
button {
  background-color: lightgreen;
  width: auto;
  color: black;
  padding: 10px 18px;
  margin: 10px 5px;
  border: none;
  cursor: pointer;
}
form {
  border: 3px solid #333333;
  background-color: whitesmoke;
}
input[type=text], input[type=password] {
  width: 100%;
  margin: 8px 0;
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

.container {
  margin-top: 25px;
  padding: 25px;
  background-color: whitesmoke;
  display: inline-block;
}

</style>