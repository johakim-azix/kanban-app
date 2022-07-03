<template>
    <div class="projects-queue-container">
        <div class="head light">
            <strong>My projects</strong>
            <div class="options">
                <button class="btn add"><img src="../assets/icons/icon-plus.svg" alt="add project"></button>
            </div>
        </div>
        <ul class="queue light">
            <!--todo : should trough an array here to render this -->
            <project-item/>
            <project-item/>
            <project-item/>
            <project-item/>
        </ul>
    </div>
</template>

<script>
    import ProjectItem from "@/components/ProjectItem";
    export default {
        name: "ProjectQueue",
        components:{
            ProjectItem,
        }
    }
</script>

<style lang="scss" scoped>
    .projects-queue-container {
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 10px;
        height: fit-content;

        .head {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 16px;
            padding: 0 10px;

            strong{
                color: var(--color-medium-grey);
            }
            .options {
                display: flex;
                .btn {
                    padding: 5px 8px;
                    transition: all ease-in-out .15s;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    &:hover {
                        background: rgba(0, 0, 0, .1);
                    }
                }
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
                box-shadow: 0 10px 10px rgb(0 0 0 / 3%), 0 6px 3px rgb(0 0 0 / 4%);
            }
            &.dark{
                background: var(--color-dark-grey);
                border: solid var(--color-dark-lines) 1px;
                box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 6px 3px rgb(0 0 0 / 12%);
            }


        }
    }
</style>