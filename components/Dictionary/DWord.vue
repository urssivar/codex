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
    <div class="root">
        <div class="title">
            <h6 :id="word.id">{{ word.headword }}</h6>
            <span class="ipa">{{ word.ipa }}</span>
        </div>
        <div class="subtitle">
            <span class="tag" v-for="t in word.tags">
                {{ t }}
            </span>
            {{ word.forms.join(', ') }}
        </div>
        <div>
            <li v-for="d in word.definitions">
                {{ d }}
            </li>
        </div>
    </div>
</template>

<style scoped>
.root {
    transition: 150ms;

    position: relative;
    break-inside: avoid;
    border-radius: 8px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;

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

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        >.ipa {
            margin: 0;

        }
    }

    .subtitle {
        display: flex;
        gap: 4px;
        font-size: small;
        font-style: italic;
        color: var(--vp-c-text-2);
    }

    li {
        font-size: 14px;
        margin: 0 !important;
    }
}

.ipa {
    font-size: small;
    color: var(--vp-c-text-2);
    font-weight: normal;
    font-family: "Noto Sans", sans-serif;
}

.tag {
    background-color: var(--vp-c-default-soft);
    font-weight: bolder;
    font-size: 11px;
    border-radius: 4px;
    font-style: normal;
    padding: 2px 4px;
}
</style>
