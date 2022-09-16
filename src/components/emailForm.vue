<template>
    <div class="app--home--main--contact">
        <h2>{{ contactTitle }}</h2>
        <p>{{ contactParagraphOne }} <br> {{ contactParagraphTwo }}</p>
        <div class="emailForm">
            <form ref="form" @submit.prevent="sendEmail">
                <label>Name</label>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your full name"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="email@example.com"
                    required
                />

                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject of the email"
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    cols="5" rows="10"
                    required>
                </textarea>

                <input type="submit" value="Send">
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'email_form',
  data () {
    return {
      contactTitle: 'Get in Touch!',
      contactParagraphOne: 'Send me an email!',
      contactParagraphTwo: 'I will answer as soon as possible.'
    }
  },
  methods: {
    sendEmail () {
      emailjs.sendForm('service_10vze6s', 'template_ss3t5tb', this.$refs.form, 'L7QCbjXWoWB4UDpK7')
        .then((result) => {
          alert('Email sent', result.text)
        }, (error) => {
          alert('It looks like something has gone wrong...', error.text)
        })
    }
  }
}
</script>
