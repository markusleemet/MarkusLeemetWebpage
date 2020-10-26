<template lang="pug">
.education-item-component
  b-row(align-h="around")
    b-col(cols="12" sm="4")
      h3.education-name {{ educationItem.name }}
      p.education-date {{ educationItem.date }}
    b-col(cols="12" sm="6")
      h4.education-lead {{ educationItem.lead }}
      p {{ educationItem.description }}
      p.education-location {{ educationItem.location }}
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  .education-date{
    color: #2CBFAA;
    position: relative;
    margin-left: 1.4rem;
    &::before{
      content: '';
      display: block;
      height: 1rem;
      width: 1rem;
      background-image: url("~assets/images/calendar.png");
      background-size: cover;
      position: absolute;
      left: -1.4rem;
      top: 0.3rem;
    }
  }
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
  .education-name{
    position: relative;
    font-weight: bold;
  }
  img{
    display: inline;
  }
}
</style>
