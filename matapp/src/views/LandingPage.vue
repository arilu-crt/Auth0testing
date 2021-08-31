<template>
  <!-- <div
    class="background-landing"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  > -->
  <div class="background-landing">
    <section v-if="!$auth.loading" class="landing-textarea">
      <div class="landing-bubble">
        <h3 v-if="$auth.authenticated" @click="logout">Test LogOut</h3>
      </div>

      <div class="landing-bubble">
        <h3 v-if="!$auth.authenticated" @click="login">Log in here</h3>
      </div>
    </section>
  </div>
</template>

<script>
/* import TempBg from "../assets/images/artur-rutkowski-GdTLaWamFHw-unsplash.jpeg";
 */ export default {
  data() {
    return {
      /* img: TempBg, */
    };
  },
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
</style>