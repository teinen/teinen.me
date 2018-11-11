<template>
  <div>
    <HeaderComponent />

    <div class="main">
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
@import "./assets/css/normalize.css";

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

.main {
  min-height: calc(100vh - 200px);
  margin: 100px auto auto auto;
  max-width: 940px;

  @media screen and (max-width: 960px) {
    max-width: 100vw;
    margin: 100px 20px auto 20px;
  }
}

.card {
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
}

/* tmp */
.sorry {
  font-size: 2em;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
</style>
