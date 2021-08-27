<template>
  <!-- <div
    class="background-landing"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  > -->
  <div v-if="!$auth.loading" class="background-landing">
    <section class="landing-textarea">
      <div class="landing-bubble">
        <h3 v-if="!$auth.isAuthenticated" @click="login">
          Are You New? <br />
          Sign Up!
        </h3>
      </div>

      <div class="landing-bubble">
        <h3 v-if="!$auth.isAuthenticated" @click="login">
          Already a Member? <br />
          Log in here
        </h3>
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
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style>
</style>