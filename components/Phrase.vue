<script setup lang="ts">
import { ref, computed, watch } from 'vue'
const props = defineProps<{
    flags: number,
    segments: boolean[],
}>()
const index = ref(0);
const flagSlots = computed(() => {
    return [...Array(props.flags).keys()]
        .map(i => `f-${i}`);
});
const segmentSlots = computed(() => {
    return props.segments
        ?.map((s, i) => s ? `s-${i}-0` : `s-${i}-${index.value + 1}`);
});
let old: string[] = [];
watch(segmentSlots, async (newKeys, oldKeys) => {
    old = oldKeys ?? newKeys;
}, { immediate: true })
</script>

<template>
    <div>
        <span v-for="s, i in segmentSlots" :key="s">
            <template v-if="!segments[i]">&nbsp;</template>
            <span :class="{ flash: s != old[i] }">
                <slot :key="s" :name="s" />
            </span>
        </span>
    </div>
    <div class="buttons">
        <button v-for="f, i in flagSlots" :class="{ reveal: i == index }" v-on:click="index = i">
            <slot :name="f" />
        </button>
    </div>
</template>

<style scoped>
.flash {
    border-radius: 4px;
    animation: flash .5s;
}

@keyframes flash {
    50% {
        background-color: #7f7f7f7f;
    }
}

.buttons {
    display: flex;
    gap: 4px;
    margin-top: 4px;
}

button {
    transition: 0.2s;
    font-weight: 600;
    line-height: 125%;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: #7f7f7f25;
}


button:hover {
    color: var(--vp-c-brand)
}

.reveal {
    color: var(--vp-c-brand)
}
</style>
