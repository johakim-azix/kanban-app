<template>
    <div class="section">
        <div class="light">
            <div class="head">
                <div class="title">
                    <div class="indicator"></div>
                    <span>{{name}} ({{taskCount}})</span>
                </div>
                <div class="menu">
                    <butto class="btn delete"><img src="../assets/icons/icon-trash.svg" alt=""></butto>
                    <div class="edit-task-dropdown">
                        <button id="" class="btn" @click="showEditSessionForm(this.$el)"><img src="../assets/icons/icon-pencil.svg" alt=""></button>
                        <div class="edit-section-form" >
                            <div class="caret light"></div>
                            <div class="content light">
                                <div class="form-header light">
                                    <strong>Rename the section</strong>
                                </div>
                                <div contenteditable="true" class="name light" @keyup="onSectionEditing(this.$el)"></div>
                                <div class="controls light">
                                    <span class="btn reset light"></span>
                                    <div>
                                        <button @click="hideEditSectionForm(this.$el)" class="btn cancel">Cancel</button>
                                        <button @click="saveSectionName(this.$el)" class="btn confirm" disabled>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-task-dropdown">
                        <button id="sect-atf-toggle-id_section" @click="showAddTaskForm(this.$el)" class="btn"><img src="../assets/icons/icon-plus.svg" alt=""></button>
                        <div class="add-task-form" >
                            <div class="caret light"></div>
                            <div class="content light">
                                <div class="form-header light">
                                    <strong>Add new task </strong>
                                </div>
                                <div class="task-content">
                                    <div contenteditable="true" class="title light" @keyup="onTaskTyping(this.$el)"></div>
                                    <div contenteditable="true" class="description light" @keyup="onDescriptionTyping(this.$el)"></div>
                                </div>
                                <div class="controls light">
                                    <span class="btn reset light" @click="resetAddTaskForm(this.$el)">Reset</span>
                                    <div>
                                        <button @click="hideAddTaskForm(this.$el)" class="btn cancel">Cancel</button>
                                        <button @click="saveTask(this.$el)" class="btn confirm" disabled>Save task</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-queue light">
                <task-item task-item-id="task-check-id_task"/>
<!--                <task-item task-item-id="task-ckeck-id_task1"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task2"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task3"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task4"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task5"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task6"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task7"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task8"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task9"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task10"/>-->
<!--                <task-item task-item-id="task-ckeck-id_task11"/>-->
            </div>
        </div>
        <div class="light" @click="addSection">
            <span class="btn light" >Add new column here</span>
        </div>
    </div>
</template>

