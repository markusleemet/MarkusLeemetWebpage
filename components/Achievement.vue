<template lang="pug">
  b-container(fluid).achievement-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 Saavutused
        b-img.section-image(src="~/assets/images/achievements.png")
        ResumeMenu(selectedOption="Saavutused")
      b-col(cols="12" sm="6").information-container
        p '<span>Lorem ipsum dolor sit amet, cons</span>'
</template>

<script lang="ts">
export default {
  name: 'Achievement'
}
</script>

<style lang="scss">
.achievement-component{
  .menu-item{
    background-color: #e5c5b5;
  }
}
</style>
