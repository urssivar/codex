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
    <div class="root tw-relative tw-group">
        <h6 :id="word.id" class="tw-tracking-wide tw-inline ">
            <!-- <a :href="'#' + word.id" class="header-anchor tw-text-xl -tw-top-2 group-hover:tw-opacity-100"></a> -->
            {{ word.headword }}
        </h6>
        <span
            class="tw-bg-[--vp-c-default-soft] tw-text-[10px] tw-font-semibold tw-rounded tw-px-1 tw-py-px tw-ml-0.5 tw-uppercase"
            v-for="t in word.tags">
            {{ t }}
        </span>
        <span class="tw-text-sm">
            <template v-for="(d, i) in word.definitions">
                • {{ d }}
            </template>
        </span>
        <span v-if="word.forms?.length" class="tw-italic tw-text-xs">
            ({{ word.forms.join(', ') }})
        </span>
        <br>
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
</style>
