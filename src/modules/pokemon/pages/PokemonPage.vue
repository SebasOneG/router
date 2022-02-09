<template>
  <h1>Pokemon Page: {{ id }}</h1>
</template>

<script>
import { TrackOpTypes } from "vue";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    // console.log(this.$route.query);
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((res) => res.json());
        this.pokemon = pokemon;
        console.log(pokemon);
      } catch (error) {
        this.$router.push("/");
        console.log(error);
      }
    },
  },
};
</script>
