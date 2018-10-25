<template>
  <v-card class="elevation-4 transparent">
    <v-card-title primary-title align-center>
        <h3 class="headline mb-0 centeredText">{{this.title}}</h3>
    </v-card-title>

    <v-carousel>
        <v-carousel-item
        v-for="(picture,i) in pictures"
        :key="i"
        :src="picture"
        ></v-carousel-item>
    </v-carousel>
  </v-card>

</template>


<script>
  export default {
    data: () => ({
      show: false
    }),
    props: {
      title: {
        type: String
      },
      pictures: {
        type: Array
      }
    }
  }
</script>

<style scoped>
    .centeredText {
        text-align: center;
    }
</style>