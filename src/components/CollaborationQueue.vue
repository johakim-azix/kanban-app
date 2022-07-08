<template>
    <div class="collaboration-queue-container">
        <div class="head">
            <strong>Collaborations</strong>
        </div>
        <ul class="queue light">
            <collaboration-item item-id="col-porject_id" @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-item item-id="col-porject_id_1" @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-item item-id="col-porject_id_2" @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-item item-id="col-porject_id_3" @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-item item-id="col-porject_id_4" @onProjectBoardOpening="openProjectBoard"/>
            <collaboration-item item-id="col-porject_id_5" @onProjectBoardOpening="openProjectBoard"/>
        </ul>
    </div>
</template>

<script>
    import CollaborationItem from "@/components/CollaborationItem";

    export default {
        name: "CollaborationQueue",
        components: {
            CollaborationItem
        },
        methods: {
            openProjectBoard(projectObj) {
                console.log(projectObj)
                this.$emit("onProjectBoardOpening", "the project")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collaboration-queue-container {
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

            strong {
                color: var(--color-medium-grey);
            }
        }

        .queue {
            list-style: none;
            margin-top: 5px;
            border-radius: 4px;
            padding: 0;


            &.light {
                background: var(--color-white);
                border: solid var(--color-light-line) 1px;
                box-shadow: 0 10px 10px rgb(0 0 0 / 3%), 0 6px 3px rgb(0 0 0 / 4%);
            }

            &.dark {
                background: var(--color-dark-grey);
                border: solid var(--color-dark-lines) 1px;
                box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 6px 3px rgb(0 0 0 / 12%);
            }
        }
    }
</style>