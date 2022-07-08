<template>
    <div class="head light">
        <div class="title">
            <button class="btn" @click="hideProjectDetails"></button>
            <span>Project title</span>
        </div>
        <div class="options">
            <div class="control light">
                <button class="btn light">
                    <img src="../assets/icons/icon-chat.svg" alt="">
                </button>
                <span>1</span>
            </div>

            <div class="project-member-drop">
                <div class="control light">
                    <button class="btn light" @click="showProjectMembersDrop(this.$el)">
                        <img src="../assets/icons/icon-user.svg" alt="">
                    </button>
                    <span>2</span>
                </div>
                <div class="drop">
                    <div class="caret light"></div>
                    <div class="content light">
                        <div class="head light">
                            <strong class="light">Project members</strong>
                            <button class="btn" @click="hideProjectMembersDrop(this.$el)"><img
                                    src="../assets/icons/icon-times.svg" alt=""></button>
                        </div>
                        <div class="owner light">
                            <div class="avatar">
                                <img src="../assets/images/avatar.png" alt="">
                            </div>
                            <div>
                                <strong>user name</strong>
                                <span>email@gmail.com</span>
                                <small>Owner</small>
                            </div>
                        </div>
                        <div class="queue light">
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-exit.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-exit.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-times.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-times.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-times.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-times.svg" alt=""></button>
                            </div>
                            <div class="item light">
                                <div class="avatar">
                                    <img src="../assets/images/avatar.png" alt="">
                                </div>
                                <div class="info">
                                    <strong>user name</strong>
                                    <span>email@gmail.com</span>
                                    <small>Guest</small>
                                </div>
                                <button class="btn light"><img src="../assets/icons/icon-times.svg" alt=""></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button style="" class="btn light">
                <img src="../assets/icons/icon-pencil.svg" alt="">
                <svg fill="#828FA3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 306.637 306.637"
                     style="enable-background:new 0 0 306.637 306.637;" xml:space="preserve">
                    <g>
                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                            l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                            L265.13,75.602L231.035,41.507z"/>
                    </g>
                </svg>
            </button>

            <div class="menu">
                <button class="btn light" @click="toggleProjectDropMenu(this.$el)">
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.84615" cy="1.84615" r="1.84615" fill="#828FA3"/>
                        <circle cx="1.84615" cy="8.00045" r="1.84615" fill="#828FA3"/>
                        <circle cx="1.84615" cy="14.1538" r="1.84615" fill="#828FA3"/>
                    </svg>
                </button>
                <div class="project-menu-drop">
                    <div class="caret light"></div>
                    <div class="content light">
                        <div>
                            <img src="../assets/icons/icon-exit.svg" alt="">
                            <span>Leave this project</span>
                        </div>
                        <div>
                            <svg style="margin-right: 10px" width="16" height="11" viewBox="0 0 16 11" fill="#828FA3"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M15.8154 4.43419C14.2491 1.77636 11.328 0 8 0C4.67056 0 1.75012 1.77761 0.184624 4.43419C-0.0615413 4.8519 -0.0615413 5.37033 0.184624 5.78805C1.75087 8.44585 4.67195 10.2222 8 10.2222C11.3294 10.2222 14.2499 8.4446 15.8154 5.78802C16.0615 5.37031 16.0615 4.85189 15.8154 4.43419ZM8 8.88887C5.91217 8.88887 4.22223 7.19924 4.22223 5.1111C4.22223 3.02327 5.91184 1.33333 8 1.33333C10.0878 1.33333 11.7778 3.02294 11.7778 5.1111C11.7778 7.19893 10.0882 8.88887 8 8.88887ZM8 7.99999C9.5955 7.99999 10.8889 6.7066 10.8889 5.1111C10.8889 3.51561 9.5955 2.22222 8 2.22222C7.50811 2.22222 7.04503 2.3453 6.63964 2.56211L6.64053 2.56208C7.2975 2.56208 7.83008 3.09466 7.83008 3.75163C7.83008 4.40858 7.2975 4.94116 6.64053 4.94116C5.98356 4.94116 5.45098 4.4086 5.45098 3.75163L5.451 3.75074C5.2342 4.15613 5.11112 4.61921 5.11112 5.1111C5.11112 6.7066 6.4045 7.99999 8 7.99999Z"
                                      fill="#828FA3"/>
                            </svg>
                            <span>Show done tasks</span>
                        </div>
                        <div>
                            <img src="../assets/icons/icon-trash.svg" alt="">
                            <span>Delete this project</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoardHeader",
        methods: {
            hideProjectDetails(){
                this.$emit("onProjectBoardClosing")
            },
            toggleProjectDropMenu(element) {
                const menuDrop = element.querySelector(".project-menu-drop")
                if (menuDrop.classList.contains("show")) {
                    /*todo : fire up the event responsible of hiding all other drops before showing this one*/
                }
                menuDrop.classList.toggle("show")
            },
            showProjectMembersDrop(element) {
                const drop = element.querySelector(".drop")
                drop.classList.add("show")
                /*todo : fire the event responsible of hiding other drop before showing this one*/
            },
            hideProjectMembersDrop(element) {
                const drop = element.querySelector(".drop")
                drop.classList.remove("show")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        padding: 0 10px;

        .title {
            display: flex;
            align-items: center;

            .btn {
                width: 25px;
                height: 25px;
                margin-right: 5px;
                display: none;
                @media screen and (max-width: 600px) {
                    display: flex;
                }
            }

            span {
                font-weight: bold;
                font-size: 20px;
            }
        }

        .options {
            display: flex;
            align-items: center;

            .btn {
                height: 25px;
                width: 25px;
                padding: 5px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: 4px;
                transition: all ease-in-out .15s;
                position: relative;
                margin-right: 5px;

                &:hover {
                    background: rgba(99, 95, 199, .2);
                }
            }

            .control {
                height: fit-content;
                display: flex;
                align-items: center;
                margin-right: 10px;
                padding: 2px 5px;
                border-radius: 4px;

                &.light {
                    border: solid var(--color-light-line) 1px;
                }

                &.dark {
                    border: solid var(--color-dark-lines) 1px;
                }

                span {
                    color: var(--color-medium-grey);
                }
            }

            .project-member-drop {
                /*border: solid red 1px;*/
                position: relative;
                margin-right: 10px;

                .control {
                    margin-right: 0;
                }

                .drop {
                    position: absolute;
                    right: -75px;
                    margin-top: 3px;
                    width: 300px;
                    display: none;
                    z-index: 1;

                    &.show {
                        display: block;
                    }
                }

                .caret {
                    width: 5px;
                    height: 5px;
                    position: absolute;
                    right: 103px;
                    margin-top: -2.5px;
                    transform: rotateZ(45deg);

                    &.light {
                        background: var(--color-white);
                        border-left: solid var(--color-light-line) 1px;
                        border-top: solid var(--color-light-line) 1px;
                    }

                    &.dark {
                        background: var(--color-dark-grey);
                        border-left: solid var(--color-dark-lines) 1px;
                        border-top: solid var(--color-dark-lines) 1px;
                    }
                }

                .content {
                    border-radius: 4px;
                    overflow: hidden;
                    padding-top: 3.5px;

                    .head {
                        height: fit-content;
                        padding: 5px 10px;

                        strong {
                        }

                        .btn {
                            margin: 0;
                        }

                        &.light {
                            border-bottom: solid var(--color-light-line) 1px;
                        }

                        &.dark {
                            border-bottom: solid var(--color-dark-lines) 1px;
                        }
                    }

                    .owner {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 5px 10px;

                        .avatar {
                            height: 40px;
                            width: 40px;
                            overflow: hidden;

                            img {
                                width: 100%;
                            }
                        }

                        div {
                            &:last-child {
                                width: calc(100% - 50px);

                                & > * {
                                    display: block;
                                }

                                span {
                                    font-size: 12px;
                                    color: var(--color-medium-grey);
                                }

                                small {
                                    font-size: 10px;
                                    font-weight: bold;
                                    color: var(--color-medium-grey);
                                }
                            }
                        }

                        &.light {
                            border-bottom: solid var(--color-light-line) 1px;
                        }

                        &.dark {
                            border-bottom: solid var(--color-dark-lines) 1px;
                        }
                    }

                    .queue {
                        max-height: 200px;
                        overflow: auto;
                        padding: 0 5px;

                        &.light {
                            background: var(--color-light-grey) !important;
                        }

                        &.dark {
                            background: var(--color-very-dark-grey) !important;
                        }
                    }

                    .item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 5px 10px;
                        position: relative;
                        margin-top: 2.5px;
                        transition: all ease-in-out .15s;

                        &:hover {
                            .btn {
                                display: block;
                            }
                        }

                        .avatar {
                            height: 30px;
                            width: 30px;
                            overflow: hidden;

                            img {
                                width: 100%;
                            }
                        }

                        .info {
                            width: calc(100% - 40px);

                            & > * {
                                display: block;
                            }

                            span {
                                font-size: 12px;
                                color: var(--color-medium-grey);
                            }

                            small {
                                font-size: 10px;
                                font-weight: bold;
                                color: var(--color-medium-grey);
                            }
                        }

                        .btn {
                            position: absolute;
                            right: 5px;
                            display: none;

                            &.light {
                                &:hover {
                                    &:after {
                                        content: "Remove user";
                                        position: absolute;
                                        right: 30px;
                                        width: 80px;
                                        padding: 5px;
                                        align-self: center;
                                        background: var(--color-white);
                                    }

                                    &:before {
                                        content: "";
                                        position: absolute;
                                        padding: 5px;
                                        align-self: center;
                                        background: var(--color-white);
                                        width: 2px;
                                        height: 2px;
                                        right: 28px;
                                        margin-top: 3px;
                                        transform: rotateZ(45deg);
                                        background: var(--color-white);
                                    }
                                }

                            }

                            &.dark {
                                &:hover {
                                    &:after {
                                        content: "Remove user";
                                        position: absolute;
                                        right: 30px;
                                        width: 80px;
                                        padding: 5px;
                                        align-self: center;
                                        background: var(--color-dark-grey);
                                        color: var(--color-white);
                                    }

                                    &:before {
                                        content: "";
                                        position: absolute;
                                        padding: 5px;
                                        align-self: center;
                                        width: 2px;
                                        height: 2px;
                                        right: 28px;
                                        margin-top: 3px;
                                        transform: rotateZ(45deg);
                                        background: var(--color-dark-grey);
                                    }
                                }
                            }

                        }

                        &.light {
                            border: solid var(--color-light-line) 1px;
                            background: var(--color-white);

                            &:hover {
                                background: rgba(99, 95, 199, .1);
                            }
                        }

                        &.dark {
                            border: solid var(--color-dark-lines) 1px;
                            background: var(--color-dark-grey);

                            &:hover {
                                background: rgba(99, 95, 199, .1);
                            }
                        }

                        &:last-child {
                            margin-bottom: 2.5px;
                        }
                    }


                    &.light {
                        background: var(--color-white);
                        border: solid var(--color-light-line) 1px;
                        box-shadow: -2px 10px 10px rgb(0 0 0 / 3%), -6px 6px 3px rgb(0 0 0 / 4%);
                    }

                    &.dark {
                        background: var(--color-dark-grey);
                        border: solid var(--color-dark-lines) 1px;
                        box-shadow: -2px 10px 10px rgb(0 0 0 / 10%), -6px 6px 3px rgb(0 0 0 / 12%);
                    }
                }
            }

            .menu {
                .project-menu-drop {
                    width: 200px;
                    right: 10px;
                    position: absolute;
                    margin-top: 5px;
                    display: none;
                    z-index: 1;

                    &.show {
                        display: block;
                    }

                    .caret {
                        width: 5px;
                        height: 5px;
                        position: absolute;
                        right: 15px;
                        margin-top: -2.5px;
                        transform: rotateZ(45deg);

                        &.light {
                            background: var(--color-white);
                            border-left: solid var(--color-light-line) 1px;
                            border-top: solid var(--color-light-line) 1px;
                        }

                        &.dark {
                            background: var(--color-dark-grey);
                            border-left: solid var(--color-dark-lines) 1px;
                            border-top: solid var(--color-dark-lines) 1px;
                        }
                    }

                    .content {
                        border-radius: 4px;
                        overflow: hidden;
                        padding-top: 3.5px;

                        &.light {
                            background: var(--color-white);
                            border: solid var(--color-light-line) 1px;
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 3%), -6px 6px 3px rgb(0 0 0 / 4%);

                            & > div {
                                border-bottom: solid var(--color-light-line) 1px;
                            }
                        }

                        &.dark {
                            background: var(--color-dark-grey);
                            border: solid var(--color-dark-lines) 1px;
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 10%), -6px 6px 3px rgb(0 0 0 / 12%);

                            & > div {
                                border-bottom: solid var(--color-dark-lines) 1px;
                            }
                        }

                        & > div {
                            padding: 10px;
                            display: flex;
                            align-items: center;

                            img {
                                width: 16px;
                                height: 16px;
                                margin-right: 10px;
                            }

                            &:last-child {
                                border-bottom: 0;
                            }

                            &:hover {
                                background: rgba(99, 95, 199, .1);
                            }
                        }
                    }
                }
            }
        }

        &.light {
            background: var(--color-white);
            color: var(--color-black);
            border-bottom: solid var(--color-light-line) .5px;
        }

        &.dark {
            background: var(--color-dark-grey);
            color: var(--color-white);
            border-bottom: solid var(--color-dark-lines) .5px;
        }

    }
</style>