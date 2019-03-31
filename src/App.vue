<template>
  <div id="app">
    <Navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  created() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
    //eventEmitter.$emit("keydow");
  },
  methods: {
    kedo: function() {
      eventEmitter.$emit("keydow");
    }
  }
};
</script>


<style>
</style>
