<template>
  <div>
    <!-- <router-link :to="{ name: 'pokemon-id' }">Pokemon List</router-link>
    <router-link :to="{ name: 'home' }">Pokemon id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink v-for="(link, idx) in links" :key="idx" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
  data() {
    return {
      links: [
        { to: { name: "pokemon-home" }, name: "Pokemons" },
        { to: { name: "pokemon-id", params: { id: 150 } }, name: "Por ID" },
        { to: { name: "pokemon-about" }, name: "about" },
        { to: { name: "dbz-characters" }, name: "Personajes" },
        { to: { name: "dbz-about" }, name: "DBZ about" },
        { to: "https://google.com", name: "Google" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

/* .router-link-exact-active {
  color: #42b983;
} */
</style>
