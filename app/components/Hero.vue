<script setup lang="ts">

</script>

<template>
    <section class="section hero">
        <div class="container">
            <div class="hero__inner">
                <div class="hero__info">
                    <p class="hero__descr intro">Frontend Developer <span></span>VUE 3 / NUXT</p>
                    <h1 class="hero__title">Собираю интерфейсы, которые <span>реагируют</span> раньше, чем вы кликнете.
                    </h1>
                    <p class="hero__subtitle subtitle">
                        Разрабатываю быстрые, доступные и хорошо типизированные продукты на Vue 3 и Nuxt — от лендингов
                        до SSR-платформ с реалтайм-данными.
                    </p>

                    <div class="hero__buttons">
                        <a class="btn" href="/">Мои проекты</a>
                        <a class="btn-transparent" href="/">Связятся</a>
                    </div>
                </div>

                <div class="hero__components">

                    <div class="comp__inner">
                        <div class="comp__header"><span></span><span></span><span></span>
                            <h2 class="comp__header-title">Дерево компонентов</h2>
                        </div>

                        <ul class="comp__list">
                            <li class="comp__list-item">
                                <p>
                                    &lt;HeroSection /&gt;
                                </p>
                            </li>
                            <li class="comp__list-item">
                                <p>
                                    &lt;Exprerience /&gt;
                                </p>
                            </li>
                            <li class="comp__list-item">
                                <p>
                                    &lt;CtaGroups :buttons/&gt;
                                </p>
                            </li>
                            <li class="comp__list-item">
                                <p>
                                    &lt;ButtonPrimary /&gt;
                                </p>
                            </li>
                            <li class="comp__list-item">
                                <p>
                                    &lt;ButtonGhost /&gt;
                                </p>
                            </li>
                            <li class="comp__list-item">
                                <p>
                                    &lt;ScrollHint /&gt;
                                </p>
                            </li>
                        </ul>

                        <div class="comp__footer">Весь сайт устроен так же - включите режим Inspect</div>
                    </div>

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
        max-width: 600px;
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
        line-height: 48px;
        font-weight: 700;
        margin-bottom: 20px;

        @include mobile {
            font-size: 38px;
            line-height: 38px;
        }

        @include mobile-s {
            font-size: 30px;
            line-height: 30px;
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
            min-width: 310px;
        }
    }
}

.comp {

    &__header {
        padding: 14px 28px;
        font-size: 12px;
        display: flex;
        align-items: center;
        background-color: #1b211a;
        border-radius: var(--br-xl) var(--br-xl) 0 0;

        @include mobile {
            font-size: 10px;
        }

        &-title {
            color: var(--color-dim);
        }

        span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 6px;
            background-color: var(--br-color);
            border-radius: var(--br-biggest);
        }
    }

    &__footer {
        color: var(--color-dim);
        font-size: 12px;
        border-radius: 0 0 var(--br-xl) var(--br-xl);
        padding: 14px 28px;

        @include mobile {
            font-size: 10px;
        }
    }

    &__list {
        border-top: 1px solid var(--br-color);
        border-bottom: 1px solid var(--br-color);
        padding: 18px;

        @include mobile {
            padding: 12px
        }

        &-item {
            font-size: 14px;
            padding: 3px 8px;
            transition: all var(--hover-time);

            &+& {
                margin-top: 6px;
            }

            @include hover {
                color: var(--color-accent) !important;
                background-color: rgba(99, 199, 149, 0.12);
                border-radius: var(--br-s);

                p::after {
                    background-color: var(--color-accent);
                }
            }

            p {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    background-color: transparent;
                    border-radius: var(--br-biggest);
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            &:nth-child(2),
            &:nth-child(3),
            &:last-child {
                margin-left: 20px;
            }

            &:nth-child(4),
            &:nth-child(5) {
                margin-left: 50px;
                color: var(--color-dim);
            }
        }
    }
}
</style>