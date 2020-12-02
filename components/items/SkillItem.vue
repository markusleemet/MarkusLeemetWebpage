<template lang="pug">
  a.skill-item-component.custom-item(:href="skillItem.link" target="_blank")
    b-img(src="~/assets/images/hexagon.png")
    .skill-name-and-description
      h4.custom-item-name {{ skillItem.name }}
      img.skill-item-logo(:src="skillItem.icon")
</template>

<script lang="js">
export default {
  name: 'SkillItem',
  props: {
    skillItem: Object
  }
}
</script>

<style lang="scss">
.skill-item-component {
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  max-width: 200px;
  margin: 0 !important;
  transition: top .1s;
  top: 0;
  @media (max-width: 1200px) {
    margin-bottom: 1rem !important;
  }

  &:hover {
    color: black !important;
    top: -10px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  .skill-name-and-description {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .skill-item-logo {
    max-width: 25%;
  }
}
</style>
