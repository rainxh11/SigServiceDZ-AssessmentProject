<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <div class="text-h5">My Contacts App</div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
  }),
})
</script>
