<template>
  <div class="fixed-bottom bg-dark">
    <div class="container">
      <div class="row my-4">
        <div class="col-12 col-lg-8 text-center">
            <h2>Mint will start on 10/2 6:00am (GMT+8)</h2>
        </div>
        <div class="col-12 col-lg-4 text-center">
            <h2>{{ time }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  props: ['endTime'],
  data: function() {
      return {
          time: '00 : 00 : 00 : 00',
          timer: null
      }
  },
  mounted() {
    this.count()
    this.timer = setInterval(() => {
      this.count();
    }, 1000);
  },
  methods: {
    count() {
        let t = new Date(this.endTime + ' GMT+08:00').getTime() - new Date().getTime();
        if (t > 0) {
            let d = Math.floor(t / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            let h = Math.floor(t / (1000 * 60 * 60) % 24).toString().padStart(2, '0');
            let m = Math.floor(t / (1000 * 60) % 60).toString().padStart(2, '0');
            let s = Math.floor(t / 1000 % 60).toString().padStart(2, '0');
            this.time = d + ' : ' + h + ' : ' + m + ' : ' + s;
        } else {
            clearInterval(this.timer);
        }
    }
  }
}
</script>

<style scoped>
h2 {
    color: #FBDA64;
}
</style>
