<template>
  <v-row class="d-flex justify-center">
    <v-col
      cols="12"
      xl="6"
      lg="6"
      md="6"
      sm="12"
      xs="12"
    >
      <v-banner
        icon="fa-exclamation-triangle"
        single-line
        elevation="2"
        class="text-center"
      >
        {{ error.statusCode === 404 ? pageNotFound : otherError }}
      </v-banner>
      <v-skeleton-loader
        type="card-avatar, article, actions"
        elevation="4"
        aria-busy="false"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
