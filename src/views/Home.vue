<template>
  <div class="home">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
      Nav,Main,Footer
  }
}
</script>
<style>

</style>