<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-sec1">
                <h1 class="footer-sec1-title font_b">미드림성형외과의원</h1>
                <p class="footer-sec1-text font_m">서울시 강남구 논현동 4번지 에메랄드 TOWER 8층</p>
                <div class="footer-icon-container">
                    <div class="footer-icon icon-kakaotalk"></div>
                    <div class="footer-icon icon-naver"></div>
                    <div class="footer-icon icon-youtube"></div>
                </div>
            </div>

            <div class="footer-sec2">
                <div class="footer-sec2-call">
                    <p class="footer-sec2-tel font_m">TEL.</p>
                    <h1 class="footer-sec2-title font_b">02-515-0022</h1>
                </div>
                <div class="footer-sec2-date">
                    <table>
                        <tbody>
                        <tr>
                            <th class="table-title font_b">카카오톡 상담</th> 
                            <td class="font_m" colspan="2">meedream1004</td>
                        </tr>
                        <tr>
                            <th class="table-title font_b" rowspan="3">진료시간</th>
                            <td class="table-sub font_m">평일</td>
                            <td class="font_m">AM 10:00 ~ PM 6:00</td>
                        </tr>
                        <tr>
                            <td class="table-sub font_m">토요일</td>
                            <td class="font_m">AM 10:00 ~ PM 3:00</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="font_m">일요일, 공휴일은 휴진</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="bg-white footer-sec2-logo-container">
                        <div class="footer-sec2-logo"></div>
                    </div>
                    <div class="footer-sec2-info d-flex">
                        <p>이용약관</p>
                        <p>개인정보처리방침</p>
                        <p>사이트맵</p>
                    </div>
                </div>
            </div>

            <div class="footer-sec3 font_r">
                <p>주소 : 서울시 강남구 논현동 4번지 에메랄드 TOWER 8층</p>
                <p>상호명 : 미드림성형외과의원</p>
                <p>대표자 : 백승준</p>
                <p>사업자등록번호 : 211-09-51591</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>


<style>
.icon-kakaotalk{background: url(../assets/img/icon/talk.svg) no-repeat center center; background-size: 60%;}
.icon-naver{background: url(../assets/img/icon/naver.svg) no-repeat center center; background-size: 60%;}
.icon-youtube{background: url(../assets/img/icon/youtube.svg) no-repeat center center; background-size: 60%;}

.footer{
    width: 100%;
    padding: 32px 0;
    background-color: #EEE9F0;
    margin-top: 100px;
}

.footer-container{
    width: 90%;
    margin: 0 auto;
    /* border: 1px solid red; */
}

.footer-sec1{
    /* border: 1px solid blue; */
    margin-bottom: 48px;
}

.footer-sec1-title{
    font-size: 20px;
    margin-bottom: 16px;
}

.footer-sec1-text{
    font-size: 12px;
    margin-bottom: 24px;
}

.footer-icon-container{
    display: flex;
    gap: 12px;
    justify-content: left;
}

.footer-icon{
    width: 35px;
    height: 35px;
    border: 1px solid #8a75b8;
    border-radius: 100%;
}

/* --------------------------------- sec1 end */

.footer-sec2{
    /* border: 1px solid blue; */
    margin-bottom: 32px;
}

.footer-sec2-tel{
    font-size: 12px;
    margin-bottom: 8px;
}

.footer-sec2-title{
    font-size: 32px;
    margin-bottom: 24px;
}

table{
    font-size: 12px;
    margin-bottom: 24px;
}

.table-title{
    text-align: left;
    width: 110px;
}

.table-sub{
    width: 56px;
}

.footer-sec2-logo-container{
    width: 100%;
    height: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
}

.footer-sec2-logo{
    width: 40%;
    height: 70%;
    background: url(../assets/img/logo/logo-width.svg) center center no-repeat;
}

.footer-sec2-info{
    font-size: 12px;
    justify-content: space-between;
}

/* --------------------------------- sec2 end */

.footer-sec3{
    /* border: 1px solid blue; */
    font-size: 10px;
}

.footer-sec3>p{
    margin-bottom: 5px;
}

.footer-sec3>p:last-child{
    margin-bottom: 0;
}


/* 미디어쿼리 --------------------------------- */

/* 아이패드 미니 */
@media screen and (max-width: 768px) and (min-width: 376px){

    .footer{
        padding: 48px 0;
    }
   
   /* sec1 */
   .footer-sec1-title{
        font-size: 48px;
        margin-bottom: 24px;
    }

    .footer-sec1-text{
        font-size: 18px;
        margin-bottom: 32px;
    }

    .footer-icon-container{
        gap: 16px;
    }

    .footer-icon{
        width: 45px;
        height: 45px;
    }

    /* sec2 */
    .footer-sec2{
        margin-bottom: 48px;
    }

    .footer-sec2-tel{
        font-size: 20px;
        margin-bottom: 16px;
    }

    .footer-sec2-title{
        font-size: 64px;
        margin-bottom: 32px;
    }

    table{
        font-size: 20px;
        margin-bottom: 32px;
    }

    .table-title{
        width: 205px;
    }

    .table-sub{
        width: 102px;
    }

    .footer-sec2-info{
        font-size: 20px;
    }

    /* sec3 */
    .footer-sec3{
        font-size: 14px;
    }

}


/* 아이패드 프로 */
@media screen and (max-width: 1024px) and (min-width: 769px){

    .footer{
        padding: 64px 0;
    }

    .footer-container{
        position: relative;
        display: flex;
        flex-wrap: wrap;
    }

    /* sec1 */
    .footer-sec1{
        width: 50%;
    }

    .footer-sec1-title{
        font-size: 48px;
        margin-bottom: 24px;
    }

    .footer-sec1-text{
        font-size: 18px;
        margin-bottom: 32px;
    }

    /* sec2 */
    .footer-sec2{
        width: 50%;
    }

    .footer-sec2-tel{
        font-size: 20px;
        margin-bottom: 12px;
    }

    .footer-sec2-title{
        font-size: 48px;
        margin-bottom: 48px;
    }

    .footer-sec3{
        position: absolute;
        bottom: 40px;
    }
}



/* pc */
@media screen and (min-width: 1025px){
    .footer{
        padding: 64px 0;
        margin-top: 150px;
    }

    .footer-container{
        position: relative;
        display: flex;
        flex-wrap: wrap;
    }

    .footer-sec1{
        width: 55%;
        margin-bottom: 32px;
    }

    .footer-sec1-title{
        font-size: 64px;
        margin-bottom: 16px;
    }

    .footer-sec1-text{
        font-size: 20px;
        margin-bottom: 32px;
    }

    .footer-icon-container{
        gap: 32px;
    }

    .footer-icon{
        width: 45px;
        height: 45px;
    }

    .footer-sec2{
        width: 45%;
    }

    .footer-sec2-tel{
        font-size: 20px;
        margin-bottom: 12px;
    }

    .footer-sec2-title{
        font-size: 48px;
        margin-bottom: 48px;
    }

    table{
        font-size: 20px;
        margin-bottom: 32px;
    }

    .table-title{
        width: 205px;
    }

    .table-sub{
        width: 102px;
    }

    .footer-sec2-info{
        font-size: 20px;
    }


    .footer-sec3{
        position: absolute;
        bottom: 30px;
    }
}

</style>