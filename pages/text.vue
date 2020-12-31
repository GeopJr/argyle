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
import Info from '@/components/text/info.json'

import Downcase from '@/components/text/Downcase'
import Upcase from '@/components/text/Upcase'
import Capitalize from '@/components/text/Capitalize'
import Reverse from '@/components/text/Reverse'
import CountWords from '@/components/text/CountWords'
import CountCharacters from '@/components/text/CountCharacters'
import Clappy from '@/components/text/Clappy'
import Mock from '@/components/text/Mock'

export default {
  components: {
    Downcase,
    Upcase,
    Capitalize,
    Reverse,
    CountWords,
    CountCharacters,
    Clappy,
    Mock
  },
  data: () => ({
    tools: Info
  })
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
