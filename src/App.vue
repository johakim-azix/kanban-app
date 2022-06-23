<template>
    <div class="main-frame-layout">
        <router-view/>
    </div>
</template>

<style lang="scss">
    :root{
        --font-familly : "";
        --bg-color : rgba(0,0,0,0.1);
        --font-size : "";
    }

    *{
        padding: 0;
        margin: 0;
        transition: all ease-in-out .15s;
    }

    body{
        scroll-behavior: smooth;
        font-family: var(--font-familly);
        background: var(--bg-color);
        font-size: var(--font-size)
    }

    .main-frame-layout{
        border: solid red 1px;
        position: absolute;
        display: grid;
        grid-template-columns: 100% 100%;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

</style>
