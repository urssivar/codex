<script setup lang="ts">
defineProps<{
    word: {
        id: string
        headword: string,
        ipa: string,
        tags: string,
        forms: string[],
        definitions: string[],
    },
}>();
</script>

<template>
    <div class="root tw-relative tw-break-inside-avoid tw-rounded-md tw-flex tw-flex-col tw-gap-0.5 tw-py-1">
        <div class="tw-flex tw-items-center tw-justify-between">
            <h6 :id="word.id" class=" tw-tracking-wide">{{ word.headword }}</h6>
            <span class="ipa tw-text-sm">{{ word.ipa }}</span>
        </div>
        <div class="tw-flex tw-text-xs tw-items-center tw-gap-1">
            <span class="tag tw-leading-4 tw-font-semibold tw-rounded tw-px-1 tw-py-px"
                v-for="t in word.tags">
                {{ t }}
            </span>
            <span class="tw-italic" v-for="(f, i) in word.forms">
                {{ f + (i < word.forms.length - 1 ? ',' : '') }} </span>
        </div>
        <div class="tw-ml-4">
            <li class="!tw-m-0" v-for="d in word.definitions">
                {{ d }}
            </li>
        </div>
    </div>
</template>

<style scoped>
.root {
    transition: 150ms;

    &::before {
        content: '';
        transition: 150ms;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -16px;
        right: -16px;
        border-radius: 8px;
        z-index: -1;
    }

    &:hover::before {
        background-color: var(--vp-code-block-bg);
    }
}

.ipa {
    color: var(--vp-c-text-2);
    font-family: "Noto Sans", sans-serif;
}

.tag {
    background-color: var(--vp-c-default-soft);
}
</style>
