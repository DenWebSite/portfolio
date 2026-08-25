<script lang="ts" setup>

import type { Project } from './../types/projects';
import projectsData from './../../public/data/projects.json';

const projects = projectsData as Project[];
</script>

<template>

    <section class="section cases">
        <div class="container">
            <div class="cases__header">
                <p class="intro">Все проекты</p>
                <h1 class="cases__title title">
                    Всё, что я собирал за последний год
                </h1>
                <p class="subtitle">Полный список проектов - от Телеграм мини-аппов до корпоративных сайтов</p>
            </div>

            <Search></Search>

            <div class="cases__example">
                <Case v-for="(project, index) in projects" 
                :project="project" 
                :key="project.id" 
                :index="index + 1">
            </Case>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.cases {
    &__header {
        margin-bottom: 140px;
    }

    &__title {
        font-size: 48px;
        line-height: 58px;
        color: var(--color-light);
        max-width: unset;

        @include mobile {
            font-size: 36px;
            line-height: 46px;
        }

        @include mobile-s {
            font-size: 30px;
            line-height: 40px;
        }
    }
}
</style>
