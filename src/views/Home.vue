<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col">
        <table class="table table-borderless table-sm mt-4" cellspacing="0" cellpadding="0">
          <tr>
            <td class="11">&nbsp;</td>
            <td class="12">&nbsp;</td>
            <td class="13">&nbsp;</td>
            <td class="14">&nbsp;</td>
            <td class="15">&nbsp;</td>
          </tr>
          <tr>
            <td class="21">&nbsp;</td>
            <td class="22">&nbsp;</td>
            <td class="23">&nbsp;</td>
            <td class="24">&nbsp;</td>
            <td class="25">&nbsp;</td>
          </tr>
          <tr>
            <td class="31">&nbsp;</td>
            <td class="32">&nbsp;</td>
            <td class="33">&nbsp;</td>
            <td class="34">&nbsp;</td>
            <td class="35">&nbsp;</td>
          </tr>
          <tr>
            <td class="41">&nbsp;</td>
            <td class="42">&nbsp;</td>
            <td class="43">&nbsp;</td>
            <td class="44">&nbsp;</td>
            <td class="45">&nbsp;</td>
          </tr>
          <tr>
            <td class="51">&nbsp;</td>
            <td class="52">&nbsp;</td>
            <td class="53">&nbsp;</td>
            <td class="54">&nbsp;</td>
            <td class="55">&nbsp;</td>
          </tr>
          <tr>
            <td class="61">&nbsp;</td>
            <td class="62">&nbsp;</td>
            <td class="63">&nbsp;</td>
            <td class="64">&nbsp;</td>
            <td class="65">&nbsp;</td>
          </tr>
          <tr>
            <td class="71">&nbsp;</td>
            <td class="72">&nbsp;</td>
            <td class="73">&nbsp;</td>
            <td class="74">&nbsp;</td>
            <td class="75">&nbsp;</td>
          </tr>
          <tr>
            <td class="81">&nbsp;</td>
            <td class="82">&nbsp;</td>
            <td class="83">&nbsp;</td>
            <td class="84">&nbsp;</td>
            <td class="85">&nbsp;</td>
          </tr>
          <tr>
            <td class="91">&nbsp;</td>
            <td class="92">&nbsp;</td>
            <td class="93">&nbsp;</td>
            <td class="94">&nbsp;</td>
            <td class="95">&nbsp;</td>
          </tr>
          <tr>
            <td class="101">&nbsp;</td>
            <td class="102">&nbsp;</td>
            <td class="103">&nbsp;</td>
            <td class="104">&nbsp;</td>
            <td class="105">&nbsp;</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col p-3">
        <button class="btn btn-outline-secondary btn-lg btn-block" @click="run">{{buttonText}}</button>
      </div>
    </div>

    <div class="row">
      <div class="col p-3 text-center" id="timer">00:00:0</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Settings from "@/components/Settings.vue";
//import { eventEmitter } from "../main.js";

export default {
  name: "home",
  components: {},
  props: {
    local: Object
  },
  data() {
    return {
      status: false,
      timerId: "",
      buttonText: this.local.buttonstart,
      min: 1,
      max: 4
    };
  },
  methods: {
    run() {
      if (!this.status) {
        this.status = true;
        this.buttonText = this.local.buttonstop;

        for (var i = 1; i < 11; i++) {
          for (var j = 1; j < 6; j++) {
            var ranCol = Math.round(
              this.min - 0.5 + Math.random() * (this.max - this.min + 1)
            );
            var ranText = Math.round(
              this.min - 0.5 + Math.random() * (this.max - this.min + 1)
            );
            //console.log("ranText = "+ranText);
            switch (ranCol) {
              case 1:
                var mcolor = "#D32F2F";
                break;
              case 2:
                var mcolor = "#1976D2";
                break;
              case 3:
                var mcolor = "#FBC02D";
                break;
              case 4:
                var mcolor = "#689F38";
                break;
              default:
                var mcolor = "#000000";
            }
            switch (ranText) {
              case 1:
                var mtext = this.local.color.red;
                break;
              case 2:
                var mtext = this.local.color.blue;
                break;
              case 3:
                var mtext = this.local.color.yellow;
                break;
              case 4:
                var mtext = this.local.color.green;
                break;
              default:
                var mtext = this.local.color.red;
            }

            $("." + i + "" + j).text(mtext);
            $("." + i + "" + j).css("color", mcolor);

            //console.log('.'+i+''+j);
          }
        }
        clearInterval(this.timerId);
        this.startTimer();
      } else {
        this.status = false;
        this.buttonText = this.local.buttonstart;
        clearInterval(this.timerId);
      }
    },
    startTimer: function() {
      let timer = document.getElementById("timer");
      let m = 0,
        s = 0,
        mls = 0;
      this.timerId = setInterval(() => {
        mls += 1;
        if (mls > 9) {
          s += 1;
          mls = 0;
          if (s > 59) {
            m += 1;
            s = 0;
          }
        }
        //let mlsi = mls < 10 ? "0" + mls : mls;
        let mi = m < 10 ? "0" + m : m;
        let si = s < 10 ? "0" + s : s;
        timer.innerText = mi + ":" + si + ":" + mls;
      }, 100);
    }
  }
};
</script>
<style scoped>
table td {
  padding: 10px 0 10px 0;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
}
.btn-lg {
  font-size: 1rem;
}
</style>
