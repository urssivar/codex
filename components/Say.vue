<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress'
import player from "./audio-player";

const props = defineProps<{
    url: string,
}>()
const src = computed(() => withBase(props.url));
</script>

<template>
    <span @click="player.play(src)">
        <span class="button">
            {{ player.isPlaying(src) ? "⏸️ " : "▶️ " }}
        </span>
        <slot></slot>
    </span>
</template>

<style scoped>
.button {
    user-select: none;
    cursor: pointer;
}
</style>
