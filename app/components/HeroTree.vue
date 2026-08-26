<template>
    <div class="comp__inner">
        <div class="comp__header"><span></span><span></span><span></span>
            <h2 class="comp__header-title">Дерево компонентов</h2>
        </div>

        <ul class="comp__list">
            <li class="comp__list-item">
                <p>
                    &lt;HeroSection /&gt;
                </p>
            </li>
            <li class="comp__list-item">
                <p>
                    &lt;AboutMe /&gt;
                </p>
            </li>
            <li class="comp__list-item">
                <p>
                    &lt;ProjectsList /&gt;
                </p>
            </li>
            <li class="comp__list-item">
                <p>
                    &lt;ProjectsListItem /&gt;
                </p>
            </li>
            <li class="comp__list-item">
                <p>
                    &lt;ProjectsListItem /&gt;
                </p>
            </li>
            <li class="comp__list-item">
                <p>
                    &lt;Contact&gt;
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.comp {

    &__header {
        padding: 14px 28px;
        font-size: 12px;
        display: flex;
        align-items: center;
        background-color: #1b211a;
        border-radius: var(--br-xl) var(--br-xl) 0 0;

        @include mobile {
            font-size: 10px;
        }

        &-title {
            color: var(--color-dim);
        }

        span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 6px;
            background-color: var(--br-color);
            border-radius: var(--br-biggest);
        }
    }

    &__list {
        border-top: 1px solid var(--br-color);
        padding: 18px;

        @include mobile {
            padding: 12px
        }

        &-item {
            font-size: 14px;
            padding: 3px 8px;
            transition: all var(--hover-time);

            &+& {
                margin-top: 6px;
            }

            @include hover {
                color: var(--color-accent) !important;
                background-color: rgba(99, 199, 149, 0.12);
                border-radius: var(--br-s);

                p::after {
                    background-color: var(--color-accent);
                }
            }

            p {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    background-color: transparent;
                    border-radius: var(--br-biggest);
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            &:nth-child(2),
            &:nth-child(3),
            &:last-child {
                margin-left: 20px;
            }

            &:nth-child(4),
            &:nth-child(5) {
                margin-left: 50px;
                color: var(--color-dim);
            }
        }
    }
}
</style>