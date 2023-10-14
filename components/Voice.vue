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
    <span class="root" ref="root" @click="player.play(_src)">
        <span>
            {{ player.isPlaying(_src) ? "⏸" : "▶" }}
        </span>
        <slot></slot>
    </span>
</template>

<style scoped>
.root {
    cursor: pointer;
}

.root>:first-child {
    display: inline-flex;
    justify-content: center;
    flex: 1;
    user-select: none;
    transition: 150ms;
}

.root:hover>:first-child {
    transform: scale(1.15);
}
</style>
