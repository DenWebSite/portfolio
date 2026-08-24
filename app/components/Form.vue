<script setup>
const config = useRuntimeConfig();

const form = reactive({
    name: '',
    email: '',
    message: '',
})

const isModalOpen = ref(false);
const modalTitle = ref('');
const modalMessage = ref('');
const modalType = ref('success')
const isLoading = ref(false);

const openModal = (type, title, message) => {
    modalType.value = type;
    modalTitle.value = title;
    modalMessage.value = message;
    isModalOpen.value = true;
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isFormValueFull = (form) => {
    return form.name.trim() && form.email.trim() && form.message.trim();
}

const submitForm = async () => {
    if (!isFormValueFull(form)) {
        openModal('error', 'Ошибка', 'Пожалуйста, заполните все поля');
        return;
    }

    if (!isValidEmail(form.email)) {
        openModal('error', 'Ошибка', 'Введите корректный email')
        return
    }

    isLoading.value = true;

    try {
        const response = await $fetch(`${config.public.apiBase}/contact`, {
            method: 'POST',
            body: {
                name: form.name,
                email: form.email,
                message: form.message
            }
        })

        openModal('success', 'Успешно!', 'Ваше сообщение отправлено!')

        form.name = '';
        form.email = '';
        form.message = '';
    }
    catch (error) {
        openModal('error', 'Ошибка', 'Произошла ошибка. Попробуйте позже.')
    }
    finally {
        isLoading.value = false;
    }
}


</script>

<template>

    <section class="section form" id="form">
        <div class="container">
            <div class="form__inner">
                <Socials />

                <form class="form__contact" @submit.prevent="submitForm">
                    <div class="form__contact-group">
                        <label for="name" class="form__contact-label">Имя</label>
                        <input v-model="form.name" class="form__contact-input" name="name" id="name" type="text"
                            placeholder="" required>
                    </div>

                    <div class="form__contact-group">
                        <label for="email" class="form__contact-label">Email</label>
                        <input v-model="form.email" class="form__contact-input" name="email" id="email" type="text"
                            placeholder="" required>
                    </div>

                    <div class="form__contact-group">
                        <label for="message" class="form__contact-label">Сообщение</label>
                        <textarea v-model="form.message" class="form__contact-textarea" name="message" id="message"
                            rows="5" required></textarea>
                    </div>

                    <button class="btn" type="submit" :disabled="isLoading">{{ isLoading ? "Отправляю..." : "Отправить заявку" }}</button>
                </form>

                <FormModal v-model="isModalOpen" :title="modalTitle" :message="modalMessage" :type="modalType"
                    @close="modalType = 'success'" />
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.form {

    &__inner {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 40px;

        @include mobile {
            flex-direction: column;
            align-items: center;
        }
    }

    &__contact {
        max-width: 470px;
        width: 100%;

        &-group {

            &+& {
                margin-top: 14px;
            }
        }

        &-label {
            display: block;
            margin-bottom: 4px;
            color: var(--color-dim);
            font-weight: 500;

            @include mobile-s {
                font-size: 14px;
            }
        }

        &-input {
            width: 100%;
            background-color: var(--color-bg-elem);
            padding: 12px 15px;
            color: var(--color-light);
            border-radius: var(--br-m);
            border: 1px solid var(--br-color);
            font-size: 14px;

            &:focus {
                border-color: var(--color-accent);
            }
        }

        &-textarea {
            width: 100%;
            background-color: var(--color-bg-elem);
            padding: 12px 15px;
            margin-bottom: 18px;
            color: var(--color-light);
            border-radius: var(--br-m);
            border: 1px solid var(--br-color);
            font-size: 14px;
            resize: none;
            outline: none;
            transition: all var(--hover-time);

            &:focus {
                border-color: var(--color-accent) !important;
            }


            scrollbar-color: var(--color-accent-dark) transparent;

            &::-webkit-scrollbar {
                width: 8px;
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--color-dim);
                border-radius: 20px;
                border: 2px solid transparent;
                background-clip: content-box;

                @include hover {
                    background-color: var(--color-accent);
                }
            }

            &::-webkit-scrollbar-track {
                background-color: transparent;
                margin: 4px 0;
            }

            &::-webkit-scrollbar-button {
                display: none;
            }
        }
    }
}
</style>