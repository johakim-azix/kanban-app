<template>
    <div class="task light">
        <div id="task-ckeck-id_task" class="check-container light unchecked" @click="toggleTaskState(this.$el)">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27588 3.06597L4.03234 5.82243L9.03234 0.822433" stroke="white"
                      stroke-width="2"/>
            </svg>
        </div>
        <div class="info">
            <div class="title">Task title</div>
            <div class="description">Task description; a very long text</div>
            <div class="indicators">
                <div><span><img src="../assets/icons/icon-chat.svg" alt=""></span><span>2</span>,</div>
                <div>
                    <span>0</span>
                    of
                    <span>3</span>
                    substasks
                </div>
            </div>
        </div>
        <div class="options">
            <button class="btn"><img src="../assets/icons/icon-more-vert.svg" alt=""></button>
            <div class="avatar light">
                <img src="../assets/icons/icon-user.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: ["task-item-id"],
        methods: {
            toggleTaskState(taskItem) {
                const itemCheckbox = taskItem.querySelector(".check-container")
                if (taskItem.classList.contains("checked")) {
                    itemCheckbox.classList.remove("checked")
                    itemCheckbox.classList.add("unchecked")
                    taskItem.getElementsByClassName("title")[0].classList.remove("done")
                    taskItem.getElementsByClassName("description")[0].classList.remove("done")
                } else {
                    itemCheckbox.classList.remove("unchecked")
                    itemCheckbox.classList.add("checked")
                    taskItem.getElementsByClassName("title")[0].classList.add("done")
                    taskItem.getElementsByClassName("description")[0].classList.add("done")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .task {
        cursor: pointer;
        padding: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        border-radius: 4px;
        margin-bottom: 10px;

        &.light {
            border: solid var(--color-light-line) 1px;
            background: var(--color-white);
            box-shadow: 0 10px 10px rgb(0 0 0 / 3%), 0 6px 3px rgb(0 0 0 / 4%);
        }

        &.dark {
            border: solid var(--color-dark-lines) 1px;
            background: var(--color-dark-grey);
            box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 6px 3px rgb(0 0 0 / 12%);
        }

        .check-container {
            cursor: pointer;
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            &.light {
                &.unchecked {
                    background: url("../assets/icons/icon-checkbox-unchecked-light.svg") no-repeat;
                    transition: all ease-in-out .15s;

                    path {
                        stroke: transparent;
                    }

                    &:hover {
                        path {
                            stroke: rgba(99, 95, 199, .2);
                        }
                    }
                }

                &.checked {
                    background: url("../assets/icons/icon-checkbox-checked-light.svg") no-repeat;
                    transition: all ease-in-out .15s;

                    path {
                        stroke: var(--color-white);
                    }

                    &:hover {
                        opacity: .5;
                    }
                }
            }

            &.dark {
                &.unchecked {
                    background: url("../assets/icons/icon-checkbox-unchecked-dark.svg") no-repeat;
                    transition: all ease-in-out .15s;

                    path {
                        stroke: transparent;
                    }

                    &:hover {
                        path {
                            stroke: rgba(255, 255, 255, .5);
                        }
                    }
                }

                &.checked {
                    background: url("../assets/icons/icon-checkbox-checked-dark.svg") no-repeat;
                    transition: all ease-in-out .15s;

                    path {
                        stroke: var(--color-white);
                    }

                    &:hover {
                        opacity: .5;
                    }
                }
            }
        }

        .info {
            width: calc(100% - 80px);

            .title {
                font-size: var(--heading-m-font-size);
                font-weight: bold;
                text-decoration: none;

                &.done {
                    text-decoration: line-through;
                }
            }

            .description {
                font-size: var(--paragragh-medium-font-size);
                color: var(--color-medium-grey);
                text-decoration: none;

                &.done {
                    text-decoration: line-through;
                }
            }

            .indicators {
                font-size: var(--paragragh-medium-font-size);
                color: var(--color-medium-grey);
                display: flex;
                margin-top: 10px;

                div {
                    &:first-child {
                        width: fit-content;
                        display: flex;
                        align-items: center;
                        margin-right: 10px;

                        img {
                            width: 16px;
                            margin-right: 5px;
                            margin-bottom: -3px;
                        }
                    }
                }
            }
        }

        .options {
            /*border: solid black;*/
            display: flex;
            align-items: center;
            width: 50px;

            .btn {
                width: 22px;
                height: 22px;
                margin-right: 5px;
                border-radius: 2px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: rgba(99, 95, 199, .1);
            }

            .avatar {
                width: 20px;
                height: 20px;
                overflow: hidden;
                border-radius: 100%;

                &.light {
                    border: solid var(--color-light-line) 2px;
                }

                &.dark {
                    border: solid var(--color-dark-lines) 2px;
                }
            }
        }
    }
</style>