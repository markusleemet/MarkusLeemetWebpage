<template lang="pug">
.achievement-item-component.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name {{ achievementItem.name }}
      p.achievement-description {{ achievementItem.description }}
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
