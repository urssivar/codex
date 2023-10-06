<script setup lang="ts">
import { ref, computed, watch } from 'vue'
const props = defineProps<{
    flags: number,
    types: boolean[],
}>()
const index = ref(0);
const flagSlots = computed(() =>
    [...Array(props.flags).keys()]
        .map(i => `f-${i}`)
);
const slots = computed(() =>
    props.types.map((_, i) => props.types[i]
        ? `s-${i}-0`
        : `s-${i}-${index.value}`
    )
);
let old: string[] = [];
watch(slots, async (newKeys, oldKeys) => {
    old = oldKeys ?? newKeys;
}, { immediate: true })
</script>

<template>
    <div>
        <span v-for="s, i in slots" class="lang" :class="{ flash: s != old[i] }" :key="s">
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
.flash {
    border-radius: 4px;
    animation: flash .5s;
}

@keyframes flash {
    50% {
        background-color: var(--vp-c-divider);
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
    background-color: var(--vp-c-default-soft);
}


button:hover {
    color: var(--vp-c-brand);
}

button.reveal {
    color: var(--vp-c-brand);
}

button:not(.reveal):not(:hover) {
    color: var(--vp-c-text-2);
}
</style>
