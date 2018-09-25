<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      temporary
      right
    >
      <v-list dense>
        <v-subheader>Menú</v-subheader>
        <v-list-tile :to="{name:'QuienesSomos'}">
          <v-list-tile-content>
            Quienes Somos
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name:'Historias'}">
          <v-list-tile-content>
            Historia
          </v-list-tile-content>
        </v-list-tile>
        
      <v-list-tile :to="{name:'Hogar'}">
          <v-list-tile-content>
            Nuestro Hogar
          </v-list-tile-content>
        </v-list-tile>

      <v-list-tile :to="{name:'Aktiven'}">
          <v-list-tile-content>
            Activos
          </v-list-tile-content>
        </v-list-tile>

      <v-list-tile>
          <v-list-tile-content>
            Galeria
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      :clipped-right="$vuetify.breakpoint.lgAndUp"
      color="green darken-4"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-avatar size="70px" tile class="pt-2" >
          <img
            src="./assets/Wappen-2.png"
            alt="Vuetify"
          >
        </v-avatar>
        <v-btn to="/" active-class small flat>Burschenschaft Andinia</v-btn>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/qs" active-class small flat>
          Quienes Somos
        </v-btn>
        <v-btn to="/historia" active-class small flat>
          Historia
        </v-btn>
        <v-btn to="/hogar" active-class small flat>
          Nuestro Hogar
        </v-btn>
        <v-btn to="/aktiven" active-class small flat>
          Activos
        </v-btn>
        <v-btn small flat>
          Galeria
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer
    dark
    height="auto"
    color="black"
    inset
  >
    <v-layout justify-center row wrap>
      <v-flex xs12 md6>
      <v-card
        flat
        tile
        class="black white--text"
      >

          <v-card-title primary-title>
            <div>
              <h3 justify-center class="display-1 mb-0 pl-4">Burschenschaft Andinia</h3>
            </div>
          </v-card-title>
          <v-card-text class="white--text pt-0 pl-5">
            Burschenschaft Andinia<br>
            Estamos ubicados en Bustos 2044, Providencia, a pasos de la calle Pedro de Valdivia<br>
            Fono: +56 2 2716 8917<br>
            Email: andiniachile@gmail.com<br>
            <v-btn icon>
              <v-icon>info</v-icon>
            </v-btn>
          </v-card-text>
      </v-card>
      </v-flex>
      
      <v-flex xs12 md6>
        <v-card flat tile class="black white--text text-xs-center">
          <v-card-text></v-card-text>
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3551653657214!2d-70.60827398454643!3d-33.440052204365415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf9da2ac2f79%3A0x3ecea332b6140656!2sBustos+2044%2C+Providencia%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1sen!2scl!4v1537147835094" width='400' frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </v-card>
      </v-flex >
      <v-card flat tile class="black white--text text-xs-center">
        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Burschenschaft Andinia</strong>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String
    }
  }
</script>
<script>
export default {
      data: () => ({
      dialog: false,
      drawer: null
    }),
  name: 'App'
}
</script>

<style scoped>
.map-responsive {
  overflow: hidden;
  padding-bottom: 30.25%;
  margin-right: 10%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>

