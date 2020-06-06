<template>
  <div id="app">
    <Navbar :local="local" />

    <Home :local="local" :showtime="showtime" />

    <Settings :local="local" />
    <Modal :local="local" />
  </div>
</template>

<script>
import En from '@/language/en.js'
import Ru from '@/language/ru.js'

import Navbar from '@/components/Navbar.vue'
import Home from '@/components/Home.vue'
import Footer from '@/components/Footer.vue'
import Settings from '@/components/Settings.vue'
import Modal from '@/components/Modal.vue'

import $ from 'jquery'

export default {
  components: {
    Navbar,
    Home,
    Footer,
    Settings,
    Modal
  },
  data() {
    return {
      local: {},
      showtime: ''
    }
  },
  created() {
    if (localStorage.getItem('settings_teststrup')) {
      if (
        JSON.parse(localStorage.getItem('settings_teststrup')).language == 'Ru'
      ) {
        this.local = Ru
        this.showtime = JSON.parse(
          localStorage.getItem('settings_teststrup')
        ).showtime
      } else {
        this.local = En
        this.showtime = JSON.parse(
          localStorage.getItem('settings_teststrup')
        ).showtime
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
      this.local = En
      this.showtime = 'Yes'
    }

    $(function() {
      $('[data-toggle="tooltip"]').tooltip()
      if (
        !localStorage.getItem('showmodal_teststrup') ||
        localStorage.getItem('showmodal_teststrup') == true
      ) {
        //console.log("Ну да, куки ент");
        $('#modalWindow').modal('show')
      }
    })
    //eventEmitter.$emit("keydow");
  },
  mounted() {},
  methods: {}
}
</script>


<style>
.container {
  max-width: 960px;
  background-color: #ffffff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', serif;
}

.font-roboto-slab {
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
}

.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}
</style>
