<template>
  <v-app>
    <v-navigation-drawer permanent> Navigation Drawer </v-navigation-drawer>

    <v-main>
      <v-container> Main Contents </v-container>
    </v-main>

    <v-bottom-navigation> Button Navigation </v-bottom-navigation>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
