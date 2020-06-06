<template>
  <div id="settings" class="settings shadow-sm bg-white pt-5">
    <form class="mt-4">
      <div class="form-group">
        <label for="selectlanguage">{{local.selectlanguage.title}}</label>
        <select class="form-control form-control-sm" id="selectlanguage" v-model="lang">
          <option>{{local.selectlanguage.en}}</option>
          <option>{{local.selectlanguage.ru}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="selectshowtime">{{local.selectshowtime.title}}</label>
        <select class="form-control form-control-sm" id="selectshowtime" v-model="showtime">
          <option>{{local.selectshowtime.yes}}</option>
          <option>{{local.selectshowtime.no}}</option>
        </select>
      </div>
      <button
        class="btn btn-success btn-block btn-sm"
        @click.prevent="saveSettings"
      >{{local.buttonsave}}</button>
    </form>
    <hr />
    <button
      class="btn btn-light btn-sm btn-block dropdown-toggle mt-3"
      type="button"
      data-toggle="collapse"
      data-target="#collapseSettings"
      aria-expanded="false"
      aria-controls="collapseSettings"
    >{{local.buttonaboutapp}}</button>
    <div v-html="local.descriptionapp" class="mt-3 collapse" id="collapseSettings"></div>
    <Footer :local="local" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  props: {
    local: Object
  },
  data() {
    return {
      lang: 'En',
      showtime: 'Yes',
      settings: {}
    }
  },
  created() {
    if (localStorage.getItem('settings_teststrup')) {
      this.settings = JSON.parse(localStorage.getItem('settings_teststrup'))
      this.lang = this.settings.language
      this.showtime = this.settings.showtime
    }
  },
  methods: {
    saveSettings() {
      this.settings.language = this.lang
      if (this.lang == 'En') {
        if (this.showtime == 'Да' || this.showtime == 'Yes') {
          this.showtime = 'Yes'
        } else {
          this.showtime = 'No'
        }
      } else {
        if (this.showtime == 'Да' || this.showtime == 'Yes') {
          this.showtime = 'Да'
        } else {
          this.showtime = 'Нет'
        }
      }
      this.settings.showtime = this.showtime
      localStorage.setItem('settings_teststrup', JSON.stringify(this.settings))
      location.reload()
    }
  }
}
</script>

<style scoped>
.settings {
  width: 0px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: 0.3s;
  overflow-y: auto;
  overflow-x: hidden;
}
.form-control:focus {
  outline: none;
}
</style>
