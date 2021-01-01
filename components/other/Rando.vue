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
          <v-text-field
            v-model="input1"
            filled
            label="Input 1"
            hide-details
          />
          <v-text-field
            v-model="input2"
            filled
            label="Input 2"
            hide-details
            class="mt-4"
          />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="run">
          Run
        </v-btn>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="inputRando"
            filled
            label="Output"
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
import { rando as Rando } from '@nastyox/rando.js'

export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input1: '',
    input2: '',
    inputRando: ''
  }),
  methods: {
    run () {
      let format
      try {
        format = Rando(JSON.parse(this.input1.toLowerCase()), JSON.parse(this.input2.toLowerCase()))
      } catch {
        format = 'This is not valid Input'
      }
      this.inputRando = format
    }
  }
}
</script>
