import React, { useState } from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Home = () => {

    return (
        <div id="wrapper">
            <HomeMainTitle>
                내 성격에 딱!
                <br/>
                어울리는 스낵은?
            </HomeMainTitle>
            <HomeSubTitle as={"h3"}>
                스낵으로 보는 내 성격, SPTI
            </HomeSubTitle>
            <Link to={"/question"}>
                <HomeStartButton>
                    <HomeStartButtonText className={"home-start_btn-text"}>
                        테스트 시작하기
                    </HomeStartButtonText>
                </HomeStartButton>
            </Link>
        </div>
    )
}

const HomeTitle = styled.h1`
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
    padding: 0 10px;
`

const HomeMainTitle = styled(HomeTitle)`
    font-size: 32px;
    font-weight: 800;
    line-height: 1.6;
    letter-spacing: -1px;
    margin-top: 17vh;
    margin-bottom: 45px;
`

const HomeSubTitle = styled(HomeTitle)`
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -.5px;
    margin-bottom: 80px;
`

const HomeStartButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 100px;
    border-radius: 20px;
    background-color: #ff5100;
    margin: auto auto 40px;
    padding: 0 30px;
`

const HomeStartButtonText = styled.span`
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.5px;
    text-align: center;
    color: #fff;
    margin-bottom: 8px;
`

export default Home;