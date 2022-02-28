<template>
  <h1>Pokemon Page: {{ id }}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
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
      } catch (error) {
        this.$router.push("/");
        console.log(error);
      }
    },
  },
  watch: {
    id() {
      this.getPokemon()
    }
  },
};
</script>
