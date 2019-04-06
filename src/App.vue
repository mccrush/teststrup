<template>
  <div id="app">
    <Navbar :local="local"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view :local="local" :showtime="showtime"/>
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
      local: {},
      showtime: ""
    };
  },
  created() {
    if (localStorage.getItem("settings")) {
      if (JSON.parse(localStorage.getItem("settings")).language == "Ru") {
        this.local = Ru;
        this.showtime = JSON.parse(localStorage.getItem("settings")).showtime;
      } else {
        this.local = En;
        this.showtime = JSON.parse(localStorage.getItem("settings")).showtime;
      }

      // if (
      //   JSON.parse(localStorage.getItem("settings")).showtime == "Yes" ||
      //   JSON.parse(localStorage.getItem("settings")).showtime == "Да"
      // ) {
      //   this.showtime = "Yes";
      // } else if

      // else {
      //   this.showtime = "No";
      // }
    } else {
      this.local = En;
      this.showtime = "Yes";
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
  methods: {}
};
</script>


<style>
</style>
