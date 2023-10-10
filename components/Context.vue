<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
const props = defineProps<{
    options?: string[],
}>();

const root = ref<HTMLElement>();
function switchClass(value: string, on: boolean, selector: string) {
    root.value?.querySelectorAll(selector)
        .forEach((e) => {
            if (on)
                e.classList.add(value);
            else
                e.classList.remove(value);
        });
}

const optionIndex = ref(-1);
watch(optionIndex, (index, oldIndex) => {
    switchClass('active', false, `[c="${oldIndex}"]`);
    switchClass('active', true, `[c="${index}"]`);
});

const highlight = ref<string | null>(null);
watch(highlight, (highlight, oldHighlight) => {
    switchClass('highlight', false, `[h="${oldHighlight}"]`,)
    switchClass('highlight', true, `[h="${highlight}"]`,)
});

onMounted(() => {
    root.value?.querySelectorAll(`[h]`).forEach((e) => {
        e.addEventListener("mouseover", () => {
            highlight.value = e.getAttribute('h');
        }, false);
        e.addEventListener("mouseout", () => {
            highlight.value = null;
        }, false);
    });
    if (props.options?.values)
        optionIndex.value = 0;

});
</script>

<template>
    <span ref="root" id="root">
        <slot></slot>
    </span>
    <div v-if="options" id="buttons">
        <button v-for="f, i in options" :class="{ active: i == optionIndex }" v-on:click="optionIndex = i">
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
[h].highlight {
    border-radius: 4px;
    background-color: var(--vp-c-divider);
}

[c].active {
    border-radius: 4px;
    animation: flash .5s;
}

[c]:not(.active) {
    display: none;
}

@keyframes flash {
    50% {
        background-color: var(--vp-c-divider);
    }
}
</style>
