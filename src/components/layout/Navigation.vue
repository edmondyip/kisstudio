<template>
  <nav itemtype="http://www.schema.org/SiteNavigationElement">
    <div class="wrapper">
      <div itemprop="name" v-for="link in items" :id="link.name" :key="link.id">
        <router-link class="link" :to="link.path">{{link.name}}</router-link>
        <transition name="fade">
          <router-link class="back-home" v-if="link.name === currentPosition" to="/">Home</router-link>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        items: [],
        ignoreList: ['error', 'home']
      }
    },
    created: function () {
      let self = this
      this.$router.options.routes.forEach(route => {
        if (self.ignoreList.indexOf(route.name) == -1) {
          this.items.push({
            name: route.name,
            path: route.path
          })
        }
      })
    }
  }

</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    left: 0;
    right: 0;
    margin: 20px auto;
    display: flex;
    height: 100%;
    width: 100%;
    pointer-events: none;
    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      div {
        display: block;
        position: absolute;
        .link {
          text-transform: uppercase;
          font-size: 4rem;
          text-decoration: none;
          font-family: 'Oswald', sans-serif;
          pointer-events: all;
          color: #cccccc;
          transition: .5s;
          &:hover {
            color: #999999;
            cursor: pointer;
          }
          &.router-link-active {
            color: #666666;
            pointer-events: none;
          }
        }
        .back-home {
          display: block;
          position: absolute;
          text-align: center;
          text-decoration: none;
          pointer-events: all;
          font-size: 1.5rem;
          line-height: 1rem;
          left: 0;
          right: 0;
          &:hover {
            color: #999999;
          }
        }
      }
    }
    #about {
      left: 50%;
      transform: translateX(-50%);
    }
    #service {
      top: 50%;
      transform: translateY(-50%) rotate(270deg);
    }
    #portfolio {
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      right: -20px;
    }
    #contact {
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      .back-home {
        margin-top: -70px;
      }
    }
  }

</style>
