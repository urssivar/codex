<script setup lang="ts">
import dict from "../../alphabet.json";
import { useRoute } from 'vitepress';
import { computed } from 'vue';

const route = useRoute();
const currentLetter = computed(() => {
    const paths = route.path.split('/').filter((x) => x);
    return decodeURIComponent(paths[paths.length - 1]);
});
</script>

<template>
    <div class='tw-grid tw-gap-1 tw-grid-cols-4 tw-font-medium tw-text-[--vp-c-text-2] tw-text-center tw-capitalize'>
        <a v-for="letter in dict" :href='"./" + letter'
            class="tw-transition tw-px-2 tw-py-2 tw-leading-snug hover:tw-text-[--vp-c-brand-1] tw-border-[--vp-c-divider] hover:tw-border-[--vp-c-brand-1] tw-border tw-rounded-md"
            :class="{ 'tw-text-[--vp-c-brand-1]': currentLetter == letter }">
            {{ letter }}
        </a>
    </div>
</template>
