<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="btn" :style="{background: props.bg, color: props.color, width: props.width/16 + 'rem', marginTop: props.marginTop/16 + 'rem'}">
        <slot></slot>
    </div>
</template>

<script setup>
var props = defineProps({
    bg: {
        type: String,
        required: false,
        default: '#4478FF'
    },
    color: {
        type: String,
        required: false,
        default: '#FFFFFF'
    }, 
    width: {
        type: Number,
        required: false,
        default: 320
    },
    marginTop: {
        type: Number,
        required: false,
        default: 0
    }
})
</script>

<style lang="scss" scoped>
.btn {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: rem(20);
    border-radius: rem(8);
    padding: rem(8) rem(20);
    box-sizing: border-box !important;
    cursor: pointer;
    transition: all .2s;
    text-align: center;
    user-select: none;
    text-decoration: none;
    
    &:hover {
        
    }
}
</style>