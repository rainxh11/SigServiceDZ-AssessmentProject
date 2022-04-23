<template>
  <v-container>
    <v-card-title>
      <div v-if="isFetching">
        <v-progress-circular indeterminate/>
      </div>
      <div v-else class="font-weight-regular text-h4">
      {{ contacts.length }} Contact(s)
      </div> 
      <v-spacer/>
      <v-text-field
          v-model="search"
          class="ml-2 mr-2"
          label="Search"
          outlined
          prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-card-title>
    <v-row v-if="isFetching" >
      <v-skeleton-loader
          v-for="index in 50" :key="index"
          width="270"
          class="pa-2 mx-auto"
          type="card"
      ></v-skeleton-loader>
    </v-row>
    <v-row class="mx-auto">
      <contact-item  
      v-for="item in filtered" 
      :key="item.id"  
      :contact="item">
      </contact-item>
    </v-row>
  </v-container>
</template>

<script  lang="ts">
  import ContactItem from '@/components/ContactItem.vue'

  import { useContacts } from '@/useContracts'
  import Vue from "vue"

  export default Vue.extend({
    name: 'ContactsView',
    components: { ContactItem },
    setup() {
      const {
          isFetching,
          search,
          filtered,
          error,
          contacts
        } = useContacts()

      return {
        isFetching,
        contacts,
        error,
        filtered,
        search
      }
    },
  })
</script>
