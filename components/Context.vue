<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
const props = defineProps<{
    options?: string[],
    caption?: string,
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
    switchClass('hl', false, `[h="${oldHighlight}"]`,)
    switchClass('hl', true, `[h="${highlight}"]`,)
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


<!-- 
<Context :options="['masc.', 'fem.']">

++[уцци]{c=0 h=b} [рицци]{c=1 h=s} [хъили]{h=h} [ви]{c=0 h=i} [ри]{c=1 h=i}++  
--[brother]{c=0 h=b} [sister]{c=1 h=s} [is]{h=i} [at home]{h=h}--

</Context>
-->

<template>
    <span ref="root" id="root">
        <slot></slot>
    </span>
    <div v-if="options" id="buttons">
        <span id="caption" v-if="caption">
            {{ caption }}
        </span>
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

#caption {
    color: var(--vp-c-text-2);
    font-size: small;
    font-weight: 500;
}

button {
    transition: 0.2s;
    font-weight: 500;
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
[c].active {
    animation: flash .5s;
}

[c]:not(.active) {
    display: none;
}

@keyframes flash {
    50% {
        box-shadow: inset 0 -.35em var(--highlight);
    }
}
</style>
