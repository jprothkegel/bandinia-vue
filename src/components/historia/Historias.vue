<template>
    <v-flex>
        <h3 class="headline mb-0 centeredText">{{this.title}} </h3>
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
        names: [],
        cards: [],
        title: ''
    }),
    components: {
        Historia
    },
    created() {
        axiosConfig.get('/historypage')
        .then(response => {
            this.title = response.data.item.elements.title.value
            this.names = Object.keys(response.data.modular_content)
            for(let i = 0; i < this.names.length; i++){
                this.cards.push({
                    image: response.data.modular_content[this.names[i]].elements.image.value[0].url,
                    title: response.data.modular_content[this.names[i]].elements.title.value,
                    description: response.data.modular_content[this.names[i]].elements.description.value.slice(3,-4)
                })
            }
        })
    }
}
</script>

<style scoped>
    .centeredText {
        text-align: center;
        padding-top: 3%;
    }
</style>