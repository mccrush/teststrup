<template>
  <div id="app">
    <Navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <div id="ruls">
      Необходимо как можно быстреe вслух произносить
      <strong>цвет</strong> написанного слова
    </div>
    <Footer/>
    <Settings/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Settings from "@/components/Settings.vue";

export default {
  components: {
    Navbar,
    Footer,
    Settings
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
