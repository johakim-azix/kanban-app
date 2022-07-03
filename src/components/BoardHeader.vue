<template>
    <div class="head light">
        <div class="title">
            <button class="btn">

            </button>
            <span>Project title</span>
        </div>
        <div class="options">
            <div class="control light">
                <button class="btn light">
                    <img src="../assets/icons/icon-chat.svg" alt="">
                </button>
                <span>1</span>
            </div>

            <div class="control light">
                <button class="btn light">
                    <img src="../assets/icons/icon-user.svg" alt="">
                </button>
                <span>2</span>
            </div>
            <div class="control light"> <!--todo : the edit btn-->
                <button style="margin-right: 0" class="btn light">
                    <img src="../assets/icons/icon-user.svg" alt="">
                </button>
<!--                <span>2</span>-->
            </div>

            <div class="menu">
                <button  class="btn light" @click="toggleDropMenu"  >
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.84615" cy="1.84615" r="1.84615" fill="#828FA3"/>
                        <circle cx="1.84615" cy="8.00045" r="1.84615" fill="#828FA3"/>
                        <circle cx="1.84615" cy="14.1538" r="1.84615" fill="#828FA3"/>
                    </svg>
                </button>
                <div id="project-menu-drop" class="drop">
                    <div class="caret light"></div>
                    <div class="content light">
                        <div>
                            <img src="../assets/icons/icon-user.svg" alt="">
                            <span>Edit the project</span>
                        </div>
                        <div>
                            <img src="../assets/icons/icon-user.svg" alt="">
                            <span>Leave this project</span>
                        </div>
                        <div>
                            <img src="../assets/icons/icon-user.svg" alt="">
                            <span>Show done tasks</span>
                        </div>
                        <div>
                            <img src="../assets/icons/icon-user.svg" alt="">
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
        name: "BoardHeader"
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
                @media screen and (max-width: 600px){
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

                span{
                    color: var(--color-medium-grey);
                }
            }

            .menu {
                & > .btn {
                    height: 30px;
                    width: 25px;
                    padding: 5px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: 4px;
                    transition: all ease-in-out .15s;
                    position: relative;

                    &.light {
                        border: solid var(--color-light-line) 1px;
                    }

                    &.dark {
                        border: solid var(--color-dark-lines) 1px;
                    }

                    &:hover {
                        background: rgba(99, 95, 199, .2);
                    }

                    span {
                        position: absolute;
                        right: -15px;
                    }

                    /*&:last-child{*/
                    /*    &.light{*/
                    /*        border: solid var(--color-light-line) 1px;*/
                    /*    }*/
                    /*    &.dark{*/
                    /*        border: solid var(--color-dark-lines) 1px;*/
                    /*    }*/
                    /*}*/
                }
                .drop {
                    width: 200px;
                    right: 10px;
                    position: absolute;
                    margin-top: 5px;
                    display: none;
                    &.show{
                        display: block!important;
                    }
                    .caret {
                        width: 5px;
                        height: 5px;
                        position: absolute;
                        right: 12px;
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

                            & > div {
                                border-bottom: solid var(--color-light-line) 1px;
                            }
                        }

                        &.dark {
                            background: var(--color-dark-grey);
                            border: solid var(--color-dark-lines) 1px;

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