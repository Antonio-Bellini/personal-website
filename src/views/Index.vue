<template>
  <div class="app">
    <div class="app--home">
      <h1>{{ homeTitleOne }} {{ homeTitleTwo}} <br> {{ homeTitleThree}}</h1>
    </div>

    <div class="app--home--main">
      <Works />
    </div>
  </div>
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
