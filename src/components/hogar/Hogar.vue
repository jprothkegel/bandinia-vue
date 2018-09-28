<template>
    <v-flex>
        <v-layout
        column
        wrap
        class="my-5"
        align-center
        >
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                <div class="headline text-xs-center">{{this.title}} </div>
                                </v-card-title>
                                <v-card-text>
                                    {{this.desc1}}
                                </v-card-text>
                                <v-card-text>
                                    {{this.desc2}}
                                </v-card-text>
                                <v-card-text>
                                    {{this.desc3}}
                                </v-card-text>
                            </v-card>
                            </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>

        <v-carousel>
            <v-carousel-item
            v-for="(picture,i) in pictures"
            :key="i"
            :src="picture.src"
            ></v-carousel-item>
        </v-carousel>
    </v-flex>
</template>

<script>
  import {axiosConfig} from '../../main.js'
  export default {
    data: () => ({
        pictures: [],
        title: '',
        desc1: '',
        desc2: '',
        desc3: '',
        names: []
    }),
    created () {
        axiosConfig.get('/heimpage')
        .then(response => {
            this.title = response.data.item.elements.title.value
            this.desc1 = response.data.item.elements.desc1.value.slice(3,-4)
            this.desc2 = response.data.item.elements.desc2.value.slice(3,-4)
            this.desc3 = response.data.item.elements.desc3.value.slice(3,-4)
            this.names = Object.keys(response.data.modular_content)
            for(let i = 0; i<this.names.length;i++){
                this.pictures.push({
                    src:response.data.modular_content[this.names[i]].elements.picture.value[0].url
                })
            }
        })
    }
  }
</script>