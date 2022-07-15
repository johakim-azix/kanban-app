<template>
    <div class="add-board-section">
        <div>
            <div class="form light">
                <div class="field" contenteditable="true">Enter the section name...</div>
                <small>Choose a color indicator for the section</small>
                <div class="colors light">
                    <span class="color"></span>
                    <span class="color"></span>
                    <span class="color"></span>
                    <span class="color"></span>
                    <span class="color"></span>
                </div>
                <div class="btns light">
                    <button class="btn reset">Reset</button>
                    <div>
                        <button class="btn cancel"> Cancel</button>
                        <button class="btn save"> Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddBoarSession",
        methods: {}
    }
</script>

<style lang="scss" scoped>
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


</style>