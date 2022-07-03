<template>
    <li name="collaboration-item" class="item light">
        <div :id="itemId" class="user" @click="expandProjectsDrop">
            <div class="user__avatar light">
                <img src="../assets/images/avatar.png">
            </div>
            <div class="light">
                <strong class="user__label">User name</strong>
                <button class="btn expanded"><img src="../assets/icons/icon-chevron-down.svg" alt="">
                </button>
            </div>
        </div>
        <div class="project-drop light">
            <ul class="queue light">
                <project-item/>
            </ul>
        </div>
    </li>
</template>

<script>
    import ProjectItem from "@/components/ProjectItem";
    export default {
        name: "CollaborationItem",
        components:{
            ProjectItem
        },
        props:["itemId"],
        methods: {
            expandProjectsDrop(event) {
                const paths = event.path
                let collaborationItem = null
                paths.forEach((path) => {
                    if (path.id !== null && path.id !== undefined && path.id !== "") {
                        const elmt = document.getElementById(path.id)
                        if (elmt.classList.contains("user")){
                            collaborationItem = elmt.parentElement
                            return true
                        }
                    }
                })
                collaborationItem.getElementsByClassName("user")[0].classList.toggle("expanded")
                collaborationItem.getElementsByClassName("project-drop")[0].classList.toggle("expanded")
                let collaborationItems = document.getElementsByClassName("collaboration-queue-container")[0].querySelectorAll(".queue>.item[name='collaboration-item']")
                collaborationItems.forEach((item)=>{
                    if (item.getElementsByClassName("user")[0].getAttribute("id") !== collaborationItem.getElementsByClassName("user")[0].getAttribute("id")){
                        item.getElementsByClassName("user")[0].classList.remove("expanded")
                        item.getElementsByClassName("project-drop")[0].classList.remove("expanded")
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        flex-wrap: wrap;

        &:last-child {
            .user {
                & > div:last-child {
                    border: 0!important;
                }
            }

            .project-drop.expanded {
                border-bottom: 0;
            }
        }

        .user {
            width: 100%;
            display: flex;
            margin-top: 5px;
            padding: 0 0 0 10px;
            transition: all ease-in-out .15s;

            &.expanded {
                & > div:last-child {
                    border-bottom: 0 !important;
                }

                .btn {
                    img {
                        transform: rotateX(180deg);
                    }
                }
            }

            & > div:last-child {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: calc(100% - 40px);
                padding: 12px 10px 12px 0;
                &.light{
                    border-bottom: solid var(--color-light-line) 1px;
                }

                &.dark{
                    border-bottom: solid var(--color-dark-lines) 1px;
                }
            }

            &__avatar {
                border: solid var(--color-light-line) 2px;
                margin-right: 5px;
                fill: black;
                width: 30px;
                height: 30px;
                border-radius: 100%;
                overflow: hidden;
                &.light{
                    border: solid var(--color-light-line) 2px;
                }

                &.dark{
                    border: solid var(--color-dark-lines) 2px;
                }
                img {
                    height: 100%;
                }
            }

            &__label {
                width: calc(100% - 40px);
            }

            .btn {
                transition: all ease-in-out .15s;
            }
        }

        .project-drop {
            width: calc(100% - 20px);
            overflow: hidden;
            height: 0;
            padding: 0;
            &.light{
                background: var(--color-light-grey);
            }
            &.dark{
                background: var(--color-very-dark-grey);
            }

            &.expanded {
                padding: 0 10px 7px 10px;
                height: fit-content !important;
                &.light{
                    border-top: solid var(--color-light-line) 1px;
                    border-bottom: solid var(--color-light-line) 1px;
                }
                &.dark{
                    border-top: solid var(--color-dark-lines) 1px;
                    border-bottom: solid var(--color-dark-lines) 1px;
                }
            }

            .queue {
                list-style: none;
                margin-top: 5px;
                border-radius: 4px;
                padding: 0;
                &.light{
                    background: var(--color-white);
                    border: solid var(--color-light-line) 1px;
                }
                &.dark{
                    background: var(--color-dark-grey);
                    border: solid var(--color-dark-lines) 1px;
                }

                .item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 0 0 10px;
                    cursor: pointer;
                    flex-wrap: nowrap;

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
                        /*align-items: center;*/
                        justify-content: space-between;
                        width: calc(100% - 40px);
                        padding: 12px 10px 12px 0;

                        &.light{
                            border-bottom: solid var(--color-light-line) 1px;
                        }
                        &.dark{
                            border-bottom: solid var(--color-dark-lines) 1px;
                        }
                    }

                    &__label {
                        width: calc(100% - 40px);
                        font-size: 14px;
                    }

                    &__tasks-counter {
                        display: inline-block;
                        text-align: right;
                        float: right;
                        width: 20px;
                    }
                }
            }
        }
    }
</style>