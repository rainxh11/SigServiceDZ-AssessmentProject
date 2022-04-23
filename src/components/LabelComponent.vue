
<script lang="ts">
export default {
  name: 'InfoItem',
  props: {
    value:{type: String},
    icon: {type: String},
    text: {type: String},
  }
}
</script>

<template>
 <v-col >
   <v-row no-gutters  class="align-center">
     <v-col cols="2">
       <v-icon class="px-2">{{ icon }}</v-icon>
     </v-col>
       <v-col cols="10" >
           <span class="body-1 grey--text" >{{ text }}</span><br>
           <span>{{ value }}</span>
       </v-col>
   </v-row>
 </v-col>
</template>