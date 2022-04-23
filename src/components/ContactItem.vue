<template>
  <v-card
      class="mx-3 my-3"
      width="300"
      hover
      @click="navigateToContact(contact.id)"
  >
    <v-img
        height="300"
        width="300"
        :src="contact.avatar"
    />
    <v-card-title class="pa-0">
      <v-col>
        {{ contact.first_name + ' ' + contact.last_name }}
        <v-row no-gutters class="align-center">
          <v-icon color="gray darken-2">
            mdi-email
          </v-icon>
          <span class="ml-2 font-weight-light grey--text body-2"> {{ contact.email }}</span>
        </v-row>
      </v-col>
    </v-card-title>
  </v-card>

</template>

<script lang="ts">
import Vue from 'vue'
import router from "@/router"

export default Vue.extend({
  name: 'ContactItem',
  props: {
    contact : {
      type: Object,
      required: true,
    }
  },
  methods: {
    navigateToContact(id: string) {
      router.push(`/contact/${id}`)
    }
  }
})
</script>
