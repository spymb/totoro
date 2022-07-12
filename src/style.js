const string2 = `<style>
        #buttons {
            position: fixed;
            right: 0;
            top: 0;
            z-index: 10;
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            margin-right: 10px;
        }
        #buttons > button {
            margin-bottom: 10px;
            padding: 4px 8px;
        }
        #showCSS {
            position: fixed;
            top: 0;
            left: 0;
            width: 40vw;
            height: 100%;
            overflow-y: scroll;
        }
        #tHTML {
            position: fixed;
            bottom: -30px;
            right: 75px;
            width: 50vw;
            height: 100%;
        }
        @media (max-width: 280px) {
            #showCSS {
                position: fixed;
                height: 35vh;
                top: 0;
                left: 0;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
                overflow-y: scroll;
            }
            #tHTML {
                transform: scale(0.8);
                position: fixed;
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: -60px;
            }
            .left-arm {
                left: -60px;
            }
        }
        @media (max-width: 280px) {
            #showCSS {
                height: 35vh;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
            }
            #tHTML {
                transform: scale(0.8);
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: -60px;
            }
            .left-arm {
                left: -60px;
            }
        }
        @media (min-width: 281px) and (max-width: 380px) {
            #showCSS {
                height: 35vh;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
            }
            #tHTML {
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: -15px;
            }
            .left-arm {
                left: -15px;
            }
        }
        @media (min-width: 381px) and (max-width: 400px) {
            #showCSS {
                height: 35vh;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
            }
            #tHTML {
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: 3px;
            }
            .left-arm {
                left: 3px;
            }
        }
        @media (min-width: 401px) and (max-width: 430px) {
            #showCSS {
                height: 35vh;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
            }
            #tHTML {
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: 20px;
            }
            .left-arm {
                left: 20px;
            }
        }
        @media (min-width: 431px) and (max-width: 470px) {
            #showCSS {
                position: fixed;
                height: 35vh;
                top: 0;
                left: 0;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
                overflow-y: scroll;
            }
            #tHTML {
                position: fixed;
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: 35px;
            }
            .left-arm {
                left: 35px;
            }
        }
        @media (min-width: 471px) and (max-width: 500px) {
            #showCSS {
                position: fixed;
                height: 35vh;
                top: 0;
                left: 0;
                width: 100%;
                border-bottom: 1px solid #bdb4b4;
                overflow-y: scroll;
            }
            #tHTML {
                position: fixed;
                bottom: -100px;
                left: 0;
                width: 100%;
                height: 80vh;
            }
            .container {
                transform: scale(0.7);
            }
            .right-arm {
                right: 50px;
            }
            .left-arm {
                left: 50px;
            }
        }
        @media (min-width: 501px) and (max-width: 540px) {
            #tHTML {
                right: 26px;
                transform: scale(0.65);
            }
            .right-arm {
                right: -60px;
            }
            .left-arm {
                left: -60px;
            }
        }
        @media (min-width: 541px) and (max-width: 620px) {
            #tHTML {
                right: 26px;
                transform: scale(0.65);
            }
            .right-arm {
                right: -45px;
            }
            .left-arm {
                left: -45px;
            }
        }
        @media (min-width: 621px) and (max-width: 714px) {
            #tHTML {
                right: 26px;
                transform: scale(0.65);
            }
            .right-arm {
                right: -25px;
            }
            .left-arm {
                left: -25px;
            }
        }
        @media (min-width: 715px) and (max-width: 790px) {
            #tHTML {
                right: 26px;
                transform: scale(0.8);
            }
            .right-arm {
                right: -3px;
            }
            .left-arm {
                left: -3px;
            }
        }
        @media (min-width: 791px) and (max-width: 870px) {
            #tHTML {
                right: 26px;
                transform: scale(0.8);
            }
            .right-arm {
                right: 15px;
            }
            .left-arm {
                left: 15px;
            }
        }
        @media (min-width: 871px) and (max-width: 980px) {
            #tHTML {
                right: 26px;
                transform: scale(0.8);
            }
            .right-arm {
                right: 40px;
            }
            .left-arm {
                left: 40px;
            }
        }
        @media (min-width: 981px) and (max-width: 1022px) {
            #tHTML {
                right: 26px;
                transform: scale(0.9);
            }
            .right-arm {
                right: 65px;
            }
            .left-arm {
                left: 65px;
            }
        }


        @media (max-height: 668px) {
            #tHTML {
                bottom: -25px;
            }
        }
        @media (min-height: 669px) and (max-height: 741px) {
            #tHTML {
                bottom: -55px;
            }
        }
        @media (min-height: 843px) and (max-height: 916px) {
            #tHTML {
                bottom: -120px;
            }
            .right-arm {
                right: -2px;
            }
            .left-arm {
                left: -2px;
            }
        }
        @media (min-height: 1023px) and (max-height: 1181px) {
            #tHTML {
                right: 40px;
                bottom: -180px;
            }
            .right-arm {
                right: 8px;
            }
            .left-arm {
                left: 8px;
            }
        }
        @media (min-height: 1182px) and (max-height: 1369px) {
            #tHTML {
                right: 40px;
                bottom: -250px;
            }
            .right-arm {
                right: 30px;
            }
            .left-arm {
                left: 30px;
            }
        }

        @media (min-width: 1023px) and (max-width: 1025px) {
            #tHTML {
                right: 60px;
                bottom: 60px;
                transform: scale(0.9);
            }
            .right-arm {
                right: 50px;
            }
            .left-arm {
                left: 50px;
            }
        }
        @media (min-width: 1026px) and (max-width: 1278px) {
            #tHTML {
                right: 26px;
                transform: scale(0.9);
            }
            .right-arm {
                right: 65px;
            }
            .left-arm {
                left: 65px;
            }
        }
        @media (min-width: 1279px) and (max-width: 1281px) {
            #tHTML {
                right: 70px;
                bottom: -30px;
            }
            .right-arm {
                right: 50px;
            }
            .left-arm {
                left: 50px;
            }
        }
    </style>`
export default  string2
