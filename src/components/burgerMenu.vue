<template>
    <div class="burger__nav">
        <div class="menuToggle"  @click="toggleActive"></div>
        <div class="menu">
            <div>
                <ul class="header__list">
                    <li>
                        <a>После ремонта</a>
                    </li>
                    <li>
                        <a>Генеральная уборка</a>
                    </li>
                    <li>
                        <a>Регулярная уборка</a>
                    </li>
                    <li>
                        <a>Мойка окон</a>
                    </li>
                </ul>
                <span class="phone"><span>+380 67 401 69 77</span><span>24/7</span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toggleActive(){
            document.querySelector('.burger__nav').classList.toggle('active') 
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .burger__nav{
        height: 59px;
        width: 50px;
        background: #805efb00;
        transition: height .5s, width .5s;
        transition-delay: 0s, 0.75s;
        overflow: hidden;
        &.active{
            position: absolute;
            z-index: 90;
            right: 0;
            width: 300px;
            height: 270px;
            position: fixed;
            border-radius: 10px;
            top: 0;
            transition: width .5s, height .5s;
            transition-delay: 0s, .75s;
            background: #5A30F0;
            .menu{
                .header__list{
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 15px;
                    li a{
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 120%;
                        letter-spacing: 0.2px; 
                        color: #8f8f8f;
                        white-space: nowrap;
                        &:hover{
                            color: white;
                        }
                    }
                }
                .phone{
                    white-space: nowrap;
                    span{
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 120%;
                        letter-spacing: 0.2px; 
                        color: #8f8f8f;
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
                        background: #8f8f8f;
                    }
                    &:hover{
                        cursor: pointer;
                        span{
                            color: white;
                        }
                        span:nth-child(2)::before{
                            background: white;
                        }
                    }
                }
            }
        }
        .menuToggle{
            position: relative;
            padding-right: 10px;
            width: 100%;
            height: 70px;
            cursor: pointer;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            overflow: hidden;
            &::before{
                content: '';
                position: absolute;
                width: 32px;
                height: 2px;
                background: #404040;
                transform: translateY(-10px);
                box-shadow: 0 10px #404040;
                transition: 0.5s;
            }
        }
        &.active .menuToggle::before{
            transform: translate(0px);
            box-shadow: 0 0 #404040;
            background: #404040;
        }
        .menu{
            width: 100%;
            padding: 0 15px;
            background: #5A30F0;
            .social{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                flex-direction: row;
                gap: 15px;
            }
        }
    }
</style>