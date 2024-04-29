<script setup lang="ts">
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({
    immediate: true,
    offlineReady() {
      console.log('PWA READY');
    },
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template></template>
