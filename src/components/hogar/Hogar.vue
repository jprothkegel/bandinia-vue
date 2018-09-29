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
                                <div class="headline text-xs-center">{{title}} </div>
                                </v-card-title>
                                <v-card-text>
                                    {{desc1}}
                                </v-card-text>
                                <v-card-text>
                                    {{desc2}}
                                </v-card-text>
                                <v-card-text>
                                    {{desc3}}
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
    }),
    created () {
        this.$store.dispatch('getHeimPage')
    },
    computed: {
        title(){
            return this.$store.getters.heimPage.title
        },
        desc1(){
            return this.$store.getters.heimPage.desc1
        },
        desc2(){
            return this.$store.getters.heimPage.desc2
        },
        desc3(){
            return this.$store.getters.heimPage.desc3
        },
        pictures(){
            return this.$store.getters.heimPage.pictures
        }
    }
  }
</script>