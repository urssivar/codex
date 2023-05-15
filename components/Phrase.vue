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
    <button v-for="f, i in flagSlots" :class="{ reveal: i == index }" v-on:click="index = i">
        <slot :name="f" />
    </button>
</template>

<style scoped>
button {
    padding: 4px;
}

.reveal {
    text-decoration: underline;
}
</style>
