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
            v-model="input"
            filled
            label="Snowflake"
            hide-details
          />
        </v-col>
        <v-btn block color="accent" class="my-4" @click="convert">
          Convert
        </v-btn>
        <v-col
          cols="12"
        >
          <v-textarea
            v-model="inputTime"
            filled
            label="Timestamp"
            auto-grow
            rows="4"
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
  methods: {
    convert () {
      this.inputTime = 'https://github.com/vuejs/vue/issues/11126\n\nhttps://github.com/GeopJr/snowflake.php'
    }
  }
}
</script>
