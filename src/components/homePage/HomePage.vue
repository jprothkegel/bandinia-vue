<template>
    <v-flex>
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
            <h1 class="display-3 font-weight-thin mb-3">{{this.pageTitle}} </h1>
            <h4 class="headline">{{this.pageSubtitle}} </h4>
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
import {axiosConfig} from '../../main.js'
export default {
    data:() => ({
        pageTitle: '',
        pageSubtitle: '',
        cards: [],
        names: [],
        cardQuantity: 0

    }),
    created() {
        axiosConfig.get('/homepage')
        .then(response => {
          this.pageTitle = response.data.item.elements.title.value
          this.pageSubtitle = response.data.item.elements.subtitle.value.slice(3,-4)
          this.cardQuantity = response.data.item.elements.cards.value.length
          this.names = Object.keys(response.data.modular_content)
          for(let i=0; i < this.cardQuantity; i++){
            this.cards.push({
                icon: response.data.modular_content[this.names[i]].elements.icon.value,
                title: response.data.modular_content[this.names[i]].elements.title.value,
                description: response.data.modular_content[this.names[i]].elements.description.value.slice(3,-4)
            })
          }
        })
    }
}
</script>
