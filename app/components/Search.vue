<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void;
}>();

const isOpen = ref(props.isOpen);
const searchQuery = ref('');

const menuItems = [
    { label: 'Перейти: Главная', link: '/' },
    { label: 'Перейти: Все проекты', link: '/cases' },
    { label: 'Открыть GitHub', link: 'https://github.com/DenWebSite' },
    { label: 'Перейти: Обо мне', link: { path: '/', hash: '#aboout' } },
    { label: 'Перейти: Кейсы', link: { path: '/', hash: '#case' } },
    { label: 'Перейти: Опыт', link: { path: '/', hash: '#path' } },
    { label: 'Перейти: Контакты', link: { path: '/', hash: '#form' } },
];

const filteredItems = computed(() => {
    if (!searchQuery.value) return menuItems;

    const query = searchQuery.value.toLowerCase();
    return menuItems.filter(item =>
        item.label.toLowerCase().includes(query)
    );
});

watch(() => props.isOpen, (newValue) => {
    isOpen.value = newValue;
    if (newValue) {
        searchQuery.value = '';
    }
});

const closeModal = () => {
    isOpen.value = false;
    toggleScroll(false);
    emit('update:isOpen', false);
};

const toggleScroll = (lock: boolean) => {
    document.body.style.overflow = lock ? 'hidden' : '';
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeModal();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    if (isOpen.value) toggleScroll(true);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    toggleScroll(false);
});
</script>

<template>
    <Transition name="modal">
        <div class="wrapper" v-if="isOpen" @click.self="closeModal()">
            <div class="search">
                <div class="search__inner">
                    <label class="search-label">Введите название раздела</label>

                    <input type="text" class="search-input" placeholder="Введите название раздела" v-model="searchQuery"
                        autofocus>

                    <ul v-if="filteredItems.length > 0" class="search__list">
                        <li v-for="(item, index) in filteredItems" :key="index" class="search__list-item">
                            <NuxtLink :to="item.link" class="search__list-link" @click="closeModal()">{{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <div v-else class="search-empty">
                        Ничего не найдено
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>



<style lang="scss" scoped>
.wrapper {
    z-index: 999;
    position: fixed;
    inset: 0;
    background: rgba(16, 20, 15, 0.5);
    backdrop-filter: blur(12px);
}

.search {
    position: relative;
    z-index: 999;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    height: auto;
    padding: 20px 20px 20px 40px;
    border-radius: var(--br-xl);
    border: 1px solid var(--br-color);
    background-color: var(--color-bg-elem);
    color: var(--color-dim);


    &-label {
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
    }

    &-input {
        color: var(--color-dim);
        padding: 10px 4px;
        width: 100%;
    }

    &__list {
        padding-top: 10px;
        border-top: 2px solid var(--br-color);

        &-item {
            padding: 10px 14px;
            border-radius: var(--br-m);
            transform: translateX(-14px);
            transition: all var(--hover-time);

            a {
                display: inline-block;
                width: 100%;
            }

            &:hover {
                background-color: var(--color-accent-dark);
                color: var(--color-accent);
            }
        }
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .search,
.modal-leave-active .search {
    transition: transform 0.3s cubic-bezier(0.175, 0.3, 0.32, 1), opacity 0.3s ease;
}

.modal-enter-from .search,
.modal-leave-to .search {
    transform: scale(0.95);
    opacity: 0;
}
</style>