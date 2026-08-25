<script setup lang="ts">
import timelineData from './../../public/data/timeline.json';
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
                    <PathTimeLine v-for="item in timelineData" :item="item" :key="item.id"></PathTimeLine>
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