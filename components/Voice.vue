<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, ref } from 'vue';
import player from "./audio-player";

const props = defineProps<{
    src?: string,
}>()
const root = ref<HTMLElement>();
const _src = computed(() => {
    let src = '';
    if (props.src) src = props.src;
    else {
        const el = root.value?.getElementsByTagName('source')[0];
        if (el?.src) src = el.src;
    }
    return withBase(src);
});
</script>

<template>
    <span ref="root" @click="player.play(_src)">
        <span class="button">
            {{ player.isPlaying(_src) ? "⏸️" : "▶️" }}
        </span>
        <slot></slot>
    </span>
</template>

<style scoped>
* {
    cursor: pointer;
}

.button {
    display: inline-flex;
    justify-content: center;
    flex: 1;
    user-select: none;
    transition: 150ms;
}

.button:hover {
    transform: scale(1.15);
}
</style>
