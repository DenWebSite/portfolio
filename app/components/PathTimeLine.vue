<script setup lang="ts">

interface TimeStep {
    id: number,
    year: string,
    title: string,
    company: string[],
    descr: string
}


const props = defineProps<{
    item: TimeStep,
}>()


</script>

<template>
    <div class="path__timeline-item">
        <p class="path__timeline-year">{{ item.year }}</p>
        <h3 class="path__timeline-title">{{ item.title }}</h3>
        <p class="path__timeline-company">{{ item.company[0] }} <span></span> {{ item.company[1] }}</p>
        <p class="path__timeline-descr">{{ item.descr }}</p>
    </div>
</template>

<style lang="scss" scoped>

.path__timeline{

    &-item{
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: -36px;
            width: 14px;
            height: 14px;
            background-color: #10140f;
            border: 1px solid var(--color-accent);
            border-radius: var(--br-biggest);
        }

        &+&{
            margin-top: 40px;
        }
    }

    &-year{
        color: var(--color-dim);
        font-size: 12px;
    }

    &-title{
        font-size: 18px;
        font-weight: 700;
        color: var(--color-light);
    }

    &-company{
        color: var(--color-accent);

        span{
            display: inline-block;
            width: 4px;
            height:4px;
            background-color: var(--color-accent);
            border-radius: var(--br-biggest);
            margin-inline: 6px;
            margin-bottom: 3px;
        }
    }

    &-descr{
        color: var(--color-dim)
    }
}

</style>