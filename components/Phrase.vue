<script setup lang="ts">
import { ref, computed } from 'vue'
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
</script>

<template>
    <div>
        <span v-for="s, i in segmentSlots">
            <template v-if="!segments[i]">&nbsp;</template>
            <slot :name="s" />
        </span>
    </div>
    <div class="buttons">
        <button v-for="f, i in flagSlots" :class="{ reveal: i == index }" v-on:click="index = i">
            <slot :name="f" />
        </button>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    gap: 4px;
    margin-top: 4px;
}

button {
    border-radius: 4px;
    transition: 0.2s;
    font-weight: 500;
    padding: 0px 4px;
    border: solid 1px #7f7f7f55;
}


button:hover {
    color: var(--vp-c-brand)
}

.reveal {
    color: var(--vp-c-brand)
}
</style>
