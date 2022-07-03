<template>
    <div class="main-frame-layout light">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

    :root{
        /*colors*/
        --color-main-purple: rgba(99, 95, 199, 1);
        --color-main-purple-hover: rgba(168, 164, 255,1);
        --color-white: rgba(255, 255, 255,1);
        --color-black: rgba(0, 1, 18,1);
        --color-very-dark-grey: rgba(32, 33, 44,1);
        --color-dark-grey: rgba(43, 44, 55,1);
        --color-dark-lines: rgba(62, 63, 78,1);
        --color-medium-grey: rgba(130, 143, 163,1);
        --color-light-line: rgba(228, 235, 250,1);
        --color-light-grey: rgba(244, 247, 253,1);
        --color-red: rgba(234, 85, 85,1);
        --color-red-hover: rgba(255, 152, 152,1);
        --color-divider: rgba(0,0,0,.1);


        --font-familly : Plus Jakarta Sans;

        --bg-color : rgba(0,0,0,0.1);

        /*typography*/
        --heading-s-font-size : 12px;
        --heading-m-font-size : 15px;
        --heading-l-font-size : 18px;
        --heading-xl-font-size : 24px;

        --paragragh-medium-font-size:13px;
        --paragragh-bold-font-size:12px;

        --font-size : 15px;
    }

    *{
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        /*transition: all ease-in-out .01s;*/
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(112, 112, 112, .2);
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(112, 112, 112, .5);
            border-radius: 0px;
        }
    }


    body{
        scroll-behavior: smooth;
        font-family: var(--font-familly);
        font-size: var(--font-size);
    }

    .main-frame-layout{
        position: absolute!important;
        display: grid;
        grid-template-columns: 375px calc(100% - 375px);
        grid-template-rows: 100%;
        overflow: auto;
        height: 100%;
        width: 100%;

        &.light{
            background: var(--color-light-grey) !important;
            color: var(--color-black) !important;
        }

        &.dark{
            background: var(--color-very-dark-grey);
            color: var(--color-white) !important;
        }
        &.side-left-frame-layout-hidden{
            grid-template-columns: 0 auto;
            @media screen and (max-width: 600px){
                grid-template-columns: 100% auto;
            }
        }
        @media screen and (max-width: 700px){
            grid-template-columns: 300px auto;
        }
        @media screen and (max-width: 600px){
            grid-template-columns: 100% auto;
        }
    }

    .btn{
        border: 0;
        outline: 0;
        background: transparent;
        cursor: pointer;
        transition: all ease-in-out .15s;
    }

</style>
