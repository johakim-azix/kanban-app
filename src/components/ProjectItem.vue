<template>
    <li @click="showProjectDetails(this.$el)" class="item light">
        <svg class="item__icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
                  fill="#635FC7"/>
        </svg>
        <div class="light">
            <strong class="item__label">Project name</strong>
            <span class="item__tasks-counter">2</span>
        </div>
    </li>
</template>

<script>
    export default {
        name: "ProjectItem",
        props: ["projectItem"],
        methods: {
            showProjectDetails(element) {
                this.$emit("onProjectBoardOpeningIntent", "the project")
                element.classList.add("active")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 0 10px;
        cursor: pointer;
        transition: background-color ease-in-out .15s;

        &.light {
            &:hover {
                background: rgba(99, 95, 199, .05);
            }

            &.active {
                background: rgba(99, 95, 199, .1);
                @media screen and (max-width: 600px) {
                    background: transparent;
                }
            }
        }

        &.dark {
            &:hover {
                background: rgba(99, 95, 199, .1);
            }

            &.active {
                background: rgba(99, 95, 199, .15);
            }
        }


        &:last-child {
            & > div:last-child {
                border: 0 !important;
            }
        }

        &__icon {
            margin-right: 5px;
            fill: black;
            width: 16px;
            height: 16px;
            align-self: start;
            margin-top: 12px;

            path {
                fill: var(--color-medium-grey);
            }
        }

        & > div:last-child {
            display: flex;
            justify-content: space-between;
            width: calc(100% - 40px);
            padding: 12px 10px 12px 0;

            &.light {
                border-bottom: solid var(--color-light-line) 1px;
            }

            &.dark {
                border-bottom: solid var(--color-dark-lines) 1px;
            }
        }

        &__label {
            width: calc(100% - 40px);
        }

        &__tasks-counter {
            display: inline-block;
            text-align: right;
            float: right;
            width: 20px;
            height: fit-content;
            margin-top: 2px;
            color: var(--color-medium-grey);
        }
    }
</style>