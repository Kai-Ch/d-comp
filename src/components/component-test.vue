<template>
  <div>
    <div>comp-test</div>
    <span>
      <input v-model="add" @click="choseAdd">
      <address-pick :visible="visible" @mouseout="mouseout" @selectD="selectD"></address-pick>
    </span>

    <div style="margin-top:50px">
      <input v-model="time" @click="choseTime">
      <date-time :visible="dateTimeVisible" @mouseout="dateTimeMouseout" @pickTime="pickTime"></date-time>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        add: '',
        dateTimeVisible: false,
        time: '',
      }
    },
    methods: {
      choseAdd() {
        this.visible = true
      },
      mouseout() {
        this.visible = false
      },
      selectD(p, c, d) {
        this.add = p + '-' + c + '-' + d
      },
      choseTime() {
        this.dateTimeVisible = true
      },
      dateTimeMouseout() {
        this.dateTimeVisible = false
      },
      pickTime(h, m) {
        console.log('h,{},m,{}', h, m)
        this.time = ''
        this.time = h + ':' + m
      }
    }
  }

</script>
<style scoped>


</style>
