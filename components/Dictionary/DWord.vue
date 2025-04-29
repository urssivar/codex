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
    <div class="tw-pl-4 -tw-indent-4">
        <h6 :id="word.id" class="tw-tracking-wide tw-inline">
            {{ word.headword }}
        </h6>
        {{ ' ' }}
        <span class="tw-font-semibold tw-text-[10px] tw-uppercase">
            <template v-for="t in word.tags">
                {{ ' ' }}
                <span class="tw-bg-[--vp-c-default-soft] tw-rounded tw-px-1 tw-py-px">
                    {{ t }}
                </span>
            </template>
        </span>
        {{ ' ' }}
        {{word.definitions.map((w) => w + '; ').join('')}}
        <span v-if="word.forms?.length" class="tw-italic tw-text-xs tw-tracking-wide">
            … {{ word.forms.join(', ') }}
        </span>
        <br>
    </div>
</template>
