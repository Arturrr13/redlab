<template>
    <section class="info--section">
        <div class="text__wrapper">
            <h3>Как мы убираем</h3>
            <p>
                Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат.
            </p>
        </div>
        <div class="image__wrapper">
            <div class="image__nav">
                <span>
                    Как мы убираем
                </span>
                <ul>
                    <li :class="{ active: arrow === 1 }" @click="newSlide(1, [{top: 27.5, left: 25, text: 'Чистим 1'}, {top: 52, left: 19, text: 'Чистим 2'}, {top: 54.5, left: 38.5, text: 'Чистим 3'}, {top: 42.5, left: 53.75, text: 'Чистим 4'}, {top: 58, left: 72.2, text: 'Чистим 5'}, {top: 69, left: 49, text: 'Чистим 6'}, {top: 85, left: 22, text: 'Чистим 7'}])">
                        Кухня
                    </li>
                    <li :class="{ active: arrow === 2 }" @click="newSlide(2, [{top: 29, left: 29, text: 'Чистим 1'}, {top: 43, left: 29, text: 'Чистим 2'}, {top: 55, left: 44, text: 'Чистим 3'}, {top: 49, left: 30, text: 'Чистим 4'}])">
                        Комнаты
                    </li>
                    <li :class="{ active: arrow === 3 }" @click="newSlide(3, [{top: 29, left: 29, text: 'Чистим 1'}, {top: 43, left: 12, text: 'Чистим 2'}, {top: 71, left: 19, text: 'Чистим 3'}])">
                        Ванная
                    </li>
                    <li :class="{ active: arrow === 4 }" @click="newSlide(4, [{top: 29, left: 29, text: 'Чистим 1'}, {top: 43, left: 40, text: 'Чистим 2'}, {top: 33, left: 20, text: 'Чистим 3'}, {top: 81, left: 46, text: 'Чистим 4'}, {top: 15, left: 15, text: 'Чистим 5'}])">
                        Прихожая
                    </li>
                </ul>
            </div>
            <div class="image">
                <image-component
                    :image="imageSlide1" 
                    :slideNow="slideNow1"
                    style="z-index: 1;"
                />
                <image-component
                    :image="imageSlide2" 
                    :slideNow="slideNow2"
                />
                <div class="marker__wrapper">
                    <image-markers :positionArr="positionArr"/>
                </div>
            </div>
            <div class="trigger"></div>
        </div>
    </section>
</template>

<script>
import imageComponent from './infoSection/imageComponent.vue'
import imageMarkers from './infoSection/imageMarkers.vue'

export default {
    data(){
        return{
            imageSlide1: 1,
            imageSlide2: 2,
            slideNow1: true,
            slideNow2: false,
            arrow: 1,
            positionArr: [{top: 27.5, left: 25, text: 'Чистим фасад вытяжки'}, {top: 52, left: 19, text: 'Чистим 1'}, {top: 54.5, left: 38.5, text: 'Чистим 2'}, {top: 42.5, left: 53.75, text: 'Чистим 3'}, {top: 58, left: 72.2, text: 'Чистим 4'}, {top: 69, left: 49, text: 'Чистим 5'}, {top: 85, left: 22, text: 'Чистим 6'}]
        }
    },
    components:{
        imageComponent,
        imageMarkers
    },
    methods:{
        newSlide(img, arr){
            if(this.slideNow1){
                this.imageSlide2 = img
                this.slideNow2 = true
                this.slideNow1 = false
            } else {
                this.imageSlide1 = img
                this.slideNow1 = true
                this.slideNow2 = false
            }
            this.positionArr = arr
            this.arrow = img
            document.querySelectorAll('.marker__wrapper').forEach(e => e.classList.remove('active'))
        }
    }
}
</script>

<style lang="scss" scoped>
.info--section{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 160px;
    overflow: hidden;
}
.image{
    position: relative;
    overflow: hidden;
    width: 95vw;
    height: 100vh;
    max-width: 1065px;
    max-height: 630px;
}
.text__wrapper{
    max-width: 1065px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3{
        font-weight: 400;
        font-size: 44px;
        line-height: 120%;
        color: #404040;
    }
    
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #404040;
        max-width: 414px;
    }
}
.image__nav{
    min-width: 375px;
    height: 100vh;
    opacity: 0;
    background: #5A30F0;
    flex-direction: column;
    gap: 25%;
    display: none;
    transform: translateX(-300%);
    padding-left: 60px;
    span{
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        color: #FFFFFF;
        margin-top: 35px;
    }
    ul li{
        font-weight: 400;
        font-size: 44px;
        line-height: 120%;
        color: #FFFFFF;
        opacity: 0.7;
        position: relative;
        &.active{
            font-style: italic;
            opacity: 1;
            padding-left: 50px;
            &::before{
                content: url(../../assets/images/home/section3/arrow.svg);
                padding-right: 20px;
                position: absolute;
                left: 0;
                top: 5px;
            }
        }
        &:hover{
            cursor: pointer;
            font-style: italic;
            opacity: 1;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
}

.image{
    position: relative;
    .marker{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: #5A30F0;
        border-radius: 50%;
        box-shadow: 0px 0px 0px 10px rgba(90, 48, 240, 0.2)
    }
}
.marker__wrapper{
    opacity: 0;
}
.image__wrapper{
    position: relative;
    transition: .75s all ease;
    max-width: 1065px;
    margin-top: 52px;
    padding-bottom: 500px;
    &.element-show{
        display: flex;
        width: 100%;
        max-width: 100%;
        height: 100vh;
        padding-bottom: 0;
        .image__nav{
            display: flex;
            animation: navAnim 1s both;
        }
        .image{
            max-height: 100%;
            max-width: 100%;
        }
        .marker__wrapper{
            opacity: 1;
        }
    }
}
.trigger{
    width: 100%;
    background: rgba(255, 0, 0, 0);
    z-index: -1;
    &.element-show{
        position: absolute;
        top: 20%;
    }
}

@keyframes navAnim {
    0%{opacity: 0;}
    5%{opacity: 1; }
    100%{transform: translateX(0); opacity: 1; scale: 1;}
}

@media screen and (max-width:1300px){
    .image__nav{
        min-width: 280px;
        padding-left: 15px;
        ul li{
            font-size: 35px;
        }
    }
}

@media  screen and (max-width:1200px){
    .image__wrapper{
        &.element-show{
            flex-direction: column;
        }
        .image{
            width: 100vw;
        }
        .image__nav{
            align-items: center;
            justify-content: center;
            gap: 10px;
            height: 30%;
            padding-left: 0;
            ul{
                flex-direction: row;
            }
        }
    }
}

@media  screen and (max-width:1070px){
    .text__wrapper{
        max-width: 95%;
    }
}

@media  screen and (max-width:880px){
    .text__wrapper{
        flex-direction: column;
        gap: 20px;
        align-items: center;
        p{
            max-width: 360px;
        }
    }
}

@media  screen and (max-width:840px){
    .image__nav{
        ul{
            flex-wrap: wrap;
            justify-content: center;
        }   
        ul li{
            font-size: 28px;
        }
    }
}
</style>