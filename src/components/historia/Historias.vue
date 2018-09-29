<template>
    <v-flex>
        <h3 class="headline mb-0 centeredText">{{title}} </h3>
        <v-layout
          row
          wrap
          class="my-5"
          align-center
        >
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md6 v-for="card in cards" :key="card.title">
                            <historia
                                :image= 'card.image'
                                :title= 'card.title'
                                :description = 'card.description'
                            ></historia>
                        </v-flex>
                    </v-layout>   
                </v-container>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import Historia from '@/components/historia/Historia'
import {axiosConfig} from '../../main.js'
export default {
    data:()=>({
        show: false,
    }),
    components: {
        Historia
    },
    created() {
        this.$store.dispatch('getHistories')
    },
    computed: {
        title(){
            return this.$store.getters.historias.title
        },
        cards(){
            return this.$store.getters.historias.cards
        }
    }
}
</script>

<style scoped>
    .centeredText {
        text-align: center;
        padding-top: 3%;
    }
</style>