<script setup lang="ts">

const coreItems = ['VUE 3', 'NUXT 4', 'TypeScript', 'Node.js', 'Express.js']
const toolsItems = ['Vite', 'PostgreSQL', 'GIT', 'Pinia', 'SASS/SCSS', 'ООП', 'Паттерны']
const qualityItems = ['Vitest', 'ESLint']

</script>

<template>
    <section class="section about">
        <div class="container">
            <div class="about__inner">
                <div class="about__info">
                    <p class="about__descr intro">ОБО МНЕ</p>
                    <h2 class="about__title title">Более года коммерческой разработки</h2>
                    <p class="about__subtitle subtitle">Специализируюсь на Vue 3 и Nuxt: Composition API, продумываю
                        архитектуру разрабатываемого продукта, поддерживаю SEO через SSR.</p>
                    <p class="about__subtitle subtitle">Так же сейчас изучаю backend на Node.js + Express.js, а в
                        качестве СУБД использую PostgreSQL.</p>
                </div>

                <div class="about__stack">
                    <h3 class="about__stack-title">
                        Стек и инструменты
                    </h3>

                    <AboutStackListItem title="Core" :stack-items="coreItems"></AboutStackListItem>
                    <AboutStackListItem title="Инструменты" :stack-items="toolsItems"></AboutStackListItem>
                    <AboutStackListItem title="Качество" :stack-items="qualityItems"></AboutStackListItem>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {

    &__inner {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 40px;

        @include mobile {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }

    &__stack {
        padding: 28px;
        border-radius: var(--br-xl);
        background-color: var(--color-bg-elem);

        &-title {
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            color: var(--color-dim);
            margin-bottom: 20px;
            text-transform: uppercase;

            @include mobile-s {
                font-size: 14px;
            }
        }
    }
}
</style>