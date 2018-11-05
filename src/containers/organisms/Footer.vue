<template>
  <footer>
    <div class="social">
      <!-- Twitter icon -->
      <SocialIconComponent
        urlProp="https://twitter.com/tei_nen"
        iconImageProp="twitter.svg"
        altProp="Twitter"
      />
      <!-- GitHub icon -->
      <SocialIconComponent
        urlProp="https://github.com/teinen"
        iconImageProp="github.png"
        altProp="GitHub"
      />
    </div>

    <!-- Copyright -->
    <CopyrightComponent copyrightProp="© 2018 Akira Kanno" />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SocialIcon from "@/components/atomic/SocialIcon.vue";
import Copyright from "@/components/atomic/Copyright.vue";

@Component({
  components: {
    SocialIconComponent: SocialIcon,
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
  position: absolute;
  width: 100vw;
}

.social {
  margin-bottom: 6px;
}
</style>
