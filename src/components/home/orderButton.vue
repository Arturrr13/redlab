<template>
     <button type="button" class="order">Заказать уборку</button>
</template>

<style lang="scss" scoped>
.order{
    transition: .5s;
    position: fixed;
    z-index: 10;
    bottom: -65px;
    left: calc(50% - 88px);
    width: 176px;
    height: 176px;
    border-radius: 50%;
    background: #5A30F0;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    padding: 0 20px;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: #FFFFFF;
    transform: rotate(15deg);
    border: none;
    animation: appear .75s both;
    &:hover{
        animation: hoverAnim .5s both;
        bottom: 25px;
        left: calc(50% - 97px);
        width: 195px;
        height: 195px;
        transform: rotate(-15deg);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    &.close{
        animation: close 1s both;
    }
}

@keyframes close {
    0%{opacity: 1;}
    100%{opacity: 0; bottom: 100%;}
}

@keyframes appear {
    0%{opacity: 0.8; bottom: 25px;}
    100%{opacity: 1; bottom: -65px;}
}

@keyframes hoverAnim {
    0%{bottom: -65px;}
    100%{bottom: 25px;}
}
</style>