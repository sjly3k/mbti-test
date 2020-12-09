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
                    <span>
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
                    </span>
                </HomeSubTitle>
                <Link to={"/question"}>
                    <HomeStartButton>
                        <span>Start</span>
                    </HomeStartButton>
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
    
    padding : 10px 40px;
    background: rgba(256, 256, 256, 0.65);
    margin-bottom: 50px;
    text-align: center;
    animation: ${up} 1s ease;
            
    span {
        font-family: 'Noto Sans KR', sans-serif;
        font-stretch: normal;
        font-style: normal;
        color: #000;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0.5px;
    }
`

const HomeStartButton = styled.div`
    text-align: center;
    color: #222;
    height: 100%;
    background-color: white;
    padding: 19px 15px 0 15px;
    
    span {
        font-family: "Gotham";
        font-size: 30px;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 1.5px;
    }
    animation: ${up} 1s ease;
`


export default Home;