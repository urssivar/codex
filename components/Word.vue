<template>
    <Popper :arrow="true" placement="top" :hover="true" offsetDistance="4">
        <slot></slot>
        <template #content>
            <slot name="content"></slot>
        </template>
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

* {
    text-decoration: underline dotted;
    text-decoration-color: #7f7f7f7f;
    text-underline-offset: 6px;
}

*:hover {
    text-decoration-color: inherit;
}
</style>
