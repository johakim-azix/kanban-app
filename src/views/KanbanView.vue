<template>
    <div class="side-left-frame-layout light">
        <main-header/>
        <div class="scroll-view">
            <project-queue @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-queue @onProjectBoardOpening="openProjectBoard"/>
        </div>
    </div>
    <div id="side-right-frame-layout" class="side-right-frame-layout light">
        <board-header @onProjectBoardClosing="closeProjectBoard"/>
        <div class="board">
            <span id="sideLeftVisibilityToggle" class="project-section-visibility-toggle"
                  @click="toggleSideLeftFrameLayoutVisibility">
                <img src="../assets/icons/icon-eye-closed.svg" alt="">
                <img src="../assets/icons/icon-eye-opened.svg" alt="">
            </span>
            <section-slider @onAddSessionFormShow="closeDrops"/>
        </div>
    </div>
</template>

<script>
    import MainHeader from "@/components/MainHeader";
    import ProjectQueue from "@/components/ProjectQueue";
    import CollaborationQueue from "@/components/CollaborationQueue";
    import BoardHeader from "@/components/BoardHeader";
    import SectionSlider from "@/components/SectionSlider";

    export default {
        name: "KanbanView",
        components: {
            MainHeader,
            ProjectQueue,
            CollaborationQueue,
            BoardHeader,
            SectionSlider
        },
        data() {
            return {
                authUser: {
                    id: "",
                    pseudo: "Azix Johakim",
                    email: "johakimazix4@gmail.com",
                    avatar: "link/to/avatar/img",
                    /*todo : the current theme ill be saved in the cookie session */
                },
                projects: [
                    {
                        id: "",
                        projectName: "building the canvas app",
                        taskCount: 2,
                        sectionIds: ["", "", "", "", ""], /*todo: use this later to build the section loading animation*/
                        /*todo : each id will be mapped to a specific load where the results will be displayed once available*/
                        comments: {
                            count: 2,
                            messages: [
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "This project board groups mains features that need to be implemented. Each feature will be given to a team, witch will implement them under the guidance of a scrum master. So will have boards for each feature where the feature itself will be break down into small tasks or new features according to the team analysis.",
                                        date: "wednesday 13 july"
                                    }
                                },
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 2",
                                        date: "thursday 14 july"
                                    }
                                }
                            ]
                        },
                        members: {
                            count: 2,
                            owner: {
                                id: "",
                                pseudo: "Azix Johakim",
                                email: "johakimazix4@gmail.com",
                                avatar: "link/to/avatar/img",
                            },
                            guests: [
                                {
                                    id: "",
                                    pseudo: "Azix Johakim",
                                    email: "johakimazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                },
                                {
                                    id: "",
                                    pseudo: "Marlonne Azix",
                                    email: "marlonneazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                }
                            ]
                        }
                    },
                    {
                        id: "",
                        projectName: "building the canvas app frontend",
                        taskCount: 2,
                        sectionCount: 10, /*todo: use this later to build the section loading animation*/
                        comments: {
                            count: 2,
                            messages: [
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 1",
                                        date: "wednesday 13 july"
                                    }
                                },
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 2",
                                        date: "thursday 14 july"
                                    }
                                }
                            ]
                        },
                        members: {
                            count: 2,
                            owner: {
                                id: "",
                                pseudo: "Azix Johakim",
                                email: "johakimazix4@gmail.com",
                                avatar: "link/to/avatar/img",
                            },
                            guests: [
                                {
                                    id: "",
                                    pseudo: "Azix Johakim",
                                    email: "johakimazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                },
                                {
                                    id: "",
                                    pseudo: "Marlonne Azix",
                                    email: "marlonneazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                }
                            ]
                        }
                    },
                    {
                        id: "",
                        projectName: "building the canvas app backend",
                        taskCount: 2,
                        sectionCount: 10, /*todo: use this later to build the section loading animation*/
                        comments: {
                            count: 2,
                            messages: [
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 1",
                                        date: "wednesday 13 july"
                                    }
                                },
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 2",
                                        date: "thursday 14 july"
                                    }
                                }
                            ]
                        },
                        members: {
                            count: 2,
                            owner: {
                                id: "",
                                pseudo: "Azix Johakim",
                                email: "johakimazix4@gmail.com",
                                avatar: "link/to/avatar/img",
                            },
                            guests: [
                                {
                                    id: "",
                                    pseudo: "Azix Johakim",
                                    email: "johakimazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                },
                                {
                                    id: "",
                                    pseudo: "Marlonne Azix",
                                    email: "marlonneazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                }
                            ]
                        }
                    },
                    {
                        id: "",
                        projectName: "building the canvas app UI UX",
                        taskCount: 2,
                        sectionCount: 10, /*todo: use this later to build the section loading animation*/
                        comments: {
                            count: 2,
                            messages: [
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 1",
                                        date: "wednesday 13 july"
                                    }
                                },
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 2",
                                        date: "thursday 14 july"
                                    }
                                }
                            ]
                        },
                        members: {
                            count: 2,
                            owner: {
                                id: "",
                                pseudo: "Azix Johakim",
                                email: "johakimazix4@gmail.com",
                                avatar: "link/to/avatar/img",
                            },
                            guests: [
                                {
                                    id: "",
                                    pseudo: "Azix Johakim",
                                    email: "johakimazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                },
                                {
                                    id: "",
                                    pseudo: "Marlonne Azix",
                                    email: "marlonneazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                }
                            ]
                        }
                    },
                    {
                        id: "",
                        projectName: "building the canvas app user guide / tutorials",
                        taskCount: 2,
                        sectionCount: 10, /*todo: use this later to build the section loading animation*/
                        comments: {
                            count: 2,
                            messages: [
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 1",
                                        date: "wednesday 13 july"
                                    }
                                },
                                {
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    msg: {
                                        id: "",
                                        content: "The comment 2",
                                        date: "thursday 14 july"
                                    }
                                }
                            ]
                        },
                        members: {
                            count: 2,
                            owner: {
                                id: "",
                                pseudo: "Azix Johakim",
                                email: "johakimazix4@gmail.com",
                                avatar: "link/to/avatar/img",
                            },
                            guests: [
                                {
                                    id: "",
                                    pseudo: "Azix Johakim",
                                    email: "johakimazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                },
                                {
                                    id: "",
                                    pseudo: "Marlonne Azix",
                                    email: "marlonneazix4@gmail.com",
                                    avatar: "link/to/avatar/img",
                                }
                            ]
                        }
                    },
                ]
                ,
                collaborations: [
                    {
                        owner: {
                            id: "",
                            pseudo: "Azix Johakim",
                            email: "johakimazix4@gmail.com",
                            avatar: "link/to/avatar/img",
                        },
                        projects: [
                            {
                                id: "",
                                projectName: "building the canvas app",
                                taskCount: 2,
                                sectionIds: ["", "", "", "", ""],
                                comments: {
                                    count: 2,
                                    messages: [
                                        {
                                            owner: {
                                                id: "",
                                                pseudo: "Azix Johakim",
                                                email: "johakimazix4@gmail.com",
                                                avatar: "link/to/avatar/img",
                                            },
                                            msg: {
                                                id: "",
                                                content: "This project board groups mains features that need to be implemented. Each feature will be given to a team, witch will implement them under the guidance of a scrum master. So will have boards for each feature where the feature itself will be break down into small tasks or new features according to the team analysis.",
                                                date: "wednesday 13 july"
                                            }
                                        },
                                        {
                                            owner: {
                                                id: "",
                                                pseudo: "Azix Johakim",
                                                email: "johakimazix4@gmail.com",
                                                avatar: "link/to/avatar/img",
                                            },
                                            msg: {
                                                id: "",
                                                content: "The comment 2",
                                                date: "thursday 14 july"
                                            }
                                        }
                                    ]
                                },
                                members: {
                                    count: 2,
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    guests: [
                                        {
                                            id: "",
                                            pseudo: "Azix Johakim",
                                            email: "johakimazix4@gmail.com",
                                            avatar: "link/to/avatar/img",
                                        },
                                        {
                                            id: "",
                                            pseudo: "Marlonne Azix",
                                            email: "marlonneazix4@gmail.com",
                                            avatar: "link/to/avatar/img",
                                        }
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        owner: {
                            id: "",
                            pseudo: "Azix Johakim",
                            email: "johakimazix4@gmail.com",
                            avatar: "link/to/avatar/img",
                        },
                        projects: [
                            {
                                id: "",
                                projectName: "building the canvas app",
                                taskCount: 2,
                                sectionIds: ["", "", "", "", ""],
                                comments: {
                                    count: 2,
                                    messages: [
                                        {
                                            owner: {
                                                id: "",
                                                pseudo: "Azix Johakim",
                                                email: "johakimazix4@gmail.com",
                                                avatar: "link/to/avatar/img",
                                            },
                                            msg: {
                                                id: "",
                                                content: "This project board groups mains features that need to be implemented. Each feature will be given to a team, witch will implement them under the guidance of a scrum master. So will have boards for each feature where the feature itself will be break down into small tasks or new features according to the team analysis.",
                                                date: "wednesday 13 july"
                                            }
                                        },
                                        {
                                            owner: {
                                                id: "",
                                                pseudo: "Azix Johakim",
                                                email: "johakimazix4@gmail.com",
                                                avatar: "link/to/avatar/img",
                                            },
                                            msg: {
                                                id: "",
                                                content: "The comment 2",
                                                date: "thursday 14 july"
                                            }
                                        }
                                    ]
                                },
                                members: {
                                    count: 2,
                                    owner: {
                                        id: "",
                                        pseudo: "Azix Johakim",
                                        email: "johakimazix4@gmail.com",
                                        avatar: "link/to/avatar/img",
                                    },
                                    guests: [
                                        {
                                            id: "",
                                            pseudo: "Azix Johakim",
                                            email: "johakimazix4@gmail.com",
                                            avatar: "link/to/avatar/img",
                                        },
                                        {
                                            id: "",
                                            pseudo: "Marlonne Azix",
                                            email: "marlonneazix4@gmail.com",
                                            avatar: "link/to/avatar/img",
                                        }
                                    ]
                                }
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            closeDrops() {
                const board = document.getElementById("side-right-frame-layout")
                const openedDrops = board.getElementsByClassName("show")
                console.log(openedDrops.length)
                for (let i = 0; i < openedDrops.length; i++) {
                    openedDrops[i].classList.remove("show")
                }
            },
            closeProjectBoard() {
                const mainFrameLayout = document.getElementsByClassName("main-frame-layout")[0]
                mainFrameLayout.classList.remove("board")
                // const items = (document.getElementsByClassName("side-left-frame-layout")[0]).getElementsByClassName("item")
                // for (let i=0; i<items.length;i++){
                //     items[i].classList.remove("active")
                // }
            },
            openProjectBoard(projectObj) {
                console.log(projectObj)
                const items = (document.getElementsByClassName("side-left-frame-layout")[0]).getElementsByClassName("item")
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove("active")
                }
                const mainFrameLayout = document.getElementsByClassName("main-frame-layout")[0]
                mainFrameLayout.classList.add("board")

                /*todo : the correct project details on the project board (has to do with rhe store)*/
            },
            toggleDropMenu() {
                const projectDrop = document.getElementById("project-menu-drop")
                projectDrop.classList.toggle("show")
            },
            toggleSideLeftFrameLayoutVisibility() {
                const visibilityToggle = document.getElementById("sideLeftVisibilityToggle")
                const mainFrameLayout = document.getElementsByClassName("main-frame-layout")[0]
                visibilityToggle.classList.toggle("side-left-frame-layout-hidden")
                mainFrameLayout.classList.toggle("side-left-frame-layout-hidden")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .side-left-frame-layout {
        height: 100% !important;
        overflow-y: hidden;
        background: rgba(130, 143, 163, .05);

        .scroll-view {
            height: 100%;
            max-height: calc(100% - 50px);
            overflow: auto;
        }
    }

    .side-right-frame-layout {
        &.light {
            border-left: solid var(--color-light-line) 1px;
        }

        &.dark {
            border-left: solid var(--color-dark-lines) 1px;
        }

        .board {
            height: calc(100% - 52px) !important;
            display: flex;
            overflow: auto;

            .project-section-visibility-toggle {
                position: absolute;
                bottom: 20px;
                background: var(--color-main-purple);
                display: flex;
                align-items: center;
                height: 25px;
                width: fit-content;
                padding: 2px 5px;
                border-radius: 0 5px 5px 0;
                box-shadow: 0 3px 2px rgba(0, 0, 0, .2);

                &.side-left-frame-layout-hidden {
                    img {
                        &:first-child {
                            height: 13px;
                            display: none;
                        }

                        &:last-child {
                            display: flex;
                        }
                    }
                }

                img {
                    &:first-child {
                        height: 13px;
                        display: flex;
                    }

                    &:last-child {
                        display: none;
                    }
                }
            }

            .section {
                border-radius: 4px;
                overflow: hidden;
                height: 100%;
                width: 355px;
                background: #49C4E5;

                &.light {
                    border: solid var(--color-light-line) 1px;
                }

                &.dark {
                    border: solid var(--color-dark-lines) 1px;
                }

                .head {
                    padding: 10px;
                    display: flex;
                }
            }
        }
    }
</style>