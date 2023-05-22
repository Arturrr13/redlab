<template>
    <header class="header" :class="{ scroll: scroll, none: none }">
        <div class="header__wrapper">
            <div class="logo__wrapper">
                <img src="@/assets/images/Logo.png" alt="logo">
            </div>

            <div class="switch-button">
                <a href="#" @click="switchFun(false)">
                    Дом
                </a>
                <a href="#" @click="switchFun(true)">
                    Офис
                </a>
                <span :class="{ setSwitch: switchStatus }">
                    {{ switchText }}
                </span>
            </div>
    
    
            <ul class="header__list">
                <li>
                    <a data-content="После ремонта">После ремонта</a>
                </li>
                <li>
                    <a data-content="Генеральная уборка">Генеральная уборка</a>
                </li>
                <li>
                    <a data-content="Регулярная уборка">Регулярная уборка</a>
                </li>
                <li>
                    <a data-content="Мойка окон">Мойка окон</a>
                </li>
            </ul>
    
            <span class="phone"><span>+380 67 401 69 77</span><span>24/7</span></span>

            <burger-menu />
        </div>
    </header>
</template>

<script>
import burgerMenu from './burgerMenu.vue'

export default {
    data(){
        return{
            scroll: false,
            none: false,
            switchText: 'Дом',
            switchStatus: false
        }
    },
    components:{
        burgerMenu
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            window.scrollY > 1 ? this.scroll = true : this.scroll = false
            if((document.documentElement.scrollHeight - document.documentElement.scrollTop) - 70 < document.documentElement.clientHeight){
                this.none = true
            } else {
                this.none = false
            }
        },
        switchFun(direction){
            if(direction){
                this.switchStatus = true
                this.switchText = 'Офис'
            } else {
                this.switchStatus = false
                this.switchText = 'Дом'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    transition: .5s;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 70px;
    &.scroll{
        background: white;
    }
    &.none{
        animation: scrollNone .5s both;
    }
}
.switch-button{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 131px;
    height: 39px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 48px;
    a{
        font-weight: 500;
        font-size: 14px;
        line-height: 110%;
        color: #636C81;
    }
    span{
        position: absolute;
        left: 3px;
        background: #5A30F0;
        padding: 8px 12px;
        border-radius: 34px;
        font-weight: 500;
        font-size: 14px;
        line-height: 110%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: switchLeft .5s both;
        &.setSwitch{
            animation: switchRight .5s both;
        }
    }
}
.header__wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 31px 0 54px;
}
.header__list{
    display: flex;
    margin: 0 67px 0 84px;
    gap: 32px;
    li a{
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.2px; 
        color: #404040;
        white-space: nowrap;
    }
}
.logo__wrapper{
    margin-right: 25px;
}
.phone{
    white-space: nowrap;
    span{
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.2px; 
        color: #404040;
    }
    span:nth-child(1){
        margin-right: 15px;
    }
    span:nth-child(2){
        position: relative;
        padding-left: 15px;
    }
    span:nth-child(2)::before{
        position: absolute;
        left: 0;
        top: 2px;
        content: '';
        height: 14px;
        width: 1.5px;
        background: #404040;
    }
    &:hover{
        cursor: pointer;
        span{
            transition: .5s;
            color: #5A30F0;
        }
        span:nth-child(2)::before{
            transition: .5s;
            background: #5A30F0;
        }
    }
}

a {
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-decoration: none;
    overflow: hidden;
    &::before {
      position: absolute;
      content: attr(data-content);
      top: 0;
      left: 0;
      width: 0;
      color: #5A30F0;
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      transition: width .5s ease;
    }
    &:hover::before {
      width: 100%;
      text-decoration: underline;
      cursor: pointer;
    }
}

@keyframes switchRight {
    0%{left: 3px; right: 73px;}
    50%{ left: 3px; right: 3px;}
    100%{left: 66px; right: 3px;}
}

@keyframes switchLeft {
    0%{right: 3px; left: 66px;}
    50%{ right: 3px; left: 3px;}
    100%{right: 73px; left: 3px;}
}

@keyframes scrollNone {
    0%{top: 0;}
    100%{top: -70px;}
}

@media  screen and (max-width:1440px){
    .phone{
        display: none;
    }
}

@media  screen and (max-width:1240px){
    .header__list{
        display: flex;
        margin: 0 20px;
        gap: 20px;
    }
}

@media  screen and (max-width:1100px){
    .header__list{
        display: none
    }
}

@media  screen and (max-width:470px){
    .header__wrapper{
        padding: 0 10px;
    }
}
</style>