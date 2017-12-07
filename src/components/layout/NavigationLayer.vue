<template>
  <nav itemtype="http://www.schema.org/SiteNavigationElement">
    <router-link itemprop="name" tag="div" v-for="link in items" :id="link.name" :to="link.path" :key="link.id">
      {{link.name}}
      <transition name="fade">
          <router-link class="back-home" v-if="link.name === currentPosition" to="/">Home</router-link>
      </transition>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        items: [],
        ignoreList: ['error','home']
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
    div {
      display: block;
      position: absolute;
      text-transform: uppercase;
      font-size: 2rem;
      text-decoration: none;
      font-family: 'Oswald', sans-serif;
      pointer-events: all;
      color: #cccccc;
      transition: .5c;
      &:hover {
          color: #999999;
          cursor: pointer;
      }
      .back-home {
          display: block;
          text-align: center;
          text-decoration: none;
          &:hover {
              color: #999999;
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
      right: 0;
    }
    #contact {
      left: 50%;
      transform: translateX(-50%);
      bottom: 50px;
    }
  }
</style>
