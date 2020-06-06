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
      <div class="col-3 text-center">
        <span
          v-if="showtime === 'Yes' || showtime === 'Да'"
          class="badge badge-light p-2 mt-1 w-100"
        >{{timer}}</span>
      </div>
    </div>

    <div
      class="row justify-content-center mt-3"
      v-if="lastResult.length && (showtime === 'Yes' || showtime === 'Да')"
    >
      <div class="col-9 resList">
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center pt-2 pb-2 pl-3 pr-3"
            v-for="(res, index) in lastResult"
            :key="res.id"
          >
            <span>
              <strong class="mr-2">{{index + 1}}</strong>
              {{res.date + ' - ' + res.time}}
            </span>
            <button
              class="btn btn-sm btn-light border p-0 pl-1 pr-1"
              @click="removeRes(res.id)"
            >&times;</button>
          </li>
        </ul>
      </div>
      <div class="col-3">
        <button class="btn btn-light btn-sm btn-block" @click="clearRes">{{local.buttonClearRes}}</button>
      </div>
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
      timer: '0:00:00',
      timerId: '',
      buttonText: this.local.buttonstart,
      min: 1,
      max: 4,
      words: [],
      tempWords: [],
      lastResult: []
    }
  },
  mounted() {
    for (let i = 0; i < 36; i++) {
      this.words.push({ word: '*', color: '#f2f2f2' })
    }
    document.addEventListener('keyup', e => {
      if (e.code == 'Space') {
        this.run()
      }
    })
    this.lastResult = JSON.parse(localStorage.getItem('lastResult') || '[]')
  },
  methods: {
    addRes() {
      this.lastResult.unshift({
        id: Date.now(),
        time: this.timer,
        date: new Date().toLocaleDateString()
      })
      localStorage.setItem('lastResult', JSON.stringify(this.lastResult))
    },
    removeRes(id) {
      this.lastResult = this.lastResult.filter(res => res.id !== id)
      localStorage.setItem('lastResult', JSON.stringify(this.lastResult))
    },
    clearRes() {
      this.lastResult = []
      localStorage.setItem('lastResult', JSON.stringify(this.lastResult))
    },
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
        this.addRes()
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

        //let min = m < 10 ? '0' + m : m
        let sec = s < 10 ? '0' + s : s
        let mlss = mls < 10 ? '0' + mls : mls
        this.timer = m + ':' + sec + ':' + mlss
      }, 10)
    }
  }
}
</script>

<style scoped>
.resList {
  max-height: 124px;
  overflow-y: auto;
}
</style>
