<template lang="pug">
  .interest-item-component.custom-item
    h3.custom-item-name
      font-awesome-icon(:icon="['fas', interestItem.fontAwesomeIcon]")
      |  {{ interestItem.name }}
    p {{ interestItem.description }}
    a(:href="interestItem.link" target="_blank" v-if="interestItem.link").interest-link
      font-awesome-icon(:icon="['fas', 'link']")
      |  {{ interestItem.link }}

</template>

<script lang="js">
export default {
  name: 'InterestItem',
  props: {
    interestItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.interest-item-component {
  word-break: break-all;
  .interest-link{
    color: #2CBFAA;
  }
}
</style>
