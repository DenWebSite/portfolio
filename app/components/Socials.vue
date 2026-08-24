<template>

    <div class="form__socials">
        <h2 class="form__socials-title"><span></span>Открыт для предложений</h2>

        <ul class="form__socials__list">
            <li class="form__socials__list-item">
                <a href="mailto:risskon111@gmail.com" target="_blank">risskon111@gmail.com</a>
                <p>Email</p>
            </li>
            <li class="form__socials__list-item">
                <a href="https://t.me/dsedulya" target="_blank">t.me/dsedulya</a>
                <p>Telegram</p>
            </li>
            <li class="form__socials__list-item">
                <a href="https://vk.ru/dsedulya" target="_blank">vk.ru/dsedulya</a>
                <p>VK</p>
            </li>
            <li class="form__socials__list-item">
                <a href="https://github.com/DenWebSite" target="_blank">github.com/DenWebSite</a>
                <p>Github</p>
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
.form {
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
}
</style>