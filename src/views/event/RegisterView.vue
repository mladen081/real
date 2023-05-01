<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      // Call to API
      // If registered then redirect to event details

      this.$router.push({
        name: 'event-details'
        // params: { id: this.event.id }
      })
      // this.$router.go(-1)
    }
  }
}
</script>
