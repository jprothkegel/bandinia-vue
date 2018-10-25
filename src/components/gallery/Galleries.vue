<template>
    <v-flex>
        <h3 v-if="lang==='de'" class="headline mb-0 centeredText"> {{title}} </h3>
        <v-layout
          row
          wrap
          class="my-5"
          align-center
        >
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md12 v-for="card in cards" :key="card.title">
                            <gallery
                                :pictures= 'card.pictures'
                                :title= 'card.title'
                            ></gallery>
                        </v-flex>
                    </v-layout>   
                </v-container>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import Gallery from '@/components/gallery/Gallery'
import {axiosConfig} from '../../main.js'
export default {
    data:()=>({
        show: false,
        lang: ''
    }),
    components: {
        Gallery
    },
    created() {
        this.$store.dispatch('getGalleries')
        this.lang = this.$store.getters.lang
    },
    computed: {
        cards (){
            return this.$store.getters.galleries
        },
        title(){
            if(this.$store.getters.lang === 'de'){
                return 'Galerie'
            }
            else if(this.$store.getters.lang === 'es'){
                return 'Galería'
            }
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