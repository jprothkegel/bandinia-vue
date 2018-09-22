<template>
    <v-content>
        <v-parallax
            dark
            src='https://assets-us-01.kc-usercontent.com:443/c966dec3-e768-00a1-84e8-f18a647729b5/89dfe21d-e158-4ed3-ad44-6a57e049ddc9/Andinia.png'
            height="770"
        >
            <v-layout
            align-center
            column
            justify-center
            >
            <h1 class="display-2 font-weight-thin mb-3">{{this.headline}} </h1>
            <h4 class="subheading">{{this.body_text}} </h4>
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
                <v-flex xs12 md4>
                  <v-card class="elevation-1 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-1 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-1 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>



    </v-content>

    
</template>

<script>
import axios from 'axios'
export default {
    data:() => ({
        picture: '',
        body_text: '',
        headline: ''
    }),
    created() {
        axios.get('https://deliver.kenticocloud.com/c966dec3-e768-00a1-84e8-f18a647729b5/items/hello_headless_world')
        .then(response => {
            this.picture = response.data.item.elements.picture.value[0].url
            this.body_text = response.data.item.elements.body_text.value.slice(3,-4)
            this.headline = response.data.item.elements.headline.value
        })
    }
}
</script>
