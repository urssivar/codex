<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
    segments: (string | string[])[],
    flags: string[],
}>()
const selected = ref(0);
</script>

<template>
    <div>
        <div id="text">
            <span v-for="s in segments">
                {{ Array.isArray(s) ? s[selected] : s }}
            </span>
        </div>
        <button v-for="(f, i) in flags" :class="{ reveal: i == selected }" v-on:click="selected = i">
            {{ f }}
        </button>
    </div>
</template>

<style scoped>
#text>*::after {
    content: ' ';
}

button {
    padding: 4px;
}

.reveal {
    text-decoration: underline;
}
</style>
