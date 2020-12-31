<template>
  <v-card>
    <v-toolbar
      color="primary"
    >
      <v-btn
        icon
        dark
        @click="tool.dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ tool.name }} - {{ tool.desc }}</v-toolbar-title>
    </v-toolbar>
    <v-container fill-height fluid>
      <v-spacer />
      <v-col
        cols="12"
        md="6"
        sm="12"
        align="center"
      >
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="input"
            filled
            label="Input"
            auto-grow
            rows="10"
            hide-details
            @input="decrypt"
          />
          <v-text-field
            v-model="pass"
            label="Passphrase"
            filled
            hide-details
            class="mt-4"
            @input="decrypt"
          />
        </v-col>
        <v-divider class="my-4" />
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="inputDecrypted"
            filled
            label="Output"
            auto-grow
            rows="10"
            readonly
            hide-details
          />
        </v-col>
      </v-col>
      <v-spacer />
    </v-container>
  </v-card>
</template>

<script>
import Aes from 'crypto-js/aes'
import EncUtf8 from 'crypto-js/enc-utf8'

export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    pass: '',
    inputDecrypted: ''
  }),
  methods: {
    decrypt () {
      let output
      try {
        output = Aes.decrypt(this.input, this.pass).toString(EncUtf8)
      } catch {
        output = 'This is not valid AES or passphrase is wrong'
      }
      this.inputDecrypted = output.length === 0 ? 'Passphrase is not correct' : output
    }
  }
}
</script>
