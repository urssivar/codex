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
        <div class="tw-flex tw-items-center tw-gap-1">
            <h6 :id="word.id" class="tw-tracking-[0.035em]">
                {{ word.headword }}
            </h6>
            <span class="tag tw-text-xs tw-leading-4 tw-font-semibold tw-rounded tw-px-1 tw-py-px"
                v-for="t in word.tags">
                {{ t }}
            </span>
        </div>
        <span class="tw-italic tw-text-xs">
            {{ word.forms.join(', ') }}
        </span>
        <div class="tw-ml-4 tw-text-sm">
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

.tag {
    background-color: var(--vp-c-default-soft);
}
</style>
