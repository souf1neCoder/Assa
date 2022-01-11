<template>
  <section class="contact">
    <Nav />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Nav from '../components/Nav.vue';
import Main from '../components/Contact/Main.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
      Nav,Footer,Main
  }
}
</script>
<style>

</style>