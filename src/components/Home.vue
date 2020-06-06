<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <Slovo
        class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2"
        v-for="(word, index) in words"
        :key="index+'td'"
        :word="word.word"
        :color="word.color"
      />
    </div>

    <div class="row mt-3">
      <div class="col-9">
        <button class="btn btn-light btn-block" @click="run">{{buttonText}}</button>
      </div>
      <div
        v-if="showtime === 'Yes' || showtime === 'Да'"
        class="col-3 pt-2 text-center bg-light"
      >{{timer}}</div>
    </div>
  </div>
</template>

<script>
import Slovo from '@/components/Slovo'

export default {
  name: 'home',
  components: { Slovo },
  props: {
    local: Object,
    showtime: String
  },
  data() {
    return {
      started: false,
      timer: '00:00:00',
      timerId: '',
      buttonText: this.local.buttonstart,
      min: 1,
      max: 4,
      words: [],
      tempWords: []
    }
  },
  mounted() {
    for (let i = 0; i < 36; i++) {
      this.words.push({ word: '&nbsp;', color: '#fff' })
    }
    document.addEventListener('keyup', e => {
      if (e.code == 'Space') {
        this.run()
      }
    })
  },
  methods: {
    run() {
      if (!this.started) {
        this.started = true
        this.buttonText = this.local.buttonstop

        for (let j = 1; j < 37; j++) {
          const ranCol = Math.round(
            this.min - 0.5 + Math.random() * (this.max - this.min + 1)
          )
          const ranText = Math.round(
            this.min - 0.5 + Math.random() * (this.max - this.min + 1)
          )

          switch (ranCol) {
            case 1:
              var mcolor = '#D32F2F'
              break
            case 2:
              var mcolor = '#1976D2'
              break
            case 3:
              var mcolor = '#FBC02D'
              break
            case 4:
              var mcolor = '#689F38'
              break
            default:
              var mcolor = '#000000'
          }
          switch (ranText) {
            case 1:
              var mtext = this.local.color.red
              break
            case 2:
              var mtext = this.local.color.blue
              break
            case 3:
              var mtext = this.local.color.yellow
              break
            case 4:
              var mtext = this.local.color.green
              break
            default:
              var mtext = this.local.color.red
          }

          const word = { word: mtext, color: mcolor }
          this.tempWords.push(word)
        }
        this.words = this.tempWords
        this.tempWords = []

        if (this.showtime == 'Yes' || this.showtime == 'Да') {
          clearInterval(this.timerId)
          this.startTimer()
        }
      } else {
        this.started = false
        this.buttonText = this.local.buttonstart
        if (this.showtime == 'Yes' || this.showtime == 'Да') {
          clearInterval(this.timerId)
        }
      }
    },
    startTimer() {
      let m = 0,
        s = 0,
        mls = 0

      this.timerId = setInterval(() => {
        mls += 1
        if (mls > 99) {
          s += 1
          mls = 0
          if (s > 59) {
            m += 1
            s = 0
          }
        }

        let min = m < 10 ? '0' + m : m
        let sec = s < 10 ? '0' + s : s
        let mlss = mls < 10 ? '0' + mls : mls
        this.timer = min + ':' + sec + ':' + mlss
      }, 10)
    }
  }
}
</script>
<style scoped>
</style>
