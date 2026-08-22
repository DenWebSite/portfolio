<script setup lang="ts">
const isSearchOpen = ref(false);
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <h2 class="name">
                    <NuxtLink to="/"> Мельник <span>Денис</span></NuxtLink>
                </h2>

                <button class="search" @click="isSearchOpen = true">Быстрый поиск
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14"
                        id="Search-Visual--Streamline-Core" height="18" width="18">
                        <desc>
                            Search Visual Streamline Icon: https://streamlinehq.com
                        </desc>
                        <g id="search-visual">
                            <path id="Vector" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 10.5v2c0 0.2652 -0.1054 0.5196 -0.2929 0.7071s-0.4419 0.2929 -0.7071 0.2929h-2"
                                stroke-width="1"></path>
                            <path id="Vector_2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 0.5h2c0.2652 0 0.5196 0.105357 0.7071 0.292893 0.1875 0.187537 0.2929 0.441887 0.2929 0.707107v2"
                                stroke-width="1"></path>
                            <path id="Vector_3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="M0.5 3.5v-2c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h2"
                                stroke-width="1"></path>
                            <path id="Vector_4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="M3.5 13.5h-2c-0.26522 0 -0.51957 -0.1054 -0.707107 -0.2929C0.605357 13.0196 0.5 12.7652 0.5 12.5v-2"
                                stroke-width="1"></path>
                            <path id="Ellipse 1174" stroke="currentColor" d="M3.25 6.25a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"
                                stroke-width="1"></path>
                            <path id="Vector 2507" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="m8.5 8.5 2 2" stroke-width="1"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <Search v-model:isOpen="isSearchOpen" />
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
        padding: 15px 0;
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