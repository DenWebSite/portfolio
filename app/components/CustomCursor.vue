<script setup lang="ts">
const cursor = ref<HTMLElement | null>(null);
const isHovering = ref(false);

const moveCursor = (e: MouseEvent) => {
    if (!cursor.value) return;
    cursor.value.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
};

// Эффект при наведении на ссылки/кнопки
const handleHoverIn = () => { isHovering.value = true; };
const handleHoverOut = () => { isHovering.value = false; };

onMounted(() => {
    document.addEventListener('mousemove', moveCursor);

    // Добавляем эффекты на интерактивные элементы
    document.querySelectorAll('a, button, input, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
    });
});

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', moveCursor);
});
</script>

<template>
    <div ref="cursor" class="custom-cursor" :class="{ hover: isHovering }">
        <span class="dot"></span>

        <span class="left"></span>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
    </div>
</template>

<style scoped>
.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.08s ease-out, width 0.2s, height 0.2s;
}

.left,
.top,
.right,
.bottom {
    color: var(--cursor-color);
    border-radius: 2px;
    display: block;
    width: 8px;
    height: 8px;
}

.left {
    border-left: 2px solid var(--cursor-color);
    border-top: 2px solid var(--cursor-color);
    position: relative;
    left: 0;
    top: 0;
}

.top {
    border-right: 2px solid var(--cursor-color);
    border-top: 2px solid var(--cursor-color);
    position: absolute;
    right: 0;
    top: 0;
}

.right {
    border-right: 2px solid var(--cursor-color);
    border-bottom: 2px solid var(--cursor-color);
    position: absolute;
    right: 0;
    bottom: 0;
}

.bottom {
    border-left: 2px solid var(--cursor-color);
    border-bottom: 2px solid var(--cursor-color);
    position: absolute;
    left: 0;
    bottom: 0;
}

.dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
}

.ring {
    position: absolute;
    inset: 0;
    border: 1.5px solid rgba(99, 199, 149, 0.4);
    border-radius: 50%;
    transition: all 0.2s;
}

.custom-cursor.hover {
    width: 32px;
    height: 32px;
}

.custom-cursor.hover .dot {
    width: 3px;
    height: 3px;
    background: #ffffff;
}
</style>