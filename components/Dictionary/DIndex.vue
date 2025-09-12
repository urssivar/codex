<script setup lang="ts">
defineProps<{
    dict: {
        [letter: string]: unknown[]
    },
    local?: boolean,
    sidebar?: boolean,
}>();
</script>

<template>
    <div class='tw-grid tw-gap-1 tw-grid-cols-5 sm:tw-grid-cols-7 md:tw-grid-cols-9 print:tw-grid-cols-9'>
        <a v-for="(words, letter) in dict" :href='(local ? "#" : "./") + letter'
            class="tw-text-center tw-rounded-md tw-p-2 tw-flex tw-flex-col tw-leading-tight !tw-no-underline tw-bg-[--vp-c-bg-soft]">
            <span class="tw-text-lg tw-leading-snug tw-capitalize">
                {{ letter }}
            </span>
            <span v-if="!sidebar" class="!tw-decoration-0 tw-text-xs tw-leading-snug tw-text-[--vp-c-text-2]">
                {{ words.length ? words.length : '-' }}
            </span>
        </a>
    </div>
</template>
