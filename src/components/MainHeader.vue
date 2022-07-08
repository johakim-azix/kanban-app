<template>
    <div class="header light">
        <div class="header__logo">
            <img src="../assets/app-logo.svg">
            <span>Kanban</span>
        </div>
        <div class="header__nav">
            <button class="btn light active">
                <img src="../assets/icons/icon-bell.svg" alt="">
            </button>
            <div class="dropdown">
                <div class="avatar light" @click="toggleUserDrop">
                    <img src="../assets/images/avatar.png">
                </div>
                <div id="header-drop" class="drop">
                    <div class="caret light"></div>
                    <div class="content light">
                        <div class="profile light">
                            <div class="avatar-large light">
                                <img src="../assets/images/avatar.png" alt="">
                            </div>
                            <div class="info">
                                <strong>Azix Johakim</strong>
                                <small>johakimazix4@gmail.com</small>
                            </div>
                        </div>
                        <div class="logout light">
                            <img src="../assets/icons/icon-exit.svg" alt="">
                            <span>Logout</span>
                        </div>
                        <div class="theme light">
                            <div>
                                <img src="../assets/icons/icon-theme.svg" alt="">
                                Theme
                            </div>
                            <div class="switch-container light">
                                <img src="../assets/icons/icon-sun.svg" alt="">
                                <div id="theme-switch" class="switch" @click="toggleTheme"></div>
                                <img src="../assets/icons/icon-moon.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        methods: {
            toggleUserDrop() {
                const userDrop = document.getElementById("header-drop")
                userDrop.classList.toggle("show")
            },
            toggleTheme() {
                const themeSwitch = document.getElementById("theme-switch")
                let views = undefined
                if (!themeSwitch.classList.contains("on")) {
                    views = document.getElementsByClassName("light")
                    if (views.length === 0) return
                    for (let i = 0; i < views.length; i++) {
                        views[i].classList.replace("light", "dark")
                    }
                    views = document.getElementsByClassName("light")
                    if (views.length === 0) return
                    this.toggleTheme()
                } else {
                    views = document.getElementsByClassName("dark")
                    if (views.length === 0) return
                    for (let i = 0; i < views.length; i++) {
                        views[i].classList.replace("dark", "light")
                    }
                    views = document.getElementsByClassName("dark")
                    if (views.length === 0) return
                    this.toggleTheme()
                }
                themeSwitch.classList.toggle("on")
                /*todo : we persist the current theme on local storage*/
                // if (themeSwitch.classList.contains("on")){
                //     localStorage.setItem("darktheme", true)
                // }else {
                //
                // }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        padding: 0 10px;

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


        &__logo {
            display: flex;
            align-items: center;

            img {
                margin-right: 10px;
            }

            span {
                font-weight: bold;
                font-size: 25px;
            }
        }

        &__nav {
            display: flex;
            .btn{
                width: 25px;
                height: 25px;
                align-self: center;
                margin-right: 5px;
                padding: 5px;
                border-radius: 4px;
                position: relative;
                &.active{
                    &:after{
                        content: "";
                        width: 8px;
                        height: 8px;
                        background: crimson;
                        position: absolute;
                        top: -2px;
                        border-radius: 100%;
                    }
                }

                &.light{
                    border: solid var(--color-light-line) 1px;
                }
                &.dark{
                    border: solid var(--color-dark-lines) 1px;
                }
            }
            .dropdown {
                position: relative;

                .avatar {
                    overflow: hidden;
                    height: 30px;
                    width: 30px;
                    border-radius: 100%;

                    &.light {
                        border: solid var(--color-light-line) 2px;
                    }

                    &.dark {
                        border: solid var(--color-dark-lines) 2px;
                    }
                }

                .drop {
                    height: fit-content;
                    width: fit-content;
                    min-width: 300px;
                    background: transparent;
                    position: absolute;
                    display: none;
                    right: 0;

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
                        height: 100%;
                        width: 100%;
                        border-radius: 4px;
                        overflow: hidden;

                        &.light {
                            background: var(--color-white);
                            border: solid var(--color-light-line) 1px;
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 3%), -6px 6px 3px rgb(0 0 0 / 4%), 2px 10px 10px rgb(0 0 0 / 3%), 6px 6px 3px rgb(0 0 0 / 4%);
                        }

                        &.dark {
                            background: var(--color-dark-grey);
                            border: solid var(--color-dark-lines) 1px;
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 10%), -6px 6px 3px rgb(0 0 0 / 12%), 2px 10px 10px rgb(0 0 0 / 10%), 6px 6px 3px rgb(0 0 0 / 12%);
                        }

                        .profile {
                            padding: 10px;
                            display: flex;
                            justify-content: space-between;

                            &.light {
                                border-bottom: solid var(--color-light-line) .5px;
                            }

                            &.dark {
                                border-bottom: solid var(--color-dark-lines) .5px;
                            }

                            .avatar-large {
                                height: 50px;
                                width: 50px;
                                border-radius: 100%;

                                &.light {
                                    border: solid var(--color-light-line) 2px;
                                }

                                &.dark {
                                    border: solid var(--color-dark-lines) 2px;
                                }
                            }

                            .info {
                                border: solid transparent 1px;
                                width: calc(100% - 60px);
                                display: flex;
                                flex-wrap: wrap;

                                & > * {
                                    display: block;
                                    width: 100%;
                                }

                                small {
                                    color: var(--color-medium-grey);
                                }
                            }
                        }

                        .theme {
                            padding: 10px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            & > div:first-child {
                                img {
                                    margin-right: 5px;
                                    width: 20px;
                                    height: 20px;
                                }

                                display: none;
                            }

                            .switch-container {
                                width: 100%;
                                height: fit-content;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                border-radius: 4px;
                                padding: 10px 64px;

                                &.light {
                                    background: var(--color-light-grey);
                                }

                                &.dark {
                                    background: var(--color-very-dark-grey);
                                }
                            }

                            img {
                                height: 18.33px;
                                width: 18.33px;
                            }

                            .switch {
                                height: 20px;
                                width: 40px;
                                border-radius: 100px;
                                background: var(--color-main-purple);
                                position: relative;
                                display: flex;

                                &:after {
                                    content: "";
                                    height: 15px;
                                    width: 15px;
                                    background: var(--color-white);
                                    border-radius: 100%;
                                    position: absolute;
                                    left: 5px;
                                    align-self: center;
                                    transition: all ease-in-out .15s;
                                }

                                &.on {
                                    &:after {
                                        left: calc(100% - 20px);
                                    }
                                }
                            }
                        }

                        .logout {
                            padding: 10px;
                            cursor: pointer;

                            &.light {
                                border-bottom: solid var(--color-light-line) .5px;
                            }

                            &.dark {
                                border-bottom: solid var(--color-dark-lines) .5px;
                            }

                            img {
                                width: 20px;
                                height: 20px;
                                overflow: hidden;
                                margin-right: 10px;
                            }

                            &:hover {
                                background: rgba(99, 95, 199, .1);
                            }
                        }
                    }
                }

                img {
                    width: 100%;
                    margin-bottom: -5px;
                }
            }
        }
    }
</style>