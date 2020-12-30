<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to Argyle - The ALL-IN-ONE toolkit!
        </v-card-title>
        <v-card-text>
          <p>By clicking on the hamburger menu icon <v-icon>mdi-menu</v-icon> at the top left, you will be greeted by some tool categories.</p>
          <p>
            Each category has many unique tools that might improve your workflow.
          </p>
          <p>
            Privacy is important. Almost every tool gets executed client-side. If a tool has this icon <v-icon>mdi-signal-variant</v-icon> next to it, then it relies on external APIs and <strong>can't</strong> be executed offline.
          </p>
          <!-- add api docs -->
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="#24292e"
            href="https://github.com/GeopJr/argyle"
            target="_blank"
          >
            <v-icon
              left
            >
              mdi-github
            </v-icon>
            GitHub
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>
