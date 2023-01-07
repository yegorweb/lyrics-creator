<template>
    <div class="container">
        <div class="left">
            <img src="logo.svg" alt="" class="title-icon" />
            <div class="title">.LRC Creator</div>
        </div>
        <div class="right">
            <div class="list_item">Start making</div>
            <div class="list_item">Support</div>
            <div class="list_item">Donate</div>
            <div class="list_item">GitHub</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: rem(40);
}
.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40%;
    gap: rem(20);
}
.title {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: rem(26);
    color: #FFFFFF;
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(50);
}
.list_item {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: rem(22);
    color: #FFFFFF;
    cursor: pointer;
    white-space: nowrap;
}
</style>