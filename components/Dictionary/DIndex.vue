<script setup lang="ts">
defineProps<{
    dict: {
        [letter: string]: unknown[]
    },
    local?: boolean
}>();
</script>

<template>
    <div class='tw-grid tw-gap-1 tw-grid-cols-3 sm:tw-grid-cols-7'>
        <a v-for="(words, letter) in dict" :href='(local ? "" : "./") + letter'
            class="tw-text-center tw-bg-slate-200 tw-rounded-md tw-px-4 tw-py-2 tw-flex tw-flex-col tw-leading-tight">
            <span class="tw-text-lg tw-leading-snug tw-capitalize">
                {{ letter }}
            </span>
            <span class="!tw-decoration-0 tw-text-xs tw-leading-snug tw-italic">
                {{ words.length ? words.length : '-' }}
            </span>
        </a>
    </div>
</template>

<style scoped>
a {
    transition: 150ms;

    text-decoration: none;
    background-color: var(--vp-c-bg-soft);

    &>span:not(:first-child) {
        color: var(--vp-c-text-2);
    }

    &:hover {
        background-color: var(--vp-c-default-3);
    }
}
</style>
