<template>
  <div id="app">
    <Navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <Footer/>
    <Settings/>
    <Modal/>
  </div>
</template>

<script>
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
  created() {
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
  methods: {
    kedo: function() {
      eventEmitter.$emit("keydow");
    }
  }
};
</script>


<style>
</style>
