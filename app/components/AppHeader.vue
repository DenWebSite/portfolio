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

                <div class="buttons">
                    <a class="cv"
                        href="https://drive.google.com/file/d/13Ha6sGnS3g9e0AmN0zsFrhxd9A0A_29H/view?usp=sharing"
                        target="_blank">Резюме</a>

                    <button class="search" @click="isSearchOpen = true">
                        <p> Быстрый поиск </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                            <title xmlns="">search-thin</title>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <Search v-model:isOpen="isSearchOpen" />
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 999;
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

    @include mobile-s {
        p {
            display: none;
        }
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

.buttons {
    display: flex;
    align-items: center;
    gap: 14px;
}

.cv {
    padding: 6px 10px;
    background-color: var(--color-bg-elem);
    border-radius: var(--br-m);
    border: 1px solid var(--br-color);
    corner-shape: squircle;
    cursor: pointer;
}
</style>