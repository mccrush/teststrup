<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between shadow-sm">
    <img src="img/icons/favicon-32x32.png" width="32" height="32" :alt="local.titleapp" />
    <span class="font-roboto-slab">{{local.titleapp}}</span>
    <i
      class="material-icons md-24 btn btn-sm p-0"
      :title="local.settings"
      data-toggle="tooltip"
      data-placement="left"
      @click="showSettings"
    >settings</i>
  </nav>
</template>
<script>
export default {
  props: {
    local: Object
  },
  methods: {
    showSettings: function() {
      let settings = document.querySelector('#settings')
      if (!this.statusShow) {
        settings.style =
          'width: 250px; padding-left: 16px; padding-right: 16px; opacity: 1'
        this.statusShow = true
      } else {
        settings.style =
          'width: 0px; padding-left: 0px; padding-right: 0px; opacity: 0;'
        this.statusShow = false
      }
    }
  }
}
</script>
<style scoped>
.navbar {
  z-index: 50;
}
</style>