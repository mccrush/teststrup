<template>
  <div id="settings" class="settings shadow bg-white pt-5 pl-3 pr-3">
    <form class="mt-3">
      <div class="form-group">
        <label for="exampleFormControlSelect1">{{local.selectlanguage.title}}</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>{{local.selectlanguage.en}}</option>
          <option>{{local.selectlanguage.ru}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">{{local.selectshowtime.title}}</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>{{local.selectshowtime.yes}}</option>
          <option>{{local.selectshowtime.no}}</option>
        </select>
      </div>
    </form>
    <div v-html="local.descriptionapp"></div>
  </div>
</template>
<script>
import En from "@/language/en.js";
import Ru from "@/language/ru.js";
export default {
  props: {
    local: Object
  },
  data() {
    return {};
  },
  created() {}
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
