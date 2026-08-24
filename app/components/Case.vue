<script lang="ts" setup>

const stack = ['VUE 3', 'NUXT 4', 'TypeScript', 'Node.js', 'Express.js']


</script>

<template>

    <div class="case">
        <div class="case__intro">
            <div class="case__stat">
                <p class="case__stat-number">01</p>
                <p class="case__stat-type">realtime</p>
            </div>

            <h2 class="case__title">
                ArtHouse
            </h2>
        </div>

        <p class="case__descr">Дашборд аналитики в реальном времени: WebSocket-потоки, 40+ виджетов, состояние на Pinia
            с оптимистичными обновлениями.</p>

        <div class="case__stack">
            <AboutStackListItem :stack-items="stack"></AboutStackListItem>
            <a class="case__stack-link" href="/">Смотреть проект</a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.case {
    // display: flex;
    display: grid;
    background-color: var(--color-bg-elem);
    border-radius: var(--br-xl);
    margin-bottom: 20px;
    transition: all var(--hover-time) ease-in-out;

    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 100px 100px;

    @include mobile-s {
        grid-template-rows: 80px;
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
    }

    &__stat {
        display: flex;
        gap: 10px;
        align-items: center;

        &-number {
            font-size: 18px;
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
        padding: 26px 24px;
        position: relative;

        grid-row: 1 / 3;
        grid-column: 5 / 7;

        @include tablet {
            grid-column: 4 / 7;
        }

        @include mobile {
            grid-row: 3 / 4;
            grid-column: 1 / 7;
            border-top: 2px solid var(--br-color);

            :deep(.about__stack__list) {
                margin: 0 auto;
            }
        }

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--br-color);
            left: 0;
            bottom: 64px;
        }

        &-link {
            display: block;
            margin-top: 44px;
            margin-inline: auto;
            font-size: 14px;
            text-align: center;
            transition: all var(--hover-time);
            border-bottom: 1px solid transparent;
            padding-bottom: 4px;
            width: fit-content;

            @include hover {
                color: var(--color-accent);
                border-color: var(--color-accent);
            }
        }
    }
}
</style>