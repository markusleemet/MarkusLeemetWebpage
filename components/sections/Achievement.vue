<template lang="pug">
  b-container(fluid).achievement-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.achievements.title') }}
        b-img.section-image(src="~/assets/images/achievements.png")
        ResumeMenu(selectedOption="Saavutused")
      b-col(cols="12" sm="4" offset-sm="1").information-container#achievement-information-container
        AchievementItem(v-for="achievementItem in $t('resume.sections.achievements.items')" :key="achievementItem.name" :achievementItem="achievementItem")
</template>

<script lang="ts">
import { AchievementItem, ResumeMenu } from '~/components/items'

export default {
  name: 'Achievement',
  components: { ResumeMenu, AchievementItem }
}
</script>

<style lang="scss">
.achievement-component{
  .menu-item{
    background-color: #97d1ff;
  }
}
</style>
