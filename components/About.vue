<template lang="pug">
  b-container(fluid).about-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 Minust
        ResumeMenu(selectedOption="Minust")
      b-col(cols="12" sm="6").information-container
        p '<span>Lorem ipsum dolor </span>'
</template>

<script lang="ts">
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about-component{
  .menu-item{
    background-color: #d2f5e3;
  }
}
</style>
