<template>
  <div class="home">
    <div class="text-box">{{ percentage }} %</div>
    <div class="flex items-center h-screen w-full bg-teal-lighter">
      <div
        class="progress-box relative w-full m-8 rounded shadow-lg md:max-w-screen-md md:mx-auto h-4/6 border-solid border-black"
      >
      <div class="inner" :style="cssProgress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      percentage: 10
    }
  },
  computed: {
    cssProgress() {
      return {
        'height': `${(100 - this.percentage)}%`
      }
    }
  },
}
</script>

<style lang="scss">
body {
  background: url("@/assets/background.webp") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.home {
  position: relative;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 70%, rgba(0,0,0,1) 100%);
}

.text-box {
  width: 100%;
  top: 30%;
  position: absolute;
  text-align: center;
  color: rgb(19, 19, 19);
  font-size: 9em;
  z-index: 10;
}

.progress-box {
  background: url("@/assets/inner.webp") no-repeat top;
  background-size: cover;
  filter: grayscale(0%); 
  border-width: 5px;
  border-top-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-left-width: 5px;
}

.inner {
  // height: 90%;
  background: url("@/assets/inner.webp") no-repeat top;
  background-size: cover;
  filter: grayscale(100%) contrast(30%);
}
</style>