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
  >
    <v-layout justify-center row wrap>
      <v-card
        flat
        tile
        class="black white--text text-xs-center"
      >
        <v-card-text>
          
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Burschenschaft Andinia<br>
          Estamos ubicados en Bustos 2044, Providencia, a pasos de la calle Pedro de Valdivia<br>
          Fono: +56 2 2716 8917<br>
          Email: andiniachile@gmail.com<br>
          <v-btn icon>
            <v-icon>info</v-icon>
          </v-btn>
          <static-map zoom='13' center='Bustos+2044,Providencia,Chile' ></static-map>

        </v-card-text>

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
import StaticMap from 'vue-static-map'
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
    components: {
      StaticMap
    },
  name: 'App'
}
</script>
