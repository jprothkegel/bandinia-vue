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
                                <div class="headline text-xs-center">Nuestro Hogar</div>
                                </v-card-title>
                                <v-card-text>
                                    Somos un grupo de estudiantes ex-alumnos de colegios alemanes, que vivimos
                                    juntos con el objetivo de mantener el idioma y la cultura alemana.
                                    Nuestra organización fue fundada en 1926 con este mismo objetivo, 
                                    que hemos mantenido hasta el día de hoy.
                                </v-card-text>
                                <v-card-text>
                                    Nuestra misión es dar a los estudiantes que vienen a estudiar a Santiago un
                                    espacio donde puedan desenvolverse de la mejor manera posible en los estudios,
                                    además de poder mantener y mejorar el idioma alemán de muchas maneras.
                                </v-card-text>
                                <v-card-text>
                                    En nuestra casa, nosotros nos organizamos para poder vivir más cómodamente. 
                                    Todos debemos cumplir con ciertas tareas para aportar a una mejor convivencia. 
                                    Esto también nos ayuda a asumir desafíos y a aprender por medio de ellos. 
                                    Con nosotros, tendrás un grupo en el cual podrás encontrar ayuda siempre que 
                                    lo necesites. Entre nosotros nunca te sentirás solo, y tendrás siempre un 
                                    grupo de amigos con quienes pasar un buen rato.
                                </v-card-text>
                            </v-card>
                            </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>

        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </v-flex>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>