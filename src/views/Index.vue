<template>
  <section class="home">
    <div class="home__title">
      <h1>{{ homeTitleOne }} <br> {{ homeTitleTwo}} <br> {{ homeTitleThree}}</h1>
    </div>

    <div class="home__works">
      <Works />
    </div>
  </section>
</template>

<script>
import Works from '@/components/works.vue'

export default {
  name: 'index_page',
  data () {
    return {
      homeTitleOne: 'Hi !',
      homeTitleTwo: 'I\'m a young student passionate about',
      homeTitleThree: 'web development'
    }
  },
  components: {
    Works
  }
}
</script>
