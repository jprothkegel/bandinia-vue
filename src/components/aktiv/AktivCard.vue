<template>
  <v-card class="elevation-1 transparent">
    <v-img
    :src=image
    aspect-ratio="0.9"
    ></v-img>
    <v-card-actions>
        <v-card-text class="font-weight-black">{{this.title}}</v-card-text>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
    <v-card-text v-show="show">
        {{ this.name}}<br>
        {{this.description}}
    </v-card-text>
    </v-slide-y-transition>
  </v-card>

</template>

<script>
    export default{
        name: 'AktivCard',
        data: () => ({
          show:false
        }),
        props: {
            image: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            },
            title: {
              type: String
            }
        }

    }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>