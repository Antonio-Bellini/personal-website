<template>
    <div class="app--footer">
        <h3>{{ footerTitle }} <button class="showEmailForm">Get in Touch!</button></h3>
        <p>
            <a class="github social" href="https://github.com/Antonio-Bellini" target="_blank">
                GitHub
            </a>

            <a class="linkedin social" href="https://www.linkedin.com/in/antonio-bellini-621749250/" target="_blank">
                Linkedin
            </a>
        </p>
    </div>
</template>

<script>
export default {
  name: 'footer_block',
  data () {
    return {
      footerTitle: 'Want to see more? Get in Touch!'
    }
  }
}
</script>
