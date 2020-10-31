<template lang="pug">
.education-item-component.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name {{ educationItem.name }}
      h4.education-lead {{ educationItem.lead }}
      p {{ educationItem.description }}
      p.custom-item-date {{ educationItem.date }}
      p.education-location(v-html="educationItem.location")
</template>

<script lang="js">
export default {
  name: 'EducationItem',
  props: {
    educationItem: Object
  }
}
</script>

<style lang="scss">
.education-item-component{
  .education-location{
    color: #2CBFAA;
    position: relative;
    margin-left: 1.5rem;
    &::before{
      content: '';
      display: block;
      height: 1.2rem;
      width: 1.2rem;
      background-image: url("~assets/images/location.png");
      background-size: cover;
      position: absolute;
      left: -1.5rem;
      top: 0.2rem;
    }
  }
}
</style>
