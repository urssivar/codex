<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
const props = defineProps<{
    flags: number,
    segments: boolean[],
}>()
const index = ref(0);
onMounted(() => {
    console.log(props.segments);
});
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
        <div>
            <span v-for="s in segmentSlots">
                <slot :name="s" />
            </span>
        </div>
        <button v-for="f, i in flagSlots" :class="{ reveal: i == index }" v-on:click="index = i">
            <slot :name="f" />
        </button>
    </div>
</template>

<style scoped>
button {
    padding: 4px;
}

.reveal {
    text-decoration: underline;
}
</style>
