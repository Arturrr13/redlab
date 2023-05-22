<template>
    <div class="component__wrapper" :class="{ active: slideNow }">
        <img :src="require(`@/assets/images/home/section3/${image}.jpg`)" alt="kichen">
    </div>
</template>

<script>
export default {
    props:{
        image: Number,
        slideNow: Boolean
    },
    methods:{
        addActive(e){
            e.target.parentElement.classList.toggle('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.component__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &.active{
        animation: imageAnim 2.5s both;
        z-index: 5;
    } 
}

img{
    width: 100%;
    height: 100%;
}

@keyframes imageAnim {
    0%{
        transform: translateX(100%);
        scale: 1.4;
    }
    100%{
        transform: translateX(0);
        scale: 1;
    }
}
</style>