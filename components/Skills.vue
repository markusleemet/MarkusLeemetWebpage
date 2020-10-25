<template lang="pug">
  b-container(fluid).skill-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 Oskused
        ResumeMenu(selectedOption="Oskused")
      b-col(cols="12" sm="6").information-container
        p '<span>Lorem ipsum dolor sit amet, cons</span>'
</template>

<script lang="ts">
export default {
  name: 'Skills'
}
</script>

<style lang="scss">
.skill-component{
  .menu-item{
    background-color: #b37d63;
  }
}
</style>
