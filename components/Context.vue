<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
const props = defineProps<{
    options?: string[],
}>();
const root = ref<HTMLElement>();
const index = ref(-1);
watch(index, (index, oldIndex) => {
    root.value?.querySelectorAll(`[ctx="${oldIndex}"]`)
        .forEach((e) => {
            e.classList.remove('active');
        });
    root.value?.querySelectorAll(`[ctx="${index}"]`)
        .forEach((e) => {
            e.classList.add('active');
        });
});
onMounted(() => {
    if (props.options?.values)
        index.value = 0;
});
</script>

<template>
    <span ref="root" id="root">
        <slot></slot>
    </span>
    <div v-if="options" id="buttons">
        <button v-for="f, i in options" :class="{ active: i == index }" v-on:click="index = i">
            {{ f }}
        </button>
    </div>
</template>

<style scoped>
#root>:last-child {
    margin-bottom: 0;
}

#buttons {
    display: flex;
    gap: 4px;
    margin-top: 6px;
}

button {
    transition: 0.2s;
    font-weight: 600;
    line-height: 125%;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: var(--vp-c-default-soft);
}


button:hover {
    color: var(--vp-c-brand);
}

button.active {
    color: var(--vp-c-brand);
}

button:not(.active):not(:hover) {
    color: var(--vp-c-text-2);
}
</style>

<style>
[ctx].active {
    border-radius: 4px;
    animation: flash .5s;
}

[ctx]:not(.active) {
    display: none;
}

@keyframes flash {
    50% {
        background-color: var(--vp-c-divider);
    }
}
</style>
