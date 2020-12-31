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
        <v-btn block color="accent" class="my-4" @click="compile">
          Compile
        </v-btn>
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="inputCompiled"
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
import Less from 'less'

export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    inputCompiled: ''
  }),
  methods: {
    async compile () {
      let output
      try {
        output = (await Less.render(this.input)).css
      } catch {
        output = 'This is not valid Less'
      }

      this.inputCompiled = output
    }
  }
}
</script>
