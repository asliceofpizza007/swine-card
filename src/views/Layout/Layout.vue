<template lang="pug">
Header
Main
Nav
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Header, Main, Nav } from '@/layout'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Main,
    Nav
  }
})
</script>
