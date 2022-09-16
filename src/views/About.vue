<template>
  <div class="app">
    <div class="app--about">
      <div class="app--about--main">
        <h4>{{ aboutTitle }}</h4>
        <div class="app--about--main--info">
          <p>{{ aboutText }}</p>
          <div class="profileImgContainer">
            <img class="profileImg" src="../assets/images/content/profile_pic.webp" alt="profile image" />
          </div>
        </div>

        <Skills />
      </div>
    </div>
  </div>
</template>

<script>
import Skills from '@/components/skills.vue'
export default {
  name: 'about_page',
  data () {
    return {
      aboutTitle: 'What about me?',
      aboutText: 'I\'m Antonio, a 17 years old student of computer science here in Turin.'
    }
  },
  components: {
    Skills
  }
}
</script>
