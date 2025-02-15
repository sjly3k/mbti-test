import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import KakaoShareButton from "../components/KakaotalkShareBtn";
import bgImage from "../images/bg.png";
import {LinkIcon} from "../components/Icons";

const ResultPresenter = ({
    history,
    onClickCopyUrl,
    element
}) => {

    return (
        <Background id="wrapper">
            <ResultContents className={"result-contents"}>
                <ParadoxTitleImg src={"../images/home/title.png"}/>
                <div ref={element} style={{
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    marginTop : "20px"
                }}>
                    {
                        history.location.state ? (
                            <div style={{display : "flex", alignItems : "center", justifyContent : "center", flexDirection : "column"}}>
                                <img style={{width : "90%", height: "auto"}} src={`/images/results/${history.location.state.result}`} alt={"result_photo"}/>
                                <ResultText>결과 이미지는 꾹 눌러 다운로드 하세요.</ResultText>
                            </div>

                        ) : (
                            <React.Fragment/>
                        )
                    }
                </div>
                <ResultContext>
                    테스트의 결과가 어떠한가.
                    <br/>
                    하나씩 추가되는 그래픽과
                    <br/>
                    선택지의 개연성을 찾았는가?
                    <br/>
                    <br/>
                    테스트를 마친 당신은 혹시 이 이미지를
                    <br/>
                    SNS에 공유하려 하지 않았는가. 사실 이 둘은
                    <br/>
                    아무 관련이 없으며, 당신이 갈망하는 것이
                    <br/>
                    무엇인지 보여주고 있지 않는다.
                    <br/>
                    <br/>
                    꿈과 SNS는 우리에게 별반 다를 바 없는
                    <br/>
                    결과를 보여준다. 꿈은 수면 중 일어나는
                    <br/>
                    일련의 시각적 심상이고, SNS에 우리가
                    <br/>
                    공유하는 것들도 일상 중 일어나는 일련의
                    <br/>
                    시각적 심상이다. 둘 다 우리의 무의식을
                    <br/>
                    지배하며 우리의 의식을 대신 표현해 준다.
                    <br/>
                    즉, SNS는 우리의 무의식 속 이상적 실재를
                    <br/>
                    시각화하여 일방적으로 보이는 허상이다.
                    <br/>
                    <br/>
                    아직 이 테스트가 이해되지 않는다면
                    <br/>
                    Paradox를 눌러라.
                </ResultContext>

                <ResultBtnWrapper>

                    <Link to={"/paradox"}>
                        <ResultBtn>
                            <ResultBtnText>
                                <span>Paradox</span>
                            </ResultBtnText>
                        </ResultBtn>
                    </Link>

                    <ResultShareBtnWrapper>
                        <CopyToClipboard text={"https://www.idea-paradox.com/"}>
                            <ResultShareBtn id={"shareUrl"} onClick={onClickCopyUrl}>
                                <LinkIcon size={40}/>
                            </ResultShareBtn>
                        </CopyToClipboard>
                        <KakaoShareButton/>
                    </ResultShareBtnWrapper>

                    <Link to={"/"}>
                        <ResultBtn>
                            <ResultBtnText>
                                <span>Retry</span>
                            </ResultBtnText>
                        </ResultBtn>
                    </Link>
                </ResultBtnWrapper>

                <ResultFooter>
                    <ResultFooterHeader>
                        <ResultFooterHeaderWrapper>
                            <span className={"title short"}>Design</span>
                            <span className={"name"}>Lee Su Mi @utumusum</span>
                        </ResultFooterHeaderWrapper>
                        <ResultFooterName>Jeong Hae Rang @realwithsun</ResultFooterName>
                    </ResultFooterHeader>
                    <ResultFooterHeader>
                        <ResultFooterHeaderWrapper>
                            <span className={"title long"}>Development</span>
                            <span className={"name"}>Lee Seung Jin @2win_jin</span>
                        </ResultFooterHeaderWrapper>
                    </ResultFooterHeader>
                </ResultFooter>
            </ResultContents>
        </Background>
    )
}

const ParadoxTitleImg = styled.img`
    margin-top: 30px;
    width: 335px;
    height: 120px;
`

const Background = styled.div`
    background-image: url(${bgImage});
`

const ResultContents = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`

const ResultText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    font-weight: bold;
    color: #dad9d9;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.5px;
    
    margin-top: 5px;
`

const ResultContext = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #000;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.5px;
    
    margin : 20px 40px;
    padding : 30px 0px;
    background: rgba(256, 256, 256, 0.65);
`

const ResultBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    a:last-child {
        margin-top: 20px;
    }
`

const ResultBtn = styled.div`
    width: 100%;
    object-fit: contain;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

const ResultBtnText = styled.div`
    text-align: center;
    color: #222;
    height: 100%;
    background-color: white;
    padding: 19px 10px 0 10px;
    
    span {
        font-family: "Gotham";
        font-size: 30px;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 1.5px;
    }
`

const ResultFooter = styled.footer`
    text-align: left;
    padding: 10px;
`

const ResultFooterHeaderWrapper = styled.div`
    display: flex;
    font-size: 10px;
    color: #fff;
    &:first-child {
        margin-bottom: 5px;
    }
`

const ResultFooterHeader = styled.div`
    span.title {
        margin-right: 20px;
        font-weight: bold;
    }
    span.short {
        margin-right: 52px;
    }
    span.name {
        font-weight: 300;
    }
`

const ResultFooterName = styled.div`
    color: #fff;
    margin-left: 88px;
    font-size: 10px;
    font-weight: 300;
    margin-bottom: 5px;
`

const ResultShareBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: wrap;
    margin-bottom: 20px;
`

const ResultShareBtn = styled.div`
    flex: 20% 1;
    cursor: pointer;
    background-color: white;
    padding: 5px 20px;
    margin-right: 20px;
`


export default ResultPresenter;