<template>
    <div class="section-slider">
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
    .section-slider{
        padding: 0;
        height: 100%;
        width: 100%;
        /*overflow: hidden;*/
        display: flex;
        overflow: auto;

    }
</style>