<script setup lang="ts">
import player from "./audio-player";
defineProps<{
    url: string,
}>()
</script>

<template>
    <span @click="player.play(url)">
        <span class="button">
            {{ player.isPlaying(url) ? "⏸️" : "▶️" }}
        </span>
        <slot></slot>
    </span>
</template>

<style scoped>
.button {
    user-select: none;
}
</style>
