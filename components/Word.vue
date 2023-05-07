<script setup lang="ts">
defineProps<{
    h: string,
}>()
</script>

<template>
    <Popper :arrow="true" placement="top" :hover="true" offsetDistance="4" :content="h">
        <slot></slot>
    </Popper>
</template>

<style scoped>
:deep(.popper) {
    font-size: 14px;
    --popper-theme-background-color: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 0 8px;
}

*:hover {
    text-decoration: underline dotted;
    text-underline-offset: 8px;
}
</style>
