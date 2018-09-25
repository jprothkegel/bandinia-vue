<template>
  <v-card class="elevation-1 transparent">
    <v-img
    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
    aspect-ratio="2.75"
    ></v-img>
    <v-card-actions>
        <v-card-text>Prueba</v-card-text>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
    <v-card-text v-show="show">
        I'm a thing. But, like most politicians, he promised more than he could deliver. 
        You won't have time for sleeping, soldier, not with all the bed making you'll be doing. 
        Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! 
        You're going to do his laundry? I've got to find a way to escape.
    </v-card-text>
    </v-slide-y-transition>
  </v-card>

</template>


<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>