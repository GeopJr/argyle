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
import Info from '@/components/encryption/info.json'

import Text2base64 from '@/components/encryption/Text2base64'
import Base642text from '@/components/encryption/Base642text'
import Md5 from '@/components/encryption/Md5'
import Text2aes from '@/components/encryption/Text2aes'
import Aes2text from '@/components/encryption/Aes2text'
import Sha256 from '@/components/encryption/Sha256'
import Text2rabbit from '@/components/encryption/Text2rabbit'
import Rabbit2text from '@/components/encryption/Rabbit2text'
import Sha1 from '@/components/encryption/Sha1'

export default {
  components: {
    Text2base64,
    Base642text,
    Md5,
    Text2aes,
    Aes2text,
    Sha256,
    Text2rabbit,
    Rabbit2text,
    Sha1
  },
  data: () => ({
    tools: Info
  }),
  head () {
    const title = 'Encryption'
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
