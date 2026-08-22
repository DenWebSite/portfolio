<script setup lang="ts">

const timeline = [
    {
        id: 3,
        year: '2025 - сейчас',
        title: 'Frontend-разработчик',
        company: ['Хамелеон', 'гибрид'],
        descr: 'Отвечаю за весь производственный цикл фронтэнда',
    },
    {
        id: 2,
        year: '2024 - 2025',
        title: 'Freelance Frontend-разработчик',
        company: ['Freelance', 'удаленно'],
        descr: 'Выполнял верстку, адаптив сайтов. Добавлял им реактивности и HTTP запросы.'
    }
]

</script>

<template>
    <section class="section path" id="path">
        <div class="container">
            <div class="path__inner">
                <div class="path__info">
                    <p class="intro">Опыт</p>
                    <h2 class="path__title title">Путь в разработке</h2>
                </div>

                <div class="path__timeline">
                    <PathTimeLine v-for="item in timeline" :item="item" :key="item.id"></PathTimeLine>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.path__timeline{
    margin-top: 50px;
    margin-left: 30px;

    position: relative;

    &::before{
        content: '';
        position: absolute;
        left: -30px;
        display: block;
        width: 2px;
        height: 100%;
        background-color: var(--br-color);
    }
}

</style>