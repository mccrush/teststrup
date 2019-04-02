<template>
  <div id="settings" class="settings shadow bg-white pt-5 pl-3 pr-3">
    <form class="mt-3">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Language</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>En</option>
          <option>Ru</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Show time</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </form>
    <div v-html="local.descriptionapp">
      <small>
        <p>
          В психологии
          <a href="https://www.wikiwand.com/ru/%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82_%D0%A1%D1%82%D1%80%D1%83%D0%BF%D0%B0" target="_blank" title="Wikipedia" data-toggle="tooltip" data-placement="bottom">эффектом Струпа</a> (англ. Stroop effect) называют задержку реакции при прочтении слов, когда цвет слов не совпадает с написанными словами (к примеру, слово «красный» написано синим).
        </p>
        <p>Эффект назван в честь Джона Ридли Струпа, впервые опубликовавшего этот тест на английском в 1935 году. До этого этот эффект был опубликован в Германии в 1929 году. Это исследование стало одним из наиболее цитируемых исследований в истории экспериментальной психологии.</p>
      </small>
    </div>
  </div>
</template>
<script>
import En from "@/language/en.js";
import Ru from "@/language/ru.js";
export default {
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
