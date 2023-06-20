<template>
    <div class="row">
        <span class="button">
            <slot name="voice" />
        </span>
        <span class="b text">
            <slot />
        </span>
        <span>
            <slot name="caption" />
        </span>
    </div>
</template>

<style scoped>
.row {
    display: grid;
    grid-template-columns: 28px 1fr 1fr;
    padding: 4px 0;
    gap: 4px;
}

.row>* {
    transition: 150ms;
    border-radius: 4px;
}

.row:hover .button {
    font-size: 24px;
}

.row:hover .text {
    background-color: var(--vp-c-divider);
}
</style>
