<template lang="pug">
  a.menu-button(@click="toggleTopNav()")
    span.menu-button-bar
    span.menu-button-bar
    span.menu-button-bar
</template>

<script>
export default {
  methods: {
    toggleTopNav() {
      const header = document.querySelector("a.menu-button");
      const menuButton = document.querySelector("header");

      header.classList.toggle("active");
      menuButton.classList.toggle("active");
    }
  }
};
</script>

<style lang="scss" scoped>
/* top navi for mobile */
.menu-button {
  @media screen and (min-width: 960px) {
    display: none;
  }

  cursor: pointer;
  display: block;
  height: 40px;
  position: fixed;
  right: 15px;
  top: 15px;
  width: 40px;
  z-index: 3;

  & .menu-button-bar {
    background: #ffffff;
    display: block;
    height: 2px;
    left: 5px;
    position: absolute;
    transition: all 0.2s;
    width: 30px;
    &:first-child {
      top: 10px;
    }
    &:nth-child(2) {
      top: 19px;
    }
    &:last-child {
      bottom: 10px;
    }
  }

  &.active {
    & .menu-button-bar {
      &:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}
</style>
