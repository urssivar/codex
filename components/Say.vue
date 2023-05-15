<script setup lang="ts">
import player from "./audio-player";
defineProps<{
    url: string,
}>()
</script>

<template>
    <span @click="player.play(url)">
        <span>
            {{ player.isPlaying(url) ? "⏸️" : "▶️" }}
        </span>
        <slot></slot>
    </span>
</template>
