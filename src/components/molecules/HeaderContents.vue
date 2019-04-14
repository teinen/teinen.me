<template lang="pug">
  nav.global-nav
    ul.global-nav-links
      HeaderLinkComponent(urlProp="/" titleProp="ABOUT")
      HeaderLinkComponent(urlProp="/skill" titleProp="SKILL")
      HeaderLinkComponent(urlProp="/work" titleProp="WORK")
      HeaderLinkComponent(urlProp="/accounts" titleProp="ACCOUNTS")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderLink from "@/components/atomic/HeaderLink.vue";

@Component({
  components: {
    HeaderLinkComponent: HeaderLink
  }
})
export default class HeaderContents extends Vue {}
</script>

<style lang="scss" scoped>
.global-nav {
  font-size: 1.5em;
  position: absolute;
  right: 60px;

  @media screen and (max-width: 960px) {
    display: none;
  }
}

.global-nav-links {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
