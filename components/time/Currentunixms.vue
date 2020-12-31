<template>
  <v-card>
    <v-toolbar
      color="primary"
    >
      <v-btn
        icon
        dark
        @click="close"
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
            v-model="input"
            filled
            label="Current"
            readonly
            hide-details
          />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="timer">
          Stop
        </v-btn>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="inputTime"
            filled
            label="Stopped"
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
export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    inputTime: ''
  }),
  mounted () {
    this.interval = setInterval(this.updateTime, 100)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    timer () {
      this.inputTime = Date.now()
    },
    updateTime () {
      this.input = Date.now()
    },
    close () {
      this.tool.dialog = false
      clearInterval(this.interval)
    }
  }
}
</script>
