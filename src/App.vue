<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="green darken-4"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="./assets/wappenblanco.png"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn depressed small flat round>
        Quienes Somos
      </v-btn>
      <v-btn depressed small flat round>
        Historia
      </v-btn>
      <v-btn depressed small flat round>
        Nuestro Hogar
      </v-btn>
      <v-btn depressed small flat round>
        Activos
      </v-btn>
      <v-btn depressed small flat round>
        Galeria
      </v-btn>

    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
    dark
    height="auto"
    color="black"
    inset
    style='z-index:100000000;'
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
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Contacts' },
        { icon: 'history', text: 'Frequently contacted' },
        { icon: 'content_copy', text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ]
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

