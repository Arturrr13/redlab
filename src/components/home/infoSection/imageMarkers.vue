<template>
    <div class="marker__wrapper"
        v-for="(item, index) in positionArr" 
        :key="index" 
        :style="{ top: item.top + '%', left: item.left + '%' }"
    >
        <div class="infoText">
            <span>
                {{ item.text }}
            </span>
        </div>

        <div class="marker" @click="addActive"></div>
    </div>
</template>

<script>
export default {
    props: {
        positionArr: Object
    },
    methods:{
        addActive(e){
            e.target.parentElement.classList.toggle('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.marker{
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #5A30F0;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 10px rgba(90, 48, 240, 0.2);
    &::after{
        content: url(../../../assets/images/home/section3/Union.svg);
    }
    &:hover{
        cursor: pointer;
    }
}

.marker__wrapper{
    transition: 1s;
    animation: newMarker 1s both;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &.active{
        .marker{
            transform: rotate(45deg);
            box-shadow: none;
        }
        .infoText{
            opacity: 1;
            transform: translateY(0);
        }
    }
}
.infoText{
    transition: .5s;
    background: #FFFFFF;
    border-radius: 2px;
    padding: 10px 8px;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    span{
        font-weight: 500;
        font-size: 13px;
        line-height: 130%;  
        color: #636C81;
    }
    &::after{
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid white;
        position: absolute;
        bottom: -6px;
        left: calc(50% - 5px);
    }
}

@keyframes newMarker {
    0%{transform: translateX(50px); opacity: 0;}
    100%{transform: translateX(0); opacity: 1;}
}
</style>