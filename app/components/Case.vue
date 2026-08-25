<script lang="ts" setup>
import type { Project } from './../types/projects';

const props = defineProps<{
    project: Project,
    index: number
}>();

const type = computed(() => props.project.type);
const title = computed(() => props.project.title);
const stack = computed(() => props.project.stack);
const smallDescription = computed(() => props.project.smallDescription);
const link = computed(() => props.project.link);
</script>

<template>

    <div class="case">
        <div class="case__intro">
            <div class="case__stat">
                <p class="case__stat-number">{{ index }}</p>
                <p class="case__stat-type">{{ type }}</p>
            </div>

            <h2 class="case__title">
                {{ title }}
            </h2>
        </div>

        <p class="case__descr">{{ smallDescription }}</p>

        <div class="case__stack">
            <AboutStackListItem class="case__stack-list" :stack-items="stack"></AboutStackListItem>
            <a class="case__stack-link" target="_blank" :href="link">Смотреть проект</a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.case {
    display: grid;
    background-color: var(--color-bg-elem);
    border-radius: var(--br-xl);
    margin-bottom: 20px;
    transition: all var(--hover-time) ease-in-out;

    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto 100px;

    @include mobile-s {
        grid-template-rows: auto;
    }


    &__intro {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        gap: 20px;
        max-width: 200px;
        width: 100%;
        padding: 26px 24px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--br-color);
            left: 0;
            top: 50%;
        }

        grid-row: 1 / 3;
        grid-column: 1 / 1;

        @include mobile-s {
            flex-direction: row-reverse;
            align-items: center;
            grid-column: 1 / 7;
            grid-row: 1 / 2;
            max-width: unset;

            &::before {
                top: 100%
            }
        }
    }

    &__title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__stat {
        display: flex;
        gap: 14px;
        align-items: flex-start;

        &-number {
            font-size: 18px;
            font-weight: 700;
            color: var(--color-dim);
        }

        &-type {
            text-transform: uppercase;
            font-size: 14px;
            color: var(--color-accent);
        }
    }

    &__descr {
        display: flex;
        align-items: center;
        color: var(--color-dim);
        font-size: 14px;
        padding: 26px 24px;
        border-right: 2px solid var(--br-color);
        border-left: 2px solid var(--br-color);

        grid-row: 1 / 3;
        grid-column: 2 / 5;

        @include tablet {
            grid-column: 2 / 4;
        }

        @include mobile {
            grid-column: 2 / 7;
            border-right: none;
        }

        @include mobile-s {
            grid-row: 2 / 3;
            grid-column: 1 / 7;
            border-left: none;
        }
    }

    &__stack {
        position: relative;

        grid-row: 1 / 3;
        grid-column: 5 / 7;

        display: grid;
        grid-template-rows: repeat(3, 1fr);

        @include tablet {
            grid-column: 4 / 7;
        }

        @include mobile {
            grid-row: 3 / 4;
            grid-column: 1 / 7;
            grid-template-rows: none;
            border-top: 2px solid var(--br-color);

            :deep(.about__stack__list) {
                margin: 0 auto;
            }
        }

        &-list {
            padding: 26px 24px;
            grid-row: 1 / 3;
        }

        &-link {
            grid-row: 3 / 4;
            position: relative;
            margin-top: auto;
            margin-inline: auto;
            font-size: 14px;
            text-align: center;
            transition: all var(--hover-time);
            padding-bottom: 4px;
            width: 100%;
            padding: 26px 24px;
            
            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: var(--br-color);
                top: 0px;
                left: 0;
            }

            @include hover {
                color: var(--color-accent);
            }
        }
    }
}
</style>