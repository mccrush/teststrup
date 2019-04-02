<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
    <!-- <router-link class="navbar-brand font-roboto-slab" to="/">
      <img src="/img/icons/favicon-32x32.png" width="32" height="32" class="d-inline-block align-top" alt>&nbsp;
      <strong>Тест Струпа</strong>
    </router-link>-->

    <img src="/img/icons/favicon-32x32.png" width="32" height="32" :alt="local.titleapp">
    <span class="font-roboto-slab">{{local.titleapp}}</span>
    <i class="material-icons md-24 btn btn-sm" :title="local.settings" data-toggle="tooltip" data-placement="left" @click="showSettings">settings</i>
  </nav>
</template>
<script>
import En from "@/language/en.js";
import Ru from "@/language/ru.js";
export default {
  data() {
    return {
      statusShow: false,
      local: {}
    };
  },
  created() {
    if (localStorage.getItem("local") == "Ru") {
      this.local = Ru;
    } else {
      this.local = En;
    }
  },
  methods: {
    showSettings: function() {
      let settings = document.querySelector("#settings");
      if (!this.statusShow) {
        settings.style = "right:0px";
        this.statusShow = true;
      } else {
        settings.style = "right:-260px";
        this.statusShow = false;
      }
    }
  }
};
</script>
