import React from "react";
import styled from 'styled-components';
import bgImage from "../images/bg.png";

const Paradox = () => {

    return (
        <Background id="wrapper">
            <ParadoxWrapper>
                <ParadoxTitleImg src={"../images/home/title.png"}/>
                <ParadoxContext>
                    <span>
                    4차 산업 혁명으로 과학기술은 우리에게 전례 없는 비대면 사회를 가능케 했다. 2020년부터 약 1년간 비대면 시스템 아래에 우리는 여러 관계들을 유지하고 사회성을 잃지 않으려 하고 있다. 사람들은 그전보다 서로의 관계를 유지하기 위해 드는 시간 또는 나를 표현하는 수단이 줄어들었지만, 동시에 SNS의 발달로 어디서든 자신을 표현하는 것이 자유로우며  보편화되고 있다.
                    <br/>
                    <br/>
                    SNS는 사람들 간의 쌍방향적 소통을 위해 만들어졌다. 하지만 우리는 타인에게 자신을 표현하고 보여주는 명목 하에 마치 한 브랜드 마냥 꽤나 일방향적으로 만들어진 ‘나’를 업로드한다. 보기에 더 나은 사람, 행복한 사람이 되고 싶어 하고, 끊임없이 관심받고 싶어 한다. 우리는 전보다 무한한 표현의 기회를 제공받고 있지만 오히려 SNS는 표현의 부작용을 일으키기도 한다.
                    <br/>
                    <br/>
                    최근 심리 테스트나 간단한 설문으로 자신의 성향을 알 수 있는 테스트가 유행하고 있다. 우린 테스트를 마치고 나를 대신 표현해 줄 그래픽으로 된 결과를 SNS에 공유하여 자신을 나타낸다. 이러한 ‘나’를 정의하는 매개도 기계가 되어버리는 역설 속에서 우리는 끊임없이 나를 정의해 줄 테스트를 한다. 정말 그 결과가 당신을 완벽히 대변해 줄 수 있는가? 당신은 누구인가? SNS 속에서 이상을 좇아 헤매다 화면 속에 갇힌 저 사람인가, 화면 밖에서 테스트를 진행하는 사람인가?
                    <br/>
                    <br/>
                    이 프로젝트에서 제작자는 기계와의 인터렉션을 통하여 자기 성향을 보여줄 수 있는 그래픽이 결과물이 되는 테스트를 사람들에게 제안한다. 사실은 질문도 결과도 그 사람의 성향과는 아무런 관계가 없다. 결국 아무 의미 없는 테스트를 통하여  이러한 SNS에서 나타나는 폐해를 비판하고자 한다. 하지만 제작자 또한 테스트를 만들어 SNS에 공유를 제안하면서 결국 아무것도 해결되지 않는 구조를 보여주며 패러독스를 말하고자 한다.
                    </span>
                </ParadoxContext>
            </ParadoxWrapper>
        </Background>
    )
}

const Background = styled.div`
    background-image: url(${bgImage});
`

const ParadoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ParadoxTitleImg = styled.img`
    margin-top: 30px;
    width: 335px;
    height: 120px;
`

const ParadoxContext = styled.div`

    span {
        z-index: 100;
        font-family: 'Noto Sans KR', sans-serif;
        font-stretch: normal;
        font-style: normal;
        line-height: 30px;
        font-size: 15px;
        color: #000;
    }
    text-align: center;
    
    background: rgba(256, 256, 256, 0.65);
    
    padding : 20px 20px;
    margin : 30px 20px 20px 20px;
`

// padding : 10px 40px;
// background-color: #F4F9FE;
// opacity: 0.7;
// margin-bottom: 50px;
// text-align: center;
// animation: ${up} 1s ease;
//
// span {
//     font-family: 'Noto Sans KR', sans-serif;
//     font-stretch: normal;
//     font-style: normal;
//     color: #000;
//     font-size: 15px;
//     line-height: 30px;
//     letter-spacing: 0.5px;
// }

export default Paradox;