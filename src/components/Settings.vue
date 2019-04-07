<template>
  <div id="settings" class="settings shadow bg-white pt-5 pl-3 pr-3">
    <form class="mt-3">
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
      <button class="btn btn-success btn-block btn-sm" @click.prevent="saveSettings">{{local.buttonsave}}</button>
    </form>
    <div v-html="local.descriptionapp" class="mt-2"></div>
  </div>
</template>
<script>
//import { eventEmitter } from "./../main.js";

export default {
  props: {
    local: Object
    //showtime: String
  },
  data() {
    return {
      lang: "En",
      showtime: "Yes",
      settings: {}
    };
  },
  created() {
    //this.lang = JSON.parse(localStorage.getItem("settings")).language;
    if (localStorage.getItem("settings_teststrup")) {
      this.settings = JSON.parse(localStorage.getItem("settings_teststrup"));
      this.lang = this.settings.language;
      this.showtime = this.settings.showtime;
    } else {
    }
  },
  methods: {
    saveSettings() {
      this.settings.language = this.lang;
      if (this.lang == "En") {
        if (this.showtime == "Да" || this.showtime == "Yes") {
          this.showtime = "Yes";
        } else {
          this.showtime = "No";
        }
      } else {
        if (this.showtime == "Да" || this.showtime == "Yes") {
          this.showtime = "Да";
        } else {
          this.showtime = "Нет";
        }
      }
      this.settings.showtime = this.showtime;
      localStorage.setItem("settings_teststrup", JSON.stringify(this.settings));
      location.reload();
    }
  }
};
</script>
<style scoped>
.settings {
  width: 250px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: -260px;
  transition: 0.3s;
}
.form-control:focus {
  outline: none;
}
</style>
