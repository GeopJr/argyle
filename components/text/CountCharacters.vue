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
            @input="counter = input.split(' ').join('').length"
          />
        </v-col>
        <v-divider class="my-4" />
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="counter"
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
export default {
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    input: '',
    counter: 0
  })
}
</script>
