<template>
  <header>
    <span class="title">{{ title }}</span>

    <!-- Normal header -->
    <nav>
      <ul>
        <li v-for="(v, i) in headerContents" :key="i">
          <router-link :to=v.url>{{ v.title }}</router-link>
        </li>
      </ul>
    </nav>

    <!-- Toggle nav button for tablet/mobile -->
    <TopNavButtonComponent />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNavButton from "@/components/atomic/TopNavButton.vue";

@Component({
  components: {
    TopNavButtonComponent: TopNavButton
  }
})
export default class Header extends Vue {
  data() {
    return {
      title: "teinen.github.io",
      headerContents: [
        { title: "ABOUT", url: "/" },
        { title: "SKILL", url: "/skill" },
        { title: "CAREER", url: "/career" },
        { title: "WORK", url: "/work" }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  background-color: #28385e;
  border-bottom: 8px solid #516c8d;
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 60px;
  position: fixed;
  top: 0;
  width: 100vw;
  transition: height 0.3s;

  /* Title position for PC */
  @media screen and (min-width: 960px) {
    justify-content: start;
  }

  .title {
    color: #ffffff;
    font-size: 1.8em;

    /* For small display (e.g. iPhone SE) */
    @media screen and (max-width: 320px) {
      font-size: 1.5em;
    }

    /* For tablet */
    @media screen and (min-width: 960px) {
      font-size: 2.3em;
    }
  }
}

/* navigation */
@mixin active-link($width: 0) {
  border-bottom: 2px solid #ffffff;
  content: "";
  display: block;
  width: $width;
}

nav {
  font-size: 1.5em;
  position: absolute;
  right: 60px;

  @media screen and (max-width: 960px) {
    display: none;
  }

  ul {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 0 0 20px;

      a {
        color: #ffffff;
        text-decoration: none;

        &::after {
          @include active-link();
          transition: all 0.3s;
        }

        &:hover::after {
          width: 100%;
        }

        /* active link */
        &.nuxt-link-exact-active {
          &::after {
            @include active-link(100%);
          }
        }
      }
    }
  }
}
</style>
