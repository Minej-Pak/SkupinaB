<template>
  <head>

  </head>

  <body>
    <header>
      <h1>Igra</h1>
    </header>
    <div >
    <h4>User list</h4>
    <ul>
      <li v-for="(user, id) in users" :key="id">
          {{user.username}}, {{user.email}}, {{user.password}}
      </li>
    </ul>
    </div>
  </body>
</template>

<script>
import http from "../httpConection";

export default {
  name: "user-list",
  data() {
    return {
      users: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    getUsers() {
      http
          .get("/list")
          .then(response => {
            this.users = response.data; // JSON are parsed automatically.
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.getUsers();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color:whitesmoke;
  text-align: center;
}

</style>
