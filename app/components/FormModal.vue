<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean;
    title: string;
    message: string;
    type?: 'success' | 'error' | 'info';
    buttonText?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'close'): void;
}>();

const closeButton = ref<HTMLButtonElement | null>(null);
const scrollbarWidth = ref(0);

const toggleScroll = (lock: boolean) => {
    if (typeof document === 'undefined') return;

    if (lock) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollbarWidth.value + 'px';
    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
};

const close = () => {
    emit('update:modelValue', false);
    emit('close');
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.modelValue) {
        close();
    }
};

watch(
    () => props.modelValue,
    (newVal) => {
        toggleScroll(newVal);
        if (newVal && closeButton.value) {
            closeButton.value.focus();
        }
    },
    { immediate: true }
);

onMounted(() => {
    scrollbarWidth.value = window.innerWidth - document.documentElement.clientWidth;
    window.addEventListener('keydown', handleKeydown);
    if (props.modelValue) {
        toggleScroll(true);
    }
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    toggleScroll(false);
});
</script>


<template>
    <Teleport to="body">
        <div v-if="modelValue" class="wrapper" @click.self="close">
            <div class="modal__content" :class="type">
                <h3 class="modal__title">{{ title }}</h3>
                <p class="modal__message">{{ message }}</p>
                <button class="modal__btn btn" @click="close">{{ buttonText || 'Закрыть' }}</button>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.wrapper {
    z-index: 999;
    position: fixed;
    inset: 0;
    background: rgba(16, 20, 15, 0.2);
    backdrop-filter: blur(12px);
}

.modal {
    &__content {
        position: relative;
        z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 20px 20px 40px;
        max-width: 440px;
        width: 100%;
        height: auto;
        border-radius: var(--br-xl);
        border: 1px solid var(--br-color);
        background-color: var(--color-bg-elem);
        color: var(--color-light);
        text-align: center;
        animation: fadeIn 0.3s ease;
    }

    &__title {
        margin-top: 0;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: 700;
    }

    &__message {
        margin: 20px 0px 30px;
        font-size: 20px;
    }

    &__btn {
        text-transform: uppercase;
        font-weight: 700;
    }
}

.modal__content.success .modal__title {
    color: #16a34a;
}

.modal__content.error .modal__title {
    color: #dc2626;
}

.modal__content.info .modal__title {
    color: #2563eb;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>