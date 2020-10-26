<template lang="pug">
.resume-page
  Hero
  About
  Education
  Experience
  Achievement
  Skills
  Footer
</template>

<script lang="ts">
export default {
  name: 'resume'
}
</script>

<style lang="scss">
.resume-page{
  font-family: "Times New Roman", Times, serif;
  .menu-container {
    height: 100vh;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px){
      position: relative;
    }
  }
  h2{
    font-weight: 700;
    font-size: 2rem;
  }
  .information-container{
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section-image{
    max-width: 100px;
  }
}
</style>
