<template>
    <div class="section-slider">
        <!--todo : is meant to be the drop for the project comment-->
        <div class="projectCommentsDrop">
            <div class="caret light"></div>
            <div class="content light">

            </div>
        </div>
        <div class="queue">
            <board-section section-id="bs-section_1" name="Backlog" task-count="3" tasks="" @onAddSectionFormShow="hideAddSectionBtn(this.$el)"/>
            <board-section section-id="bs-section_2" name="Up next" task-count="4" tasks="" @onAddSectionFormShow="hideAddSectionBtn(this.$el)"/>
            <board-section section-id="bs-section_3" name="In progress" task-count="1" tasks="" @onAddSectionFormShow="hideAddSectionBtn(this.$el)"/>
            <!--            <board-section name="In review" task-count="7" tasks=""/>-->
            <!--            <board-section name="Delivered" task-count="9" tasks=""/>-->
        </div>
        <div class="add-board-section-btn-container">
            <div>
                <button class="btn btn-add-section light" @click="showAddSectionForm(this.$el)">
                <span>
                    <img src="../assets/icons/icon-plus.svg"> Add section
                </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import BoardSection from "@/components/BoardSection";

    export default {
        name: "SectionSlider",
        components: {
            BoardSection,
        },
        methods:{
            hideAddSectionBtn(element){
                /*when i open the add section form, i want to hide the add section btn container at the end of the queue and close any opened drop in the project board area*/
                const addSecBtnContainer = element.getElementsByClassName("add-board-section-btn-container")[0]
                addSecBtnContainer.classList.add("hide") /*hiding the add section btn container */
                this.$emit("onAddSessionFormShow")
            },
            showAddSectionForm(element){
                const formContainers = element.getElementsByClassName("queue")[0].getElementsByClassName("add-board-section")
                const lastFormContainer = formContainers[(formContainers.length - 1)]
                this.$emit("onAddSessionFormShow")
                lastFormContainer.classList.add("show")
            }
        }
    }
</script>

<style lang="scss" scoped>

    .projectCommentsDrop {
        height: calc(100% - 100px);
        width: 300px;
        position: absolute;
        z-index: 3;
        right: 5px;
        margin-top: -10px;
        display: none;
    }

    .section-slider {
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

        .queue {
            display: flex;
        }

        /*.add-project-section{*/
        /*    height: 100%;*/
        /*    display: inline-block;*/
        /*    background: #42b983;*/
        /*}*/
    }

    .add-board-section-btn-container {
        display: inline-block;
        height: 100%;
        &.hide{
            display: none!important;
        }
        & > div {
            width: 350px !important;
            /*height: 100%;*/
            position: relative;
            display: flex;
            justify-content: space-around;
        }
    }

    .btn-add-section {
        width: calc(100% - 30px);
        height: calc(100% - 15px);
        margin-top: 10px;
        padding: 10px 10px;
        font-weight: bold;
        font-size: var(--paragragh-medium-font-size);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        span {
            display: flex;
            align-items: center;
        }

        img {
            margin-right: 10px;
            display: inline-block;
        }

        &.light {
            border: solid var(--color-light-line) 1px;
            background: rgba(130, 143, 163, .05);
            /*box-shadow: 0 10px 10px rgb(0 0 0 / 3%), 0 6px 3px rgb(0 0 0 / 4%);*/

            &:hover {
                background: rgba(130, 143, 163, .150);
            }
        }

        &.dark {
            border: solid var(--color-dark-lines) 1px;
            background: var(--color-dark-grey);
            color: var(--color-white);
            /*box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 6px 3px rgb(0 0 0 / 12%);*/

            &:hover {
                background: rgba(130, 143, 163, .150);
            }
        }
    }

















    /*todo : the add section form logic*/
    .add-board-section {
        height: 100%;
        display: inline-block;

        & > div {
            width: 350px !important;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: space-around;
        }
    }


    .form {
        margin-top: 10px;
        width: calc(100% - 70px);
        height: fit-content;
        border-radius: 4px;
        padding: 10px 20px;

        .field {
            /*todo maw lenght for the section name : 30 chars*/
            padding: 10px 0;
            outline: 0;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .colors {
            border: solid red 1px;
            margin: 5px 0;
            border-radius: 2px;
            padding: 0 5px;
            overflow: auto;
            height: fit-content;
            max-height: 70px;

            .color {
                display: inline-block !important;
                width: 20px !important;
                height: 20px;
                border-radius: 100%;
                background: #49C4E5;
                margin: 2.5px;
                cursor: pointer;
                transition: all ease-in-out .15s;

                &:hover {
                    opacity: .5;
                }
            }

            &.light {
                border: solid var(--color-light-line) 1px;

                .color {
                    border: solid var(--color-light-line);
                }
            }

            &.dark {
                border: solid var(--color-dark-lines) 1px;

                .color {
                    border: solid var(--color-dark-lines);
                }
            }
        }

        .btns {
            display: flex;
            justify-content: space-between;
            margin: 10px 0 0 0;

            .btn {
                padding: 5px 10px;
                border-radius: 2px;

                &.reset {
                    background: var(--color-white);
                    color: var(--color-black);

                    &:hover {
                        opacity: .6;
                    }
                }

                &.cancel {
                    background: var(--color-red);
                    color: var(--color-white);

                    &:hover {
                        background: var(--color-red-hover);
                    }
                }

                &.save {
                    background: var(--color-main-purple);
                    color: var(--color-white);
                    margin-left: 10px;

                    &:hover {
                        background: var(--color-main-purple-hover);
                    }
                }

            }

            &.light {
                .btn {
                    box-shadow: 0 2px 2px rgb(0 0 0 / 3%), 0 3px 2px rgb(0 0 0 / 4%);
                }
            }

            &.dark {
                .btn {
                    box-shadow: 0 2px 2px rgb(0 0 0 / 10%), 0 3px 2px rgb(0 0 0 / 12%);
                }
            }
        }


        &.light {
            border: solid var(--color-light-line) 1px;
            /*background: rgba(130, 143, 163, .05);*/
            /*box-shadow: 0 10px 10px rgb(0 0 0 / 3%), 0 6px 3px rgb(0 0 0 / 4%);
*/
        }

        &.dark {
            border: solid var(--color-dark-lines) 1px;
            /*background: var(--color-dark-grey);*/
            color: var(--color-white);
            /*box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 6px 3px rgb(0 0 0 / 12%);*/

        }
    }
    /*todo : the add section form logic*/

</style>

