<template>
  <v-card>
    <v-toolbar color="primary">
      <v-btn icon dark @click="tool.dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ tool.name }} - {{ tool.desc }}</v-toolbar-title>
    </v-toolbar>
    <v-container fill-height fluid>
      <v-spacer />
      <v-col cols="12" md="6" sm="12" align="center">
        <v-col cols="12">
          <v-text-field v-model="input" filled label="Username" hide-details />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="request">
          Get UUID
        </v-btn>
        <v-col cols="12">
          <v-text-field
            v-model="inputResponse"
            filled
            label="UUID"
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
    inputResponse: ''
  }),
  methods: {
    request () {
      this.inputResponse = 'Sending request...'
      Axios.get(`https://api.mojang.com/users/profiles/minecraft/${this.input}`) // MS please enable CORS
        .then((response) => {
          this.inputCompiled = response.data.error
            ? response.data.id
            : "User doesn't exist"
        })
        .catch((error) => {
          this.inputResponse =
            'There was an error while sending the request:\n' + error
        })
    }
  }
}
</script>
