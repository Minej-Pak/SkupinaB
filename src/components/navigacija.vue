<template>
  <h1>
    Navigacija
  </h1>
  <nav>
  <ul>
    <li>
      <router-link :to="{ name:'home'} ">Domov</router-link>
    </li>
    <li>
      <router-link class="active" :to="{ name:'navigacija'} ">Navigacija</router-link>
    </li>
    <li>
      <router-link :to="{ name:'igra'} ">Igra</router-link>
    </li>
  </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: inline-block;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    border: 1px solid #555;
  }

  nav li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  nav li {
    text-align: center;
    border-bottom: 1px solid #555;
  }

  nav li:last-child {
    border-bottom: none;
  }

  nav li a.active {
    background-color: lightslategray;
    color: white;
  }

  nav li a:hover:not(.active) {
    background-color: darkgray;
    color: white;
  }
</style>
