<template lang="pug">
.resume-menu-component
  a(href="#" v-scroll-to="'.about-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Minust'}") Minust
  span {{ divider }}
  a(href="#" v-scroll-to="'.education-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Haridus'}") Haridus
  span {{ divider }}
  a(href="#" v-scroll-to="'.experience-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Kogemus'}") Kogemus
  span {{ divider }}
  a(href="#" v-scroll-to="'.achievement-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Saavutused'}") Saavutused
  span {{ divider }}
  a(href="#" v-scroll-to="'.skill-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Oskused'}") Oskused
</template>

<script lang="js">
export default {
  name: 'ResumeMenu',
  props: {
    selectedOption: String
  },
  data () {
    return {
      divider: ' / '
    }
  }
}
</script>

<style lang="scss">
.resume-menu-component{
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;
  a, span{
    color: black;
  }
}
</style>
