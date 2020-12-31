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
            @input="encrypt"
          />
          <v-text-field
            v-model="pass"
            label="Passphrase"
            filled
            hide-details
            class="mt-4"
            @input="encrypt"
          />
        </v-col>
        <v-divider class="my-4" />
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="inputEncrypted"
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
import Rabbit from 'crypto-js/rabbit'

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
    inputEncrypted: ''
  }),
  methods: {
    encrypt () {
      let output
      try {
        output = Rabbit.encrypt(this.input, this.pass).toString()
      } catch {
        output = 'This is not valid Text'
      }
      this.inputEncrypted = output
    }
  }
}
</script>
