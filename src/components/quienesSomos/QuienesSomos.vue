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

        <v-img :src=image aspect-ratio="1.8" class="elevation-5"></v-img>
       
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
                                <v-card-text>
                                    {{this.desc4}}
                                </v-card-text>
                                <v-card-text>
                                    {{this.desc5}}
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
    }),
    created() {
        this.$store.dispatch('getQS')
    },
    computed: {
        title(){
            return this.$store.getters.qs.title
        },
        desc1(){
            return this.$store.getters.qs.desc1
        },
        desc2(){
            return this.$store.getters.qs.desc2
        },
        desc3(){
            return this.$store.getters.qs.desc3
        },
        desc4(){
            return this.$store.getters.qs.desc4
        },
        desc5(){
            return this.$store.getters.qs.desc5
        },
        image(){
            return this.$store.getters.qs.image
        }
    }
}
</script>

