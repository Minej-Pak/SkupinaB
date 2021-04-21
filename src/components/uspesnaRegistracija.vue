<template>
  <div class="okence" align="center">
      <h1>Odlično!</h1>
        <h3>Registracija novega računa je uspela!</h3>

    <div class="image-container">
          <img src='@/assets/icon_success.svg' alt='icon_success'>
    </div>

    <div class="button-container">
      <button class="login-btn" onclick="location.href='/prijava';">Prijavi se zdaj!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "uspesnaRegistracija"
}
</script>

<style scoped>

html, body {
  padding: 0;
  margin: 0;
}

h1, h3 {
  color: black;
}

.okence {
  background-color: whitesmoke;
  text-align: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  height: 400px;
  padding: 10px;
}

img {
  height: 150px;
  width: 150px;
}

.image-container {
  text-align: center;
}

.login-btn {
  font-family: Hack, monospace;
  background: #80c242;
  color: #1d1d1d;
  cursor: pointer;
  font-size: 1.5em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 100px;
}

.login-btn:hover {
  background: #2b2bff;
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 6px 15px #0000ff61;
  padding: 1.7rem 1.5rem 1.7rem 1.5rem;
  color: #ffffff;
}

.button-container {
  display: inline-block;
  margin-top: 20px;
}
</style>