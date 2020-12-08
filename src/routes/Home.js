import React from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from 'styled-components';
import bgImage from "../images/bg.png";

const Home = () => {

    return (
        <Background id="wrapper">
            <HomeWrapper>
                <HomeTitleImg src={"../images/home/title.png"}/>
                <HomeSubTitle>
                    지금 당신은 꿈속의 미지의 공간에서
                    <br/>
                    헤매고 있다. 꿈은 우리의 무의식을 지배하는
                    <br/>
                    시각적 심상이다. 그리고 그 무의식은 당신을
                    <br/>
                    당신만의 이상적 세계로 이끈다.
                    <br/>
                    <br/>
                    당신의 무의식이 갈망하는 이상은 무엇일까.
                    <br/>
                    이 테스트는 당신이 진정 갈망하는 것이
                    <br/>
                    무엇인지 알려준다.
                    <br/>
                    <br/>
                    꿈속에서 만나게 되는 두 가지의 선택지 중
                    <br/>
                    더 끌리는 것을 택해라.
                    <br/>
                </HomeSubTitle>
                <Link to={"/question"}>
                    <HomeStartButton src={"../images/home/start_btn.png"}/>
                </Link>
            </HomeWrapper>
        </Background>
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

const Background = styled.div`
    background-image: url(${bgImage});
`

const HomeWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HomeTitleImg = styled.img`
    margin-bottom: 55px;
    animation: ${up} 1s ease;
    width: 335px;
    height: 120px;
`

const HomeSubTitle = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
    animation: ${up} 1s ease;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.5px;
    margin-bottom: 50px;
    
    padding : 10px 40px;
    background-color: #F4F9FE;
    opacity: 0.7;
`

const HomeStartButton = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 33px;
    animation: ${up} 1s ease;
    margin-bottom: 10px;
`

export default Home;