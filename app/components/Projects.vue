<script setup lang="ts">

const projectsItems = [
    {
        id: 0,
        intro: 'E-commerce',
        title: 'Отель ArtHouse',
        descr: 'Отель отель отель отель',
        stack: ['Nuxt 4', 'VUE 3', 'SASS', 'Travelline'],
        link: '/'
    },
    {
        id: 1,
        intro: 'E-commerce',
        title: 'Отель ArtHouse',
        descr: 'Отель отель отель отель',
        stack: ['Nuxt 4', 'VUE 3', 'SASS', 'Travelline'],
        link: '/'
    },
    {
        id: 2,
        intro: 'E-commerce',
        title: 'Отель ArtHouse',
        descr: 'Отель отель отель отель',
        stack: ['Nuxt 4', 'VUE 3', 'SASS', 'Travelline'],
        link: '/'
    }
]

console.log(projectsItems)

</script>

<template>
    <section class="section projects" id="case">
        <div class="container">
            <div class="projects__inner">
                <div class="projects__info">
                    <p class="projects__descr intro">Избранные проекты</p>
                    <h2 class="projects__title title">Три релиза, о которых стоит рассказать</h2>
                    <p class="projects__subtitle subtitle">Каждый проект — с реальными архитектурными решениями, а не
                        просто скриншотом.</p>
                    <NuxtLink to="/cases" class="projects__link">Смотреть все проекты →</NuxtLink>
                </div>

                <ul class="projects__list">
                    <ProjectsListItem v-for="item in projectsItems" :item="item" :key="item.id"></ProjectsListItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.projects {

    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 22px;

        @include tablet {
            flex-direction: column;
        }

        margin-top: 40px;
    }

    &__link{
        transition: all var(--hover-time);
        padding-bottom: 2px;
        border-bottom: 1px solid transparent;

        &:hover{
            color: var(--color-accent);
            border-color: var(--color-accent);
        }
    }
}
</style>