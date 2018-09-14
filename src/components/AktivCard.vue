<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="4/3"
        :src=image
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-1 white--text"
            style="height: 100%;"
          >
            {{name}} <br>
            1 Sprecher<br>
            {{description}}
          </div>
        </v-expand-transition>
      </v-img>
      
    </v-card>
  </v-hover>
</template>

<script>
    export default{
        name: 'AktivCard',
        data: () => ({}),
        props: {
            image: {
                type: String
            },
            name: {
                type: String
            },
            description: {
                type: String
            }
        }

    }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>