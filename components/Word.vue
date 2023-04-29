<script setup lang="ts">
defineProps<{
    t: string[]
}>()
</script>

<template>
    <Popper arrow="true" placement="top" hover="true" offsetDistance="0" :content="t[1]">
        {{ t[0] }}
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
</style>
