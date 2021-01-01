<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="tool in tools"
      :key="tool.name"
      cols="12"
      md="4"
      sm="6"
    >
      <v-card elevation="2" outlined class="card-outter" height="100%">
        <v-card-title>
          <v-icon class="accent--text mr-2">
            mdi-{{ tool.icon }}
          </v-icon>
          {{ tool.name.toUpperCase() }}
          <v-spacer />
          <v-icon v-if="tool.external" class="accent--text">
            mdi-signal-variant
          </v-icon>
        </v-card-title>
        <v-card-text class="text--primary">
          <div>{{ tool.desc }}</div>
        </v-card-text>
        <v-spacer />
        <v-card-actions class="card-actions pa-4">
          <v-dialog
            v-model="tool.dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                USE ME
              </v-btn>
            </template>
            <component :is="tool.name.split(' ').join('')" :tool="tool" />
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Info from '@/components/beautify/info.json'

import Json from '@/components/beautify/Json'
import Javascript from '@/components/beautify/Javascript'
import Html from '@/components/beautify/Html'
import Css from '@/components/beautify/Css'
import Less from '@/components/beautify/Less'
import Scss from '@/components/beautify/Scss'
import Markdown from '@/components/beautify/Markdown'
import Typescript from '@/components/beautify/Typescript'
import Flow from '@/components/beautify/Flow'
import Angular from '@/components/beautify/Angular'
import Vue from '@/components/beautify/Vue'
import Graphql from '@/components/beautify/Graphql'
import Yaml from '@/components/beautify/Yaml'
import Php from '@/components/beautify/Php'

export default {
  components: {
    Json,
    Javascript,
    Html,
    Css,
    Less,
    Scss,
    Markdown,
    Typescript,
    Flow,
    Angular,
    Vue,
    Graphql,
    Yaml,
    Php
  },
  data: () => ({
    tools: Info
  }),
  head () {
    const title = 'Beautify'
    const desc = title + 'Tools'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { name: 'og:description', content: desc },
        { name: 'og:title', content: title + ' - Argyle' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.card-outter {
    position: relative;
    padding-bottom: 50px;
    overflow-x: auto;
    .card-actions {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>
