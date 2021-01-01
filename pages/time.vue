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
import Info from '@/components/time/info.json'

import Currentunixms from '@/components/time/Currentunixms'
import Discordsnowflake from '@/components/time/Discordsnowflake'

export default {
  components: {
    Currentunixms,
    Discordsnowflake
  },
  data: () => ({
    tools: Info
  }),
  head () {
    const title = 'Time'
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
