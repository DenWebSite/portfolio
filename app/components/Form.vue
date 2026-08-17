<script setup lang="ts">

</script>

<template>

    <section class="section form">
        <div class="container">
            <div class="form__inner">
                <div class="form__socials">
                    <h2 class="form__socials-title"><span></span>Открыт для предложений</h2>

                    <ul class="form__socials__list">
                        <li class="form__socials__list-item">
                            <a href="/" target="_blank">risskon111@gmail.com</a>
                            <p>Email</p>
                        </li>
                        <li class="form__socials__list-item">
                            <a href="/" target="_blank">@dsedulya</a>
                            <p>Telegram</p>
                        </li>
                        <li class="form__socials__list-item">
                            <a href="/" target="_blank">vk.com/dsedulya</a>
                            <p>VK</p>
                        </li>
                        <li class="form__socials__list-item">
                            <a href="https://github.com/DenWebSite" target="_blank">github.com/DenWebSite</a>
                            <p>Github</p>
                        </li>
                    </ul>
                </div>

                <form class="form__contact">
                    <div class="form__contact-group">
                        <label for="name" class="form__contact-label">Имя</label>
                        <input class="form__contact-input" name="name" id="name" type="text" placeholder="" required>
                    </div>

                    <div class="form__contact-group">
                        <label for="email" class="form__contact-label">Email</label>
                        <input class="form__contact-input" name="email" id="email" type="text" placeholder="" required>
                    </div>

                    <div class="form__contact-group">
                        <label for="message" class="form__contact-label">Сообщение</label>
                        <textarea class="form__contact-textarea" name="message" id="message" rows="5"
                            required></textarea>
                    </div>

                    <button class="btn">Отправить заявку</button>
                </form>
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

    &__socials {
        max-width: 530px;
        width: 100%;

        &-title {
            color: var(--color-accent);
            padding: 7px 14px;
            background-color: var(--color-bg-elem);
            border-radius: var(--br-xl);
            border: 1px solid var(--color-accent-dark);
            display: inline-block;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 10px;

            @include mobile-s {
                font-size: 14px;
            }

            span {
                display: inline-block;
                width: 6px;
                height: 6px;
                background-color: var(--color-accent);
                border-radius: var(--br-biggest);
                margin-right: 8px;
                margin-bottom: 2px;
            }
        }

        &__list {

            &-item {
                border-bottom: 1px solid var(--br-color);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                padding-right: 4px;
                transition: all var(--hover-time);

                @include mobile-s {
                    font-size: 14px;
                }


                &:has(a:hover) {
                    border-color: var(--color-accent-dark);
                    transform: translateX(5px);
                }

                a {
                    padding: 16px 0px 16px 4px;
                    width: 100%;
                    transition: all var(--hover-time);

                    @include hover {
                        color: var(--color-accent);
                    }
                }

                p {
                    color: var(--color-dim);
                }
            }
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