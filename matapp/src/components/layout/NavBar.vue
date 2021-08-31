<template>
  <div id="nav">
    <router-link to="/">Landingpage</router-link>|
    <router-link to="/home">Home</router-link>|
    <router-link to="/listing">Listing</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link v-if="$auth.authenticated" to="/profile">Profile</router-link>|
    <router-link v-if="$auth.authenticated" to="/order">OrderPage</router-link>
    <button v-if="!$auth.authenticated" @click="login">Login</button>
    <button v-if="$auth.authenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect({
        redirect_uri: "http://localhost:8080/listing",
      });
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: "http://localhost:8080",
      });
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>