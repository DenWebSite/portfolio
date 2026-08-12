<script setup lang="ts">

</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <h2 class="name">Мельник <span>Денис</span></h2>

                <!-- <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__list-item">
                            <NuxtLink to="/">Стек</NuxtLink>
                        </li>
                        <li class="nav__list-item">
                            <NuxtLink to="/">Проекты</NuxtLink>
                        </li>
                        <li class="nav__list-item">
                            <NuxtLink to="/">Опыт</NuxtLink>
                        </li>
                        <li class="nav__list-item">
                            <NuxtLink to="/">Контакты</NuxtLink>
                        </li>
                    </ul>
                </nav> -->

                <div class="buttons">
                    <button class="search">Быстрый поиск <span></span></button>

                    <button class="inspect"><span class="inspect__dot"></span> Inspect</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(16, 20, 15, 0.72);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.name {
    font-weight: 500;

    span {
        background-color: var(--color-bg-elem);
        border: 1px solid var(--br-color);
        padding: 4px 8px;
        border-radius: var(--br-l);
        color: var(--color-accent);
    }
}

.buttons {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 14px;
    padding: 15px 0;
}

.search {
    border: 1px solid var(--br-color);
    background: var(--color-bg-elem);
    color: var(--color-dim);
    cursor: pointer;
    padding: 8px 14px;
    border-radius: var(--br-m);
    corner-shape: squircle;

    display: flex;
    align-items: center;
    gap: 8px;

    transition: all var(--hover-time);

    @include hover {
        border: 1px solid var(--color-accent-dark);
        color: var(--color-light);
    }

    span {
        display: block;
        border-radius: var(--br-s);
        corner-shape: squircle;
        background-color: #63706a;
        width: 32px;
        height: 20px;
    }
}

.inspect {
    border: 1px solid var(--color-accent-dark);
    background: transparent;
    color: var(--color-dim);
    cursor: pointer;
    padding: 8px 14px;
    border-radius: var(--br-m);
    corner-shape: squircle;

    display: flex;
    align-items: center;
    gap: 8px;

    transition: all var(--hover-time);

    @include hover {
        border: 1px solid var(--color-accent);

        .inspect__dot {
            background-color: var(--color-accent);
        }
    }

    &__dot {
        display: block;
        border-radius: var(--br-biggest);
        background-color: #63706a;
        width: 7px;
        height: 7px;
    }
}

// .nav__list {
//     display: flex;
//     align-items: center;
//     gap: 16px;
// }
</style>