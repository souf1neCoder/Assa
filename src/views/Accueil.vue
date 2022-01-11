<template>
  <div class="accueil">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
import Main from '../components/Accueil/Main.vue'

export default {
  name: 'Home',
  components: {
      Nav,Footer,Main
  }
}
</script>
<style>

</style>