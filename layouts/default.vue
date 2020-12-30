<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <transition name="fade" appear>
      <v-main>
        <v-container fill-height>
          <nuxt />
        </v-container>
      </v-main>
    </transition>
    <v-footer app absolute rounded padless>
      <v-card flat tile class="text-center c-footer">
        <v-card-text class="pa-3">
          <strong class="accent--text">&copy;</strong> {{ new Date().getFullYear() }} - <strong><a :href="me" style="text-decoration: none;">GeopJr</a></strong> with <v-icon class="accent--text" medium>
            mdi-heart
          </v-icon>,
          <v-icon class="accent--text" medium>
            mdi-vuejs
          </v-icon> and <v-icon class="accent--text" medium>
            mdi-vuetify
          </v-icon>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Routes from '@/assets/routes.json'

export default {
  data () {
    return {
      drawer: false,
      me: 'https://geopjr.xyz/',
      title: 'Argyle',
      items: Routes
    }
  }
}
</script>

<style lang="less">
.c-footer {
  width: 100%;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
.v-card__title {
  word-break: break-word !important;
}
html {
  overflow: auto !important;
}
</style>
