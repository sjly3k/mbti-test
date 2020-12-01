import React from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from 'styled-components';
// import {dbService} from "../firebase";
// import CountUp from 'react-countup';

const Home = () => {

    // const [count, setCount] = useState(0);
    // dbService.collection('picks').get().then(
    //     (snapshot) => {
    //         if (snapshot.empty) {
    //             setCount(0)
    //         } else {
    //             setCount(snapshot.docs.length)
    //         }
    //     }
    // )

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
                {/*<HomeStartButtonText>*/}
                {/*    현재 총*/}
                {/*    <span> </span>*/}
                {/*    <HomeStartButtonTextPeopleNum>*/}
                {/*        <CountUp start={0} end={count} duration={1}/>*/}
                {/*    </HomeStartButtonTextPeopleNum>*/}
                {/*    명이 참여하였습니다.*/}
                {/*</HomeStartButtonText>*/}
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
    padding: 0 30px;
`

const HomeSubTitle = styled.h3`
    font-family: 'Auraka';
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
    animation: ${up} 1s ease;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -.5px;
    margin-bottom: 100px;
`

const HomeStartButton = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0 30px;
    margin-bottom: 10px;
    animation: ${up} 1s ease;
`

// const HomeStartButtonText = styled.div`
//
//     font-family: 'Auraka';
//     font-weight: 400;
//     text-align: center;
//     font-size: 15px;
//     color: black;
//     word-break: break-all;
// `
//
// const HomeStartButtonTextPeopleNum = styled.span`
//     font-family: 'Auraka';
//     font-weight: 700;
// `

export default Home;