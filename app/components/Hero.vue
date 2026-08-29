<script setup lang="ts">

</script>

<template>
    <section class="section hero">
        <div class="container">
            <div class="hero__inner">
                <div class="hero__info">
                    <p class="hero__descr intro">Frontend Developer <span></span>VUE 3 / NUXT</p>
                    <h1 class="hero__title">Не просто верстаю сайт, а привожу его в движение
                    </h1>
                    <p class="hero__subtitle subtitle">
                        Разрабатываю быстрые, доступные и хорошо типизированные продукты на Vue 3 и Nuxt — от лендингов
                        до SSR-платформ с реалтайм-данными.
                    </p>

                    <div class="hero__buttons">
                        <a class="btn" href="#case">Мои проекты</a>
                        <a class="btn-transparent" href="#form">Связятся</a>
                    </div>
                </div>

                <div class="hero__components">
                    <HeroTree />

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {

    &__inner {
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: space-between;

        @include mobile {
            flex-direction: column;
        }
    }

    &__info {
        max-width: 510px;
        display: flex;
        flex-direction: column;
        justify-content: start;

        @include mobile {
            align-items: center;
            text-align: center;
        }
    }

    &__title {
        font-size: 48px;
        line-height: 54px;
        font-weight: 700;
        margin-bottom: 20px;

        @include mobile {
            font-size: 38px;
            line-height: 48px;
        }

        @include mobile-s {
            font-size: 30px;
            line-height: 40px;
        }

        span {
            color: var(--color-accent)
        }

    }

    &__buttons {
        display: flex;
        align-items: center;
        gap: 20px;

        @include mobile {
            justify-content: center;
        }
    }

    &__components {
        max-width: 440px;
        min-width: 360px;
        width: 100%;
        background-color: var(--color-bg-elem);
        border-radius: var(--br-xl);
        border: 1px solid var(--br-color);

        @include mobile {
            min-width: 290px;
        }
    }
}
</style>