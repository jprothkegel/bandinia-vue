<template>
    <v-container fluid grid-list-md style="min-heigth:0">
        <h3 class="headline mb-0 centeredText">Burschen</h3>
        <v-layout row wrap>
            <v-flex v-for='item in items' :key='item.id' xs12 md3>
                <aktiv-card
                    :name = 'item.name'
                    :description = 'item.description'
                    :image = 'item.image'
                ></aktiv-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AktivCard from '@/components/AktivCard'
import axios from 'axios'

export default {
    data:() => ({
        items: []
    }),
    created() {
        axios.get('https://deliver.kenticocloud.com/c966dec3-e768-00a1-84e8-f18a647729b5/items/profile_test')
        .then(response => {
            let i = 0
            this.names = Object.keys(response.data.modular_content)
            for(i=0;i<this.names.length;i++){
                console.log(response.data.modular_content[this.names[i]].elements.profile_name.value.split('<p>'))
                this.items.push({
                    name: response.data.modular_content[this.names[i]].elements.profile_name.value.slice(3,-4),
                    description: response.data.modular_content[this.names[i]].elements.profile_description.value.slice(3,-4),
                    image: response.data.modular_content[this.names[i]].elements.profile_picture.value[0].url
                })
            }
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