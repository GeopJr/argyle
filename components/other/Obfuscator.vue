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
          />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="run">
          Run
        </v-btn>
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="inputFormatted"
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
import { obfuscate as Obfuscate } from 'javascript-obfuscator'

export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    inputFormatted: ''
  }),
  methods: {
    run () {
      let format
      try {
        format = Obfuscate(this.input, { compact: false }).getObfuscatedCode()
      } catch {
        format = 'This is not valid JavaScript'
      }
      this.inputFormatted = format
    }
  }
}
</script>
