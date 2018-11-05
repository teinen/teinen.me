<template>
  <div id="app">
    <HeaderComponent />

    <div class="container">
      <router-view></router-view>
    </div>

    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/containers/organisms/Header.vue";
import Footer from "@/containers/organisms/Footer.vue";

export default Vue.extend({
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: SmartFont;
  font-style: normal;
  src: url("./assets/fonts/smart-font-ui.otf");
}

html {
  font-family: SmartFont, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #dedede;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  height: calc(100vh - 100px);
}

.container {
  max-width: 940px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    max-width: 100vw;
    margin: 0 20px;
  }
}

section {
  height: 100%;
  margin: 100px 0;
}

.card {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px #ccc;
  height: calc(100vh - 200px);
  padding: 30px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}

h1 {
  color: #28385e;
  font-size: 3em;
  padding: 10px;

  &::after {
    border-bottom: 4px solid #28385e;
    content: "";
    display: block;
    width: 100%;
  }
}

/* tmp */
.sorry {
  font-size: 2.0em;
  font-weight: bold;
}
</style>
