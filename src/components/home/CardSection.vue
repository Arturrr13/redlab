<template>
    <section class="section--card">
        <div class="card" v-for="(item, index) in cardData" :key="index">
            <p>{{ item.text }}</p>
            <img :src="require(`@/assets/images/home/section2/${index+1}.png`)" alt="">
            <span>
                Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.
            </span>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            cardData: [
                {text: 'Тщательно отобранный персонал'},
                {text: 'Качественная эко-химия'},
                {text: 'Контролируем качество'},
                {text: 'Работаем круглосуточно'}
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.section--card{
    display: flex;
    gap: 40px;
    padding-top: 73px;
    justify-content: center;
    flex-wrap: wrap;
}
.card{
    width: 300px;
    height: 328px;
    background: #F3F6FB;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translateY(100px);
    position: relative;
    p{
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;  
        color: #404040;
        max-width: 220px;
        text-align: center;
        margin-top: 20px;
    }
    span{
        position: absolute;
        margin: 30px;
        opacity: 0;
        font-size: 16px;
        line-height: 140%;
        color: #FFFFFF;
        transform: translateX(-30px);
    }
    &:hover{
        background: #5A30F0;
        transition: .5s;
        transition-delay: .25s;
        cursor: pointer;
        img{
            transition: .5s;
            opacity: 0;
        }
        p{
            transition: .5s;
            opacity: 0;
            transform: translateY(100%);
        }
        span{
            transition: .5s;
            transition-delay: .5s;
            opacity: 1;
            transform: translateX(0);
        }
    }
}
.card:nth-child(1){
    &.element-show{
        animation: cardAnim .35s both;
    }
}
.card:nth-child(2){
    &.element-show{
        animation: cardAnim .70s both;
    }
}
.card:nth-child(3){
    &.element-show{
        animation: cardAnim 1.15s both;
    }
}
.card:nth-child(4){
    &.element-show{
        animation: cardAnim 1.4s both;
    }
}

@keyframes cardAnim {
    0%{transform: translateY(100px);}
    100%{transform: translateY(0);}
}

@media  screen and (max-width:1360px){
    .section--card{
        max-width: 850px;
    }
}
</style>