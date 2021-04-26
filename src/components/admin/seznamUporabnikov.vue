<template>
<h1>Seznam uporabnikov</h1>
  <input type="text" v-model="user" placeholder="Delete User">
  <button type="submit" @click="handleButton">Click my ass</button>
  <div
      v-for="items in seznam" :key="items"><br>Username: {{items.username}}, E-mail: {{items.email}}, Password: {{items.password}}
  </div>
</template>

<script>
export default {
  name: "seznamUporabnikov",
  data() {
    return {
      seznam: JSON.parse(localStorage.getItem('data')),
      user: '',
    }
  },
  methods: {
    handleButton() {
      const user = this.user
      for (let i = 0; i <= this.seznam.length-1; i++) {
        if (this.seznam[i].username === user && this.seznam[i].username !== "admin") {
          this.seznam.splice(i, 1);
          localStorage.setItem('data', JSON.stringify(this.seznam));
        }
      }
    }
  }
}
</script>

<style scoped>
h1, div {
  text-align: center;
  color:whitesmoke
}
input[type=text]  {
  margin-left: 43%;
}
button {
  width: auto;
  background-color: #e85454;
  border-radius: 10px;
  margin-left: 10px;
}

button:hover {
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0px 3px 10px #C4464b;
}

</style>