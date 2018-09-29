<template>
    <v-flex>
        <v-progress-circular v-if="this.$store.getters.loading" class="progress" indeterminate :size="70" :width="7" color="indigo"></v-progress-circular>

        <v-parallax
            dark
            :src="require('../../assets/Andinia.png')"
            height="770"
        >
            <v-layout
            align-center
            column
            justify-center
            >
            <h1 class="display-3 font-weight-thin mb-3">{{pageTitle}} </h1>
            <h4 class="headline">{{pageSubtitle}} </h4>
            </v-layout>
        </v-parallax>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4 v-for="card in cards" :key='card.id'>
                  <v-card class="elevation-1 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">{{card.icon}}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{card.title}}</div>
                    </v-card-title>
                    <v-card-text>
                      {{card.description}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                
                
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>

export default {
    data:() => ({
    }),
    created(){
      this.$store.dispatch('getHomePage')
    },
    computed: {
      pageTitle (){
        return this.$store.getters.homePage.pageTitle
      },
      pageSubtitle (){
        return this.$store.getters.homePage.pageSubTitle
      },
      cards (){
        return this.$store.getters.homePage.cards
      }
    }
}
</script>
