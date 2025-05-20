<script setup lang="ts">
defineProps<{
    word: {
        id: string
        headword: string,
        ipa: string,
        tags: string,
        forms?: string[],
        variants?: string[],
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
        <span class="tw-font-semibold tw-text-[8px] tw-uppercase  tw-tracking-tighter tw-text-[--vp-c-text-2]">
            <template v-for="t in word.tags">
                {{ ' ' }}
                <span class="tw-border-[--vp-c-divider] tw-border tw-rounded tw-px-0.5 tw-py-px tw-align-[2px]">
                    {{ t }}
                </span>
            </template>
        </span>
        {{ ' ' }}
        {{word.definitions.map((w) => w + ';').join(' ')}}
        <span class="tw-font-['Noto_Sans'] tw-text-xs tw-font-medium">
            <span v-if="word.forms?.length" class="tw-italic">
                ... {{ word.forms.join(', ') }}
            </span>
            <span v-if="word.variants?.length">
                <br>
                // {{ word.variants.join(', ') }}
            </span>
        </span>
    </div>
</template>
