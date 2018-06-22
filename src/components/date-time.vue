<template>
  <div>
    <div :class="{'hidden':!visible}" @mouseleave="mouseout">
      <span>date-time</span>
      <div class="out">
        <div class="left" :style="{'display':leftDisplay}">
          <ul>
            <li>
              <button @click="upHour">up</button>
            </li>
            <li>
              <span class="time font" @click="choseHour">{{hour}}</span>
            </li>
            <li>
              <button @click="downHour">down</button>
            </li>
          </ul>
        </div>
        <div class="left" :style="{'display':leftAll}">
          <ul>
            <li class="cross" :class="{'current':item.current}" v-for="item in hs" @click="pickHour(item)">{{item.hour}}</li>
          </ul>
        </div>
        <div class="right" :style="{'display':rightDisplay}">
          <ul>
            <li>
              <button @click="upMin">up</button>
            </li>
            <li>
              <span class="time font" @click="choseMinute">{{minute}}</span>
            </li>
            <li>
              <button @click="downMin">down</button>
            </li>
          </ul>
        </div>
        <div class="right" :style="{'display':rightAll}">
          <ul>
            <li class="cross" :class="{'current':item.current}" v-for="item in ms" @click="pickMin(item)">{{item.minute}}</li>
          </ul>
        </div>
        <div class="buttom">
          <button @click="pickTime">comfirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'date-time',
    props: {
      visible: {
        name: 'visible',
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        hour: 0,
        minute: 0,
        hs: [],
        ms: [],
        leftDisplay: 'block',
        leftAll: 'none',
        rightDisplay: 'block',
        rightAll: 'none'
      }
    },
    mounted() {
      this.$nextTick(() => {
        let date = new Date()
        console.log(date.getHours())
        console.log(date.getMinutes())
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.initHour()
        this.initMinute()
      })
    },
    methods: {
      initHour() {
        for (let i = 0; i < 24; i++) {
          let x = {
            hour: i,
            current: false
          }
          this.hs.push(x)
        }
        this.hs.map(e => {
          if (e.hour == this.hour) {
            e.current = true
          }
        })
      },
      initMinute() {
        for (let i = 0; i < 60; i++) {
          let x = {
            minute: i,
            current: false
          }
          this.ms.push(x)
        }
        this.ms.map(e => {
          if (e.minute == this.minute) {
            e.current = true
          }
        })
      },
      downHour() {
        if (this.hour == 1) {
          this.hour = 24
        } else {
          this.hour--
        }
      },
      upHour() {
        if (this.hour == 24) {
          this.hour == 1
        } else {
          this.hour++
        }
      },
      downMin() {
        if (this.minute == 0) {
          this.minute = 59
          this.hour--
        } else {
          this.minute--
        }
      },
      upMin() {
        if (this.minute == 59) {
          this.minute = 0
          this.hour++
        } else {
          this.minute++
        }
      },
      choseHour() {
        this.leftDisplay = 'none'
        this.leftAll = 'block'
      },
      pickHour(v) {
        this.hour = v.hour
        this.leftDisplay = 'block'
        this.leftAll = 'none'
      },
      choseMinute() {
        this.rightDisplay = 'none'
        this.rightAll = 'block'
      },
      pickMin(v) {
        this.minute = v.minute
        this.rightAll = 'none'
        this.rightDisplay = 'block'
      },
      pickTime() {
        this.$emit('pickTime', this.hour, this.minute)
      },
      mouseout() {
        this.$emit('mouseout')
      }
    }
  }

</script>
<style scoped>
  .out {
    margin: 30px;
    width: 320px;
    height: 250px;
    border: 1px solid black;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  }

  .left {
    width: 50%;
    height: 90%;
    float: left;
  }

  .right {
    width: 50%;
    height: 90%;
    float: right;
  }

  ul li {
    list-style-type: none;
    text-align: center;
    margin-top: 30px;
  }

  .time.font {
    font-size: 35px;
    cursor: pointer;
  }

  .cross {
    list-style: none;
    margin: 10px;
    float: left;
    font-size: 10px;
    cursor: pointer;
  }

  .cross.current {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }

  .hidden {
    display: none;
  }

  .buttom {
    margin-left: 121px;
  }

  button {
    cursor: pointer;
  }

</style>
