<template lang="pug">
  .resume-page
    About
    Education
    Experience
    Achievement
    Skills
    Interests
</template>

<script lang="js">
import { About, Achievement, Education, Experience, Skills, Interests } from '../components/sections'

import og from '~/static/mina_og.jpg'

export default {
  name: 'Resume',
  components: { Interests, Skills, Achievement, Experience, Education, About },
  mounted () {
    this.$ga.page('/')
  },
  head () {
    return {
      title: 'Markus Leemet resume',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Markus Leemet resume'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: og
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.resume-page {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;

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

    @media (max-width: 576px) {
      position: relative;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    word-break: break-word;
  }

  .information-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .section-image {
    max-width: 100px;
  }

  .custom-item {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .custom-item-name {
      font-weight: bold;
    }

    .custom-item-date {
      color: #2CBFAA;
      position: relative;
      margin-left: 1.4rem;

      &::before {
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
  }

  a {
    color: black;

    &:hover {
      color: #037171;
      text-decoration: none;
    }
  }
}
</style>
