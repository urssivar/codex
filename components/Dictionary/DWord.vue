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
    <div class="tw-pl-4 -tw-indent-4 tw-leading-none">
        <span :id="word.id" class=" tw-leading-snug tw-font-semibold tw-font-['Noto_Sans']">
            {{ word.headword }}
        </span>
        {{ ' ' }}
        <span class="tw-font-semibold tw-text-[9px] tw-uppercase  tw-tracking-tighter">
            <template v-for="t in word.tags">
                {{ ' ' }}
                <span
                    class="tw-bg-[--vp-c-default-soft] tw-border-[--vp-c-divider] tw-border tw-rounded tw-px-0.5 tw-py-px tw-align-[1px]">
                    {{ t }}
                </span>
            </template>
        </span>
        {{ ' ' }}
        {{word.definitions.map((w) => w + '; ').join('')}}
        <span v-if="word.forms?.length" class="tw-italic tw-text-xs tw-font-['Noto_Sans']">
            … {{ word.forms.join(', ') }}
        </span>
    </div>
</template>
