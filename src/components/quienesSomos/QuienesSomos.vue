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

        <v-parallax 
        :src="require('../../assets/qs1.jpeg')"
        >
            <v-layout
            align-center
            column
            justify-center
            >
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
        title:'',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
        desc5: '',
        picture: ''

    }),
    created() {
        axiosConfig.get('/whowearepage')
        .then(response => {
            this.title = response.data.item.elements.title.value
            this.desc1 = response.data.item.elements.description1.value.slice(3,-4)
            this.desc2 = response.data.item.elements.description2.value.slice(3,-4)
            this.desc3 = response.data.item.elements.description3.value.slice(3,-4)
            this.desc4 = response.data.item.elements.description4.value.slice(3,-4)
            this.desc5 = response.data.item.elements.description5.value.slice(3,-4)
        })
    }
}
</script>

