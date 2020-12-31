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
          <v-text-field v-model="input" filled label="UUID" hide-details />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="request">
          Get Skin
        </v-btn>
        <v-col cols="12">
          <v-card v-show="ready" elevation="7" outlined>
            <v-img
              :src="skin"
              max-width="200"
            />
            <v-img
              :src="head"
              max-width="200"
            />
            <v-img
              :src="body"
              max-width="200"
            />
          </v-card>
        </v-col>
      </v-col>
      <v-spacer />
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    api: 'https://crafatar.com/',
    ready: false,
    images: {
      skin: '',
      head: '',
      body: ''
    }
  }),
  computed: {
    skin () {
      return this.images.skin
    },
    head () {
      return this.images.head
    },
    body () {
      return this.images.body
    }
  },
  methods: {
    request () {
      this.images.skin = this.api + 'skins/' + this.input
      this.images.head = this.api + 'renders/head/' + this.input
      this.images.body = this.api + 'renders/body/' + this.input

      this.ready = true
    }
  }
}
</script>
