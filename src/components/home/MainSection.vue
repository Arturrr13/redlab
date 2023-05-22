<template>
    <section class="section--main">
        <div class="img__wrapper">
            <img src="@/assets/images/home/section1/1.jpg" alt="mainPhoto">
        </div>

        <div class="text__wrapper">
            <h1>
                Уборка квартир в Киеве 
            </h1>
            <p>
                Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку. 
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section--main{
    display: flex;
    align-items: center;
    position: relative;
    max-width: 1440px;
}
.img__wrapper{
    width: 50%;
    img{
        width: 100%;
    }
}
.text__wrapper{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    h1{
        font-size: 76px;
        line-height: 110%;  
        color: #404040;
        font-weight: 400;
        max-width: 380px;
    }
    p{
        font-size: 18px;
        line-height: 140%; 
        color: #404040;
        max-width: 380px;
        margin-top: 30px;
    }
}

@media  screen and (max-width:1000px){
    .section--main{
        justify-content: center;
        .img__wrapper{
            width: 100%;
            filter: blur(4px);
        }
        .text__wrapper{
            position: absolute;
            width: 95%;
            text-align: center;
        }
    }
}

@media  screen and (max-width:600px){
    .text__wrapper{
        padding-bottom: 0;
        h1{
            font-size: 60px;
        }
        p{
            font-size: 16px;
        }
    }
}

@media  screen and (max-width:450px){
    .text__wrapper{
        h1{
            font-size: 44px;
            margin-top: 10px;
        }
    }
}
</style>