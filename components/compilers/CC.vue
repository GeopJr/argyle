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
import Axios from 'axios'

export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    inputCompiled: '',
    version: '6.3.1'
  }),
  methods: {
    compile () {
      this.inputCompiled = 'Sending request...'
      Axios.post('https://carc.in/run_requests', {
        run_request: {
          language: 'gcc',
          version: this.version,
          code: this.input
        }
      })
        .then((response) => {
          const tmp = response.data.run_request.run
          this.inputCompiled = tmp.exit_code === 0 ? tmp.stdout : tmp.stderr
        })
        .catch((error) => {
          this.inputCompiled = 'There was an error while sending the request:\n' + error
        })
    }
  }
}
</script>
