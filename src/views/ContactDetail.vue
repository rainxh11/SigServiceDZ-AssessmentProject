<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-row class="mx-auto py-5 px-3 justify-center">
            <v-btn @click="goBack" text>
              <v-icon size="16" color="black">
                mdi-arrow-left
              </v-icon>
              <span class="text-body-1 ml-5 font-weight-medium overline">GO BACK TO CONTACT LIST</span>
            </v-btn>
          </v-row>
        </div>
        <v-card width="600" class="mx-auto py-5 px-3 justify-center">
          <v-row class="py-5" no-gutters >
            <v-col cols="12" md="4" sm="12">
              <v-img width="300" height="300" :src="contact.avatar"/>
            </v-col>
            <v-col cols="12" md="8" sm="12">
              <span class="pa-2 display-1">{{contact.first_name + ' ' + contact.last_name}}</span>
              <label-component icon="mdi-phone" text="Phone" :value="contact.phone_number"/>
              <label-component icon="mdi-cake" text="Birth Date" :value="contact.date_of_birth"/>
              <label-component icon="mdi-card-account-details" text="Social Number" :value="contact.social_insurance_number"/>
              <label-component icon="mdi-briefcase" text="Job" :value="contact.employment.title"/>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import router from "@/router"
import Vue from 'vue'
import { useContactById} from "@/useContracts"
import LabelComponent from "@/components/LabelComponent.vue"
 
export default Vue.extend({
  name: 'ContactDetail',
  components: { LabelComponent },
  setup() {
    const {
      isFetching,
      error,
      contact 
    } = useContactById(parseInt(router.currentRoute.params.id))

  return {
      isFetching,
      error,
      contact 
    }
  },
  methods:{
    goBack() {
      router.push('/')
    }
  }
})
</script>

