<template>
  <div>
    <div class="out" :class="{hidden:!visible}" @mouseleave="mouseout">
      <ul>
        <li style="width:33%">
          <div class="pick title" :class="{'sd':pDisplay == 'block'}">ps</div>
        </li>
        <li style="width:33%">
          <div class="pick title" :class="{'sd':cDisplay == 'block'}">cs</div>
        </li>
        <li style="width:34%">
          <div class="pick title" :class="{'sd':dDisplay == 'block'}">ds</div>
        </li>
      </ul>
      <div :style="{display:pDisplay}">
        <ul>
          <li class="buttom li" v-for="p in ps" @click="selectP(p)">{{p}}</li>
        </ul>
      </div>
      <div :style="{display:cDisplay}">
        <ul>
          <li class="buttom li" v-for="c in cs" @click="selectC(c)">{{c}}</li>
        </ul>
      </div>
      <div :style="{display:dDisplay}">
        <ul>
          <li class="buttom li" v-for="d in ds" @click="selectD(d)">{{d}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'add-pick',
    props: {
      visible: {
        name: 'visible',
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        ps: ['p1', 'p2', 'p3'],
        cs: ['c1', 'c2', 'c3'],
        ds: [],
        p: '',
        c: '',
        d: '',
        str: '',
        pDisplay: 'block',
        cDisplay: 'none',
        dDisplay: 'none',
        isVisible: this.visible
      }
    },
    methods: {
      selectP(v) {
        this.str = ''
        this.str += v
        this.p = v
        if (this.p == 'p1') {
          this.cs = ['p1c1', 'p1c2', 'p1c3']
        } else if (this.p == 'p2') {
          this.cs = ['p2c1', 'p2c2', 'p2c3']
        } else {
          this.cs = ['p3c1', 'p3c2', 'p3c3']
        }
        this.pDisplay = 'none'
        this.cDisplay = 'block'
        this.dDisplay = 'none'
      },
      selectC(v) {
        this.str += v
        this.c = v
        switch (this.c) {
          case 'p1c1':
            this.ds = ['p1c1d1', 'p1c1d2', 'p1c1d3']
            break;
          case 'p1c2':
            this.ds = ['p1c2d1', 'p1c2d2', 'p1c2d3']
            break;
          case 'p1c3':
            this.ds = ['p1c13d1', 'p1c3d2', 'p1c3d3']
            break;
          case 'p2c1':
            this.ds = ['p2c1d1', 'p2c1d2', 'p2c1d3']
            break;
          case 'p2c2':
            this.ds = ['p2c2d1', 'p2c2d2', 'p2c2d3']
            break;
          case 'p2c3':
            this.ds = ['p2c3d1', 'p2c3d2', 'p2c3d3']
            break;
          case 'p3c1':
            this.ds = ['p3c1d1', 'p3c1d2', 'p3c1d3']
            break;
          case 'p3c2':
            this.ds = ['p3c2d1', 'p3c2d2', 'p3c2d3']
            break;
          case 'p3c3':
            this.ds = ['p3c3d1', 'p3c3d2', 'p3c3d3']
            break;
          default:
            break;
        }
        this.pDisplay = 'none'
        this.cDisplay = 'none'
        this.dDisplay = 'block'
      },
      selectD(v) {
        this.str += v
        this.d = v
        this.$emit('selectD', this.p, this.c, this.d)
      },
      mouseout(){
        this.$emit('mouseout')    
      }
    }
  }

</script>

<style scoped>
  .out {
    margin: 30px;
    width: 300px;
    height: 200px;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }

  ul li {
    list-style-type: none;
    float: left;
    text-align: center;
  }

  .pick.title {
    border: 1px solid black;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-blend-mode: multiply, multiply;
    cursor: pointer;
  }

  .pick.title.sd {
    border: 1px solid black;
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
    cursor: pointer;
  }

  .buttom.li {
    margin: 20px;
    cursor: pointer;
  }

  .out.hidden{
    display: none;
  }
</style>