<script>
    import TaskItem from "@/components/TaskItem";
    export default {
        name: "BoardSection",
        components:{
            TaskItem
        },
        props:["name","taskCount", "tasks"],
        methods: {
            addSection(){
                alert("add section got executed")
            },
            onSectionEditing(element){
                const input = element.querySelector(".edit-section-form .name")
                const confirmBtn = element.querySelector(".edit-section-form .confirm")
                const text = input.innerText
                if (text.trim().length !== 0){
                    input.classList.add("typing")
                    confirmBtn.disabled = false
                } else{
                    input.classList.remove("typing")
                    confirmBtn.disabled = true
                }
            },
            showEditSessionForm(element){
                const form = element.querySelector("div:first-child>.head .edit-section-form")
                if (form.classList.contains("show")){
                    this.toggleAllDropsVisibility(form, false)
                }else {
                    this.toggleAllDropsVisibility(form, false)
                }
            },
            hideEditSectionForm(element){
                const form = element.querySelector("div:first-child>.head .edit-section-form")
                form.classList.remove("show")
            },
            onTaskTyping(element){
                const input = element.querySelector(".add-task-form .title")
                const confirmBtn = element.querySelector(".add-task-form .confirm")
                const text = input.innerText
                if (text.trim().length !== 0){
                    input.classList.add("typing")
                    confirmBtn.disabled = false
                } else{
                    input.classList.remove("typing")
                    confirmBtn.disabled = true
                }
            },
            resetAddTaskForm(element){
                const form = element.querySelector("div:first-child>.head .add-task-form")
                const taskTitle = form.querySelector(".title")
                const taskDescription = form.querySelector(".description")
                const confirmBtn = form.querySelector(".confirm")
                taskTitle.innerText = ""
                taskDescription.innerText = ""
                taskTitle.classList.remove("typing")
                taskDescription.classList.remove("typing")
                confirmBtn.disabled = true
            },
            onDescriptionTyping(element){
                const input = element.querySelector(".add-task-form .description")
                const text = input.innerText
                if (text.trim().length !== 0) input.classList.add("typing")
                else input.classList.remove("typing")
            },
            toggleAllDropsVisibility(elmt, hide){
                /*todo : move this method to the parent component either KanbanView or App the set up and event from different children to that parent*/
                const drops = document.getElementsByClassName("show")
                for (let i = 0; i< drops.length; i++){
                    drops[i].classList.toggle("show")
                }
                if (hide){
                    elmt.classList.remove("show")
                }else {
                    elmt.classList.add("show")
                }
            },
            hideAddTaskForm(element){
                const form = element.querySelector("div:first-child>.head .add-task-form")
                const taskTitle = form.querySelector(".title")
                const taskDescription = form.querySelector(".description")
                const confirmBtn = form.querySelector(".confirm")
                taskTitle.innerText = ""
                taskDescription.innerText = ""
                taskTitle.classList.remove("typing")
                taskDescription.classList.remove("typing")
                confirmBtn.disabled = true
                this.toggleAllDropsVisibility(form, true)
            },
            saveTask(element){
                const form = element.querySelector("div:first-child>.head .add-task-form")
                const taskTitle = form.querySelector(".title").innerText
                const taskDescription = form.querySelector(".description").innerText
                /*todo : procceed with the create task process*/
                console.log(form)
                console.log(taskTitle)
                console.log(taskDescription)
            },
            showAddTaskForm(element){
                let form = element.querySelector("div:first-child>.head .add-task-form")
                if (form.classList.contains("show")){
                    this.toggleAllDropsVisibility(form, false)
                }else {
                    this.toggleAllDropsVisibility(form, false)
                }
            },
            toggleSectionMenu(event){
                const paths = event.path
                let dropDown = null
                paths.forEach((path)=> {
                    if (path.id !== null && path.id !== undefined && path.id !== "") {
                        const elmt = document.getElementById(path.id)
                        if (elmt.classList.contains("btn")) {
                            dropDown = elmt.parentElement
                            return true
                        }
                    }
                })
                const drop = dropDown.getElementsByClassName("drop")[0]
                if (drop.classList.contains("show")){
                    this.toggleAllDropsVisibility(drop, true)
                }else {
                    this.toggleAllDropsVisibility(drop, false)

                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        height: 100%;
        display: flex;
        width: fit-content;
        margin-left: 10px;

        & > div {
            &:first-child {
                border-radius: 4px 4px 0 0;
                overflow: hidden;
                height: calc(100% - 10px);
                width: 355px;
                margin-top: 8px;
                border: solid transparent 1px;
                transition: all ease-in-out .15s;


                &:hover {
                    &.light {
                        border: solid var(--color-light-line) 1px;
                    }

                    &.dark {
                        border: solid var(--color-dark-lines) 1px;
                    }

                    .controls{
                        display: flex;
                    }
                }
            }

            &:last-child {
                margin-left: 10px;
                width: 0!important;
                cursor: pointer;
                border-radius: 4px;
                border: solid transparent 1px;
                position: relative;
                .btn{
                    padding: 5px 10px;
                    position: absolute;
                    right: -80px;
                    font-weight: bold;
                    width: 145px;
                    color: var(--color-red-hover) ;
                    margin-top: -1px;
                    display: none;

                    &.light{
                        background: var(--color-light-grey);
                    }
                    &.dark{
                        background: var(--color-dark-grey);
                    }
                }
                &:hover {
                    .btn{
                        display: flex;
                    }
                    &.light {
                        border: solid var(--color-red-hover) 1px;
                        background:  var(--color-red-hover) ;
                    }

                    &.dark {
                        border: solid var(--color-red-hover) 1px;
                        background:  var(--color-red-hover) ;

                    }
                }
            }
        }


        .head {
            padding: 5px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                display: flex;
                align-items: center;

                .indicator {
                    width: 15px;
                    height: 15px;
                    border-radius: 100%;
                    margin-right: 10px;
                    background: #49C4E5;
                }

                span {
                    font-weight: bold;
                    font-size: var(--heading-s-font-size);
                }
            }
            .menu {
                display: flex;
                .btn{
                    height: 25px;
                    width: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    border-radius: 2px;
                    margin-left: 5px;
                    &:hover {
                        background: rgba(99, 95, 199, .2);
                        &.delete{
                            background: rgba(255, 152, 152,.2);
                        }
                    }
                    img{
                        height: 16px;
                    }

                }
                .edit-task-dropdown{
                    position: relative;
                    .edit-section-form{
                        position: absolute;
                        right: -35px;
                        max-width: 300px;
                        min-width: 299px;
                        margin-top: 7px;
                        display: none;
                        &.show{
                            display: block;
                        }
                    }
                    .caret{
                        width: 5px;
                        height: 5px;
                        position: absolute;
                        right: 45px;
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
                        };
                    }

                    .content{
                        padding: 3px 0 0 0 ;
                        border-radius: 4px;
                        overflow: hidden;
                        &.light {
                            border: solid var(--color-light-line) 1px;
                            background: var(--color-white);
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 3%), -6px 6px 3px rgb(0 0 0 / 4%), 2px 10px 10px rgb(0 0 0 / 3%), 6px 6px 3px rgb(0 0 0 / 4%);

                        }
                        &.dark {
                            border: solid var(--color-dark-lines) 1px;
                            background: var(--color-dark-grey);
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 10%), -6px 6px 3px rgb(0 0 0 / 12%), 2px 10px 10px rgb(0 0 0 / 10%), 6px 6px 3px rgb(0 0 0 / 12%);
                        }
                        .form-header{
                            display: block;
                            padding: 5px 10px;
                            width: calc(100% - 20px);
                            margin-right: auto;
                            margin-left: auto;
                            font-size: var(--heading-l-font-size);
                            &.light{
                                border-bottom: solid var(--color-light-line) 1px;
                            }
                            &.dark{
                                border-bottom: solid var(--color-dark-lines) 1px;
                            }
                            strong{
                                display: block;
                            }
                        }

                        .name{
                            font-weight: bold;
                            border: 0;
                            outline: 0;
                            display: block;
                            text-wrap: normal;
                            overflow: auto;
                            position: relative;
                            padding: 2.5px 0 2.5px 0;
                            width: calc(100% - 20px);
                            margin: 5px auto;
                            &.light{
                                background: url("../assets/icons/section-name-input-placeholder.svg") no-repeat left;
                            }
                            &.dark{
                                background: url("../assets/icons/section-name-input-placeholder-dark.svg") no-repeat left;
                            }
                            &.typing{
                                background: none;
                            }
                        }

                        .controls{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 3px 10px;
                            height: fit-content;
                            width: calc(100% - 20px);
                            &.light {
                                border-top: solid var(--color-light-line) 1px;
                            }

                            &.dark {
                                border-top: solid var(--color-dark-lines) 1px;
                            }

                            &>div{
                                display: flex;
                            }
                            .btn{
                                width: fit-content;
                                margin: 0!important;
                                padding: 0 10px;
                                &.cancel{
                                    margin-right: 10px!important;
                                    background: var(--color-red);
                                    color: var(--color-white);
                                    &:hover{
                                        background: var(--color-red-hover);
                                    }
                                }
                                &.confirm{
                                    background: var(--color-main-purple);
                                    color: var(--color-white);
                                    &:hover{
                                        background: var(--color-main-purple-hover);
                                    }
                                    &:disabled{
                                        opacity: .4;
                                        cursor: not-allowed;
                                    }
                                }
                            }
                        }

                    }
                }
                .add-task-dropdown {
                    position: relative;
                    .add-task-form{
                        position: absolute;
                        right: -5px;
                        max-width: 300px;
                        min-width: 299px;
                        margin-top: 7px;
                        display: none;
                        &.show{
                            display: block;
                        }
                    }
                    .caret{
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
                        };
                    }

                    .content{
                        padding: 3px 0 0 0 ;
                        border-radius: 4px;
                        overflow: hidden;
                        &.light {
                            border: solid var(--color-light-line) 1px;
                            background: var(--color-white);
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 3%), -6px 6px 3px rgb(0 0 0 / 4%), 2px 10px 10px rgb(0 0 0 / 3%), 6px 6px 3px rgb(0 0 0 / 4%);
                        }
                        &.dark {
                            border: solid var(--color-dark-lines) 1px;
                            background: var(--color-dark-grey);
                            box-shadow: -2px 10px 10px rgb(0 0 0 / 10%), -6px 6px 3px rgb(0 0 0 / 12%), 2px 10px 10px rgb(0 0 0 / 10%), 6px 6px 3px rgb(0 0 0 / 12%);
                        }
                        .form-header{
                            display: block;
                            padding: 5px 10px;
                            width: calc(100% - 20px);
                            margin-right: auto;
                            margin-left: auto;
                            font-size: var(--heading-l-font-size);
                            &.light{
                                border-bottom: solid var(--color-light-line) 1px;
                            }
                            &.dark{
                                border-bottom: solid var(--color-dark-lines) 1px;
                            }
                            strong{
                                display: block;
                            }
                        }
                        .task-content{
                            padding: 10px;
                            max-height: 300px;
                            overflow: auto;
                            width: calc(100% - 20px);
                            margin-left: auto;
                            margin-right: auto;
                        }
                        span{
                            display: block;
                            padding: 0 10px;
                            color: var(--color-medium-grey);
                        }
                        .title{
                            font-weight: bold;
                            border: 0;
                            outline: 0;
                            display: block;
                            text-wrap: normal;
                            overflow: auto;
                            position: relative;
                            padding: 2.5px 0 2.5px 0;
                            &.light{
                                background: url("../assets/icons/task-input-placeholder.svg") no-repeat left;
                            }
                            &.dark{
                                background: url("../assets/icons/task-input-placeholder-dark.svg") no-repeat left;
                            }
                            &.typing{
                                background: none;
                            }
                        }
                        .description{
                            font-size: var(--paragragh-medium-font-size);
                            color: var(--color-medium-grey);
                            outline: 0;
                            width: calc(100% - 25px);
                            display: block;
                            margin-top: 10px;
                            &.light{
                                background: url("../assets/icons/task-description-input-placeholder.svg") no-repeat left;
                            }
                            &.dark{
                                background: url("../assets/icons/task-description-input-placeholder-dark.svg") no-repeat left;
                            }
                            &.typing{
                                background: none;
                            }
                        }
                        .controls{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 3px 10px;
                            height: fit-content;
                            width: calc(100% - 20px);
                            margin-top: 5px;
                            &.light {
                                border-top: solid var(--color-light-line) 1px;
                            }

                            &.dark {
                                border-top: solid var(--color-dark-lines) 1px;
                            }

                            &>div{
                                display: flex;
                            }
                            .btn{
                                width: fit-content;
                                margin: 0!important;
                                padding: 0 10px;
                                &.reset{
                                    margin-right: 10px!important;
                                    color: var(--color-medium-grey);
                                    display: flex;
                                    align-items: center;
                                    &.light{
                                        border: solid var(--color-light-line) 1px;
                                        background: var(--color-white);
                                    }

                                    &.dark{
                                        border: solid var(--color-dark-lines) 1px;
                                        background: var(--color-dark-grey);
                                    }
                                    &:hover{
                                        opacity: .3;
                                    }
                                }
                                &.cancel{
                                    margin-right: 10px!important;
                                    background: var(--color-red);
                                    color: var(--color-white);
                                    &:hover{
                                        background: var(--color-red-hover);
                                    }
                                }
                                &.confirm{
                                    background: var(--color-main-purple);
                                    color: var(--color-white);
                                    &:hover{
                                        background: var(--color-main-purple-hover);
                                    }
                                    &:disabled{
                                        opacity: .4;
                                        cursor: not-allowed;
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
        .task-queue {
            height: calc(100% - 40px);
            padding: 10px;
            overflow: auto;
            &.light {
                border-top: solid var(--color-light-line) 1px;
                border-bottom: solid var(--color-light-line) 1px;
            }
            &.dark {
                border-top: solid var(--color-dark-lines) 1px;
                border-bottom: solid var(--color-dark-lines) 1px;
            }
        }

        .controls {
            height: 35px;
            width: calc(100%);
            align-items: center;
            padding: 0 10px;
            display: none;
            &.light{
                background: var(--color-white);
            }
            &.dark{
                background: var(--color-dark-grey);
            }
            .btn {
                padding: 5px;
                height: 20px;
                width: 20px;
                margin-right: 10px;
                margin-top: -2.5px;
                border-radius: 2px;
                &:hover{
                 background: rgba(99, 95, 199, .2)
                }
            }
        }
    }
</style>