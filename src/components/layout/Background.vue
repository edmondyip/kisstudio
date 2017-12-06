<template>
  <div class="background">
    <img src="../../assets/img/dots2.svg" :style="mouseEffect">
  </div>
</template>

<script>
  export default {
    name: 'Background',
    props: ['windowWidth', 'windowHeight'],
    data: function () {
      return {
        mousePositionX: 0,
        mousePositionY: 0
      }
    },
    computed: {
      imageOffsideX: function () {
        return (this.windowWidth - this.mousePositionX) / 25
      },
      imageOffsideY: function () {
        return (this.windowHeight - this.mousePositionY) / 25
      },
      mouseEffect: function () {
        return {transform: 'translateY(' + this.imageOffsideY + 'px) translateX(' + this.imageOffsideX + 'px)'}
      }
    },
    methods: {
      updatePosition: function (event) {
        this.mousePositionX = event.clientX
        this.mousePositionY = event.clientY
      }
    },
    created: function () {
      window.addEventListener('mousemove', this.updatePosition)
    },
    beforeDestroy: function () {
      window.removeEventListener('mousemove', this.updatePosition)
    }
  }
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    width: 150px;
    left: 250px;
    top: 200px;
    img {
        filter: blur(5px);
    }
  }
</style>
