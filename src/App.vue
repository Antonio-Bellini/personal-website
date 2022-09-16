<template>
  <Nav />
  <router-view />
  <Footer />
  <EmailForm />
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import EmailForm from '@/components/emailForm.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    EmailForm
  }
}

</script>

<style lang="scss">
@import '@/assets/style/css/main.css';
</style>
