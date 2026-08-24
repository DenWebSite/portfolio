<script setup lang="ts">

const props = defineProps<{
    title?: string,
    stackItems: string[],
}>()

</script>

<template>
    <div>
        <h4 v-show="title">{{ title }}</h4>
        <ul class="about__stack__list">
            <li v-for="item in stackItems" class="about__stack__list-item">{{ item }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
div {

    &+& {
        margin-top: 30px;
    }
}

h4 {
    color: var(--color-dim);
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.about__stack__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 450px;
    width: 100%;

    &-item {
        font-size: 14px;
        color: #aeb2af;
        background-color: #1b211a;
        padding: 7px 13px;
        border-radius: var(--br-xl);
        border: 1px solid var(--br-color);

        @include mobile-s {
            font-size: 12px;
        }
    }
}
</style>