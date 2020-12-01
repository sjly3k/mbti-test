import React from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from 'styled-components';

const Home = () => {

    return (
        <div id="wrapper">
            <HomeWrapper>
                <HomeTitleImg src={"../images/home/title.png"}/>
                <HomeSubTitle>
                    우리는 서로를 알아가야한다.
                    <br/>
                    Idea Paradox 테스트는
                    <br/>
                    당신의 이데아를 찾아주는,
                    <br/>
                    나를 찾는 테스트이다.
                    <br/>
                    우리는 나를 보여주고 표현해야한다.
                    <br/>
                    전례없는 비대면 안에서 우리는
                    <br/>
                    계속해서 쌍방향 소통을 지속해야한다.
                </HomeSubTitle>
                <Link to={"/question"}>
                    <HomeStartButton src={"../images/home/start_btn.png"}/>
                </Link>
            </HomeWrapper>
        </div>
    )
}

const up = keyframes`
  0% {
    transform: translateY(-100%);
  }
  
  100% {
    transform: translateY(0%);
  }
`

const HomeWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HomeTitleImg = styled.img`
    margin-bottom: 45px;
    animation: ${up} 1s ease;
    width: 100%;
    height: auto;
    padding: 15px 30px;
    padding-top: 50px;
`

const HomeSubTitle = styled.h3`
    font-family: 'Auraka';
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
    animation: ${up} 1s ease;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: -.5px;
    margin-bottom: 90px;
`

const HomeStartButton = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0 30px;
    padding-top: 30px;
    margin-bottom: 10px;
    animation: ${up} 1s ease;
`

export default Home;