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

        <h3 class="headline mb-0 centeredText">Füchse</h3>
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
        vorstand: [],
        nvorstand: [],
        burschen: [],
        nburschen: [],
        fuxen: [],
        nfuxen: [],
        show: false
    }),
    created() {
        axiosConfig.get('/vorstand')
        .then(response => {
            this.nvorstand = Object.keys(response.data.modular_content)
            for (let i = 0; i<this.nvorstand.length;i++){
                this.vorstand.push({
                    title: response.data.modular_content[this.nvorstand[i]].elements.title.value,
                    name: response.data.modular_content[this.nvorstand[i]].elements.name.value,
                    desc: response.data.modular_content[this.nvorstand[i]].elements.desc.value,
                    picture: response.data.modular_content[this.nvorstand[i]].elements.picture.value[0].url,
                })
            }
        }),
        axiosConfig.get('/burschen')
        .then(response => {
            this.nburschen = Object.keys(response.data.modular_content)
            for (let i = 0; i<this.nburschen.length;i++){
                this.burschen.push({
                    title: response.data.modular_content[this.nburschen[i]].elements.title.value,
                    name: response.data.modular_content[this.nburschen[i]].elements.name.value,
                    desc: response.data.modular_content[this.nburschen[i]].elements.desc.value,
                    picture: response.data.modular_content[this.nburschen[i]].elements.picture.value[0].url,
                })
            }
        }),
        axiosConfig.get('/fuxen')
        .then(response => {
            this.nfuxen = Object.keys(response.data.modular_content)
            for (let i = 0; i<this.nfuxen.length;i++){
                this.fuxen.push({
                    title: response.data.modular_content[this.nfuxen[i]].elements.title.value,
                    name: response.data.modular_content[this.nfuxen[i]].elements.name.value,
                    desc: response.data.modular_content[this.nfuxen[i]].elements.desc.value,
                    picture: response.data.modular_content[this.nfuxen[i]].elements.picture.value[0].url,
                })
            }
            console.log(this.fuxen)
        })
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