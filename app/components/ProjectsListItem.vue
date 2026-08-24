<script setup lang="ts">

interface Project {
    id: number,
    intro: string,
    title: string,
    descr: string,
    stack: string[],
    link: string,
}

const props = defineProps<{
    item: Project,
}>()

</script>

<template>
    <li class="projects__list-item">
        <p class="intro">{{ item.intro }}</p>
        <h3 class="title">{{ item.title }}</h3>
        <p class="subtitle">{{ item.descr }}</p>

        <ul class="stack__list">
            <li v-for="i in item.stack" class="stack__list-item">{{ i }}</li>
        </ul>

        <NuxtLink :to=item.link class="link">Смотреть проект →</NuxtLink>
    </li>
</template>

<style lang="scss" scoped>
.intro,
.title,
.subtitle {
    margin-bottom: 0;
    max-width: unset;
}

.intro {
    text-transform: none;
    font-size: 12px;
    color: var(--color-accent);
}

.title {
    font-size: 18px;


    @include mobile-s {
        font-size: 16px;
    }
}

.stack__list {

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;

    &-item {
        font-size: 12px;
        padding: 5px 10px;
        border-radius: var(--br-xl);
        background-color: var(--color-bg-elem);
        color: var(--color-dim);
        border: 1px solid var(--br-color);
    }
}

.link {
    color: var(--color-accent);
    padding-bottom: 2px;
    transition: all var(--hover-time);
    border-bottom: 1px solid transparent;
    width: fit-content;

    @include hover {
        border-bottom: 1px solid var(--color-accent);
    }

    @include mobile-s {
        font-size: 14px;
    }
}

.projects__list-item {
    flex-grow: 1;
    border: 1px solid var(--br-color);
    border-radius: var(--br-xl);
    background-color: #1b211a;
    padding: 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 380px;
    transition: all var(--hover-time);

    @include hover {
        transform: translateY(-5px);
    }

    @include tablet {
        max-width: unset;
        width: 100%;
    }

    @include mobile-s {
        padding: 20px 18px;
    }
}
</style>