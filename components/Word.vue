<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
    t: string[]
}>()
const reveal = ref(false)
</script>

<template>
    <span :class="{ reveal }" v-on:pointerenter="reveal = true" v-on:pointerleave="reveal = false">
        {{ reveal ? t[1] : t[0] }}
    </span>
</template>

<style scoped>
.reveal {
    text-decoration: underline;
}
</style>
