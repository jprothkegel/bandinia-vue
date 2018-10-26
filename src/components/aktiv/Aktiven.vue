<template>
    <v-container fluid grid-list-md style="min-heigth:0">
        <h3 class="headline mb-0 centeredText">Vorstand</h3>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex v-for='item in vorstand' :key='item.id' xs12 md3>
                <aktiv-card
                    :name = 'item.name'
                    :description = 'item.desc'
                    :image = 'item.picture'
                    :title = 'item.title'
                ></aktiv-card>
            </v-flex>
        </v-layout>
        
        <h3 class="headline mb-0 centeredText">Burschen</h3>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex v-for='item in burschen' :key='item.id' xs12 md3>
                <aktiv-card
                    :name = 'item.name'
                    :description = 'item.desc'
                    :image = 'item.picture'
                    :title = 'item.title'
                ></aktiv-card>
            </v-flex>
        </v-layout>

        <h3 class="headline mb-0 centeredText">Fuchsen</h3>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex v-for='item in fuxen' :key='item.id' xs12 md3>
                <aktiv-card
                    :name = 'item.name'
                    :description = 'item.desc'
                    :image = 'item.picture'
                    :title = 'item.title'
                ></aktiv-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {axiosConfig} from '../../main.js'
import AktivCard from '@/components/aktiv/AktivCard'
export default {
    data:() => ({
        show: false
    }),
    created() {
        this.$store.dispatch('getAktiven')
    },
    computed: {
        vorstand(){
            return this.$store.getters.aktiven.vorstand
        },
        burschen(){
            return this.$store.getters.aktiven.burschen
        },
        fuxen(){
            return this.$store.getters.aktiven.fuxen
        }
    },
    components: {
        AktivCard
    }
}
</script>

<style scoped>
    .centeredText {
        text-align: center;
        padding-top: 0.5%;
        padding-bottom: 0.5%; 
    }
</style>