<template lang="pug">
.achievement-item-component.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name(v-html="achievementItem.name")
      p.achievement-description(v-html="achievementItem.description")
      p.custom-item-date(v-html="achievementItem.date")
</template>

<script lang="js">
export default {
  name: 'AchievementItem',
  props: {
    achievementItem: Object
  }
}
</script>

<style lang="scss">
.achievement-item-component{}
</style>
