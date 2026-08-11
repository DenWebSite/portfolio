<script setup lang="ts">

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <p>© 2026 Мельник Денис</p>
                <p>Создано на <span><a href="https://nuxt.com/" target="_blank">Nuxt v4</a></span> + <span><a
                            href="https://vuejs.org/" target="_blank">Vue.js</a></span></p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    padding: 20px;
    color: var(--color-dim);
    font-size: 14px;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;

        span {
            color: var(--color-light);
        }
    }
}
</style>