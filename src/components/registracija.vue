<template>
  <h3>Registracija novega računa</h3>
  <div class="container">
    <form>
      <label>Uporabniško ime (E-mail) : </label>
        <input type="email" id="email" name="email" placeholder="Vnesi želeno uporabniško ime">
      <label>Geslo : </label>
        <input type="password" id="geslo" name="geslo" placeholder="Vnesi geslo" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Geslo mora vsebovati številko, eno veliko in majhno črko ter mora biti najmanj 8 mestno." required>
      <button type="submit">Registracija</button>
      <button type="button" class="cancelbtn"> Prekliči</button>
    </form>
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
input[type=text], input[type=password], input[type=email]  {
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

