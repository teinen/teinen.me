<template>
  <header>
    <!-- Header title -->
    <HeaderTitleComponent titleProp="teinen.me" />

    <!-- Header contents -->
    <HeaderContentsComponent />

    <!-- Top navi button -->
    <TopNavButtonComponent />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTitle from "@/components/atomic/HeaderTitle.vue";
import TopNavButton from "@/components/atomic/TopNavButton.vue";
import HeaderContents from "@/components/molecules/HeaderContents.vue";

@Component({
  components: {
    HeaderTitleComponent: HeaderTitle,
    TopNavButtonComponent: TopNavButton,
    HeaderContentsComponent: HeaderContents
  }
})
export default class Header extends Vue {}
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
  transition: height 0.3s;
  top: 0;
  width: 100vw;
  z-index: 9999;

  /* Title position for PC */
  @media screen and (min-width: 960px) {
    justify-content: start;
  }
}
</style>
