<template>
  <div class="slovo p-1 text-center" :style="'color:'+ color">{{word}}</div>
</template>

<script>
export default {
  props: {
    word: { type: String, default: '&nbsp;' },
    color: { type: String, default: '#fff' }
  }
}
</script>

<style scoped>
.slovo {
  font-size: 1.2rem;
}
</style>