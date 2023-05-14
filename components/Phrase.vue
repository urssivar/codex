<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
    flags: string[],
    segments: string[][],
}>()
const index = ref(0);
const spans = computed(() => {
    console.log(props.segments);
    const i = index.value + 1;
    return props.segments?.map(s => s[0] ? s[0] : s[i]);
})
</script>

<template>
    <div>
        <div>
            <span v-for="s in spans" v-html="s" />
        </div>
        <button v-for="(f, i) in flags" :class="{ reveal: i == index }" v-on:click="index = i">
            {{ f }}
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
