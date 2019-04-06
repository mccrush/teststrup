<template>
  <div id="app">
    <Navbar :local="local"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view :local="local"/>
    <Footer :local="local"/>
    <Settings :local="local"/>
    <Modal :local="local"/>
  </div>
</template>

<script>
//import { eventEmitter } from "./main.js";

import En from "@/language/en.js";
import Ru from "@/language/ru.js";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Settings from "@/components/Settings.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Navbar,
    Footer,
    Settings,
    Modal
  },
  data() {
    return {
      local: {}
    };
  },
  created() {
    if (localStorage.getItem("local") == "Ru") {
      this.local = Ru;
    } else {
      this.local = En;
    }

    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
      if (
        !localStorage.getItem("showmodal") ||
        localStorage.getItem("showmodal") == true
      ) {
        //console.log("Ну да, куки ент");
        $("#modalWindow").modal("show");
      }
    });
    //eventEmitter.$emit("keydow");
  },
  mounted() {},
  methods: {
 
  }
};
</script>


<style>
</style>
