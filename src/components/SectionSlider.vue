<template>
    <div class="section-slider">
        <div class="projectCommentsDrop">
            <div class="caret light"></div>
            <div class="content light">

            </div>
        </div>
        <board-section name="Backlog" task-count="3" tasks=""/>
        <board-section name="Up next" task-count="4" tasks=""/>
        <board-section name="In progress" task-count="1" tasks=""/>
        <board-section name="In review" task-count="7" tasks=""/>
        <board-section name="Delivered" task-count="9" tasks=""/>
    </div>
</template>

<script>
    import BoardSection from "@/components/BoardSection";
    export default {
        name: "SectionSlider",
        components:{
            BoardSection
        }
    }
</script>

<style lang="scss" scoped>

    .projectCommentsDrop{
        /*background: ;*/
        height: calc(100% - 100px);
        width:300px;
        position: absolute;
        z-index: 3;
        right: 5px;
        margin-top: -10px;
        display: none;
    }

    .section-slider{
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        overflow: auto;
        &::-webkit-scrollbar {
            height: 5px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(112, 112, 112, .2);
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(112, 112, 112, .5);
            border-radius: 0px;
        }
    }
</style>