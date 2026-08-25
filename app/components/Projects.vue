<script setup lang="ts">
import type { Project } from './../types/projects';
import projectsData from "./../../public/data/projects.json"

const projects = projectsData as Project[];
const firstThreeProjects = computed(() => projects.slice(0, 3));
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
                    <ProjectsListItem v-for="project in firstThreeProjects" :project="project" :key="project.id">
                    </ProjectsListItem>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.projects {

    &__list {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 22px;

        @include tablet {
            flex-direction: column;
        }

        margin-top: 40px;
    }

    &__link {
        transition: all var(--hover-time);
        padding-bottom: 2px;
        border-bottom: 1px solid transparent;

        &:hover {
            color: var(--color-accent);
            border-color: var(--color-accent);
        }
    }
}
</style>