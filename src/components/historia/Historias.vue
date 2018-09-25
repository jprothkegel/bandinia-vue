<template>
    <v-flex>
        <v-layout
          row
          wrap
          class="my-5"
          align-center
        >
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md6>
                            <historia></historia>
                        </v-flex>
                    </v-layout>   
                </v-container>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import Historia from '@/components/historia/Historia'
export default {
    data:()=>({
        show: false
    }),
    components: {
        Historia
    }
}
</script>
