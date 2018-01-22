<template>
  <div class="background-list">
    <div v-for="(image, index) in imageList" :style="imageCss(index)" :key="image.id"></div>
  </div>
</template>

<script>
  export default {
    name: 'Background',
    data: function () {
      return {
        pageOffside: {
          home: [0, 0],
          about: [0, 300],
          service: [500, 0],
          portfolio: [-500, 0],
          contact: [0, -300]
        },
        imageList: [{
            fileName: require('../../assets/img/dots1.svg'),
            effect: 10,
            width: 400,
            height: 400,
            positionX: 500,
            positionY: 100,
            blur: 2
          },
          {
            fileName: require('../../assets/img/dots2.svg'),
            effect: 30,
            width: 300,
            height: 450,
            positionX: 250,
            positionY: 220,
            blur: 0
          }
        ]
      }
    },
    methods: {
      imageCss: function (index) {
        return Object.assign(this.mouseEffect(this.imageList[index].effect), {
          background: 'url(' + this.imageList[index].fileName + ') no-repeat',
          width: this.imageList[index].width + 'px',
          height: this.imageList[index].height + 'px',
          top: this.imageList[index].positionY + this.pageOffside[this.currentPosition][1] + 'px',
          left: this.imageList[index].positionX + this.pageOffside[this.currentPosition][0] + 'px',
          filter: 'blur(' + this.imageList[index].blur + 'px)'
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .background-list {
    position: absolute;
    height: 100%;
    width: 100%;
    pointer-events: none;
    div {
      transition: .5s;
      position: absolute;
      background-size: contain;
    }
  }

</style>
