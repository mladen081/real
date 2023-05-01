<template>
  <div class="simple">
    <h1>Create an event</h1>
    <form>
      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />

      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import BaseInput from '../../components/BaseInput.vue'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  },
  components: { BaseInput }
}
</script>

<style scoped>
.simple {
  text-align: left;
}
</style>
