<template>
  <footer>
    <!-- Social icons -->
    <FooterSocialIconsComponent />

    <!-- Copyright -->
    <CopyrightComponent copyrightProp="2018 Akira Kanno" />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterSocialIcons from "@/components/molecules/FooterSocialIcons.vue";
import Copyright from "@/components/atomic/Copyright.vue";

@Component({
  components: {
    FooterSocialIconsComponent: FooterSocialIcons,
    CopyrightComponent: Copyright
  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  align-items: center;
  background-color: #454c50;
  border-top: solid 8px #6e777c;
  bottom: 0;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  flex-flow: column nowrap;
  height: 80px;
  justify-content: center;
  width: 100vw;
}
</style>
