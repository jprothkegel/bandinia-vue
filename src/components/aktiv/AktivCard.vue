<template>
  <v-card class="elevation-4 transparent">
    <v-img
    :src=image
    aspect-ratio="2.75"
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
        {{this.description}}
    </v-card-text>
    </v-slide-y-transition>
  </v-card>

</template>

<script>
    export default{
        name: 'AktivCard',
        data: () => ({
          show: false
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
            }
        }

    }
</script>

