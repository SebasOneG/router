<template>
  <h1>Pokemon Page: {{ id }}</h1>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  created() {
    // console.log(this.$route.query);
  },
};
</script>
