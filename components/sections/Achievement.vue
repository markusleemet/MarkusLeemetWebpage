<template lang="pug">
  b-container(fluid).achievement-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.achievements.title') }}
        b-img.section-image(src="~/assets/images/achievements.png")
        ResumeMenu(selectedOption="Saavutused")
      b-col(cols="12" sm="4" offset-sm="1").information-container
        AchievementItem(v-for="achievementItem in $t('resume.sections.achievements.items')" :key="achievementItem.name" :achievementItem="achievementItem")
</template>

<script lang="ts">
export default {
  name: 'Achievement'
}
</script>

<style lang="scss">
.achievement-component{
  .menu-item{
    background-color: #f88a53;
  }
}
</style>
