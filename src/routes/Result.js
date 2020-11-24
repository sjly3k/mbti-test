import React, { useRef, useCallback }  from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import {result as results} from "../item";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useCapture } from 'react-capture'

const Result = ({history}) => {
    const { snap } = useCapture()
    const element = useRef(null)
    const dataNum = history.location.pathname.split("/")[2];
    const resultData = results.find(result => result.typenum === parseInt(dataNum, 10))

    const onClickCopyUrl = () => {
        alert("URL이 클립보드에 복사되었습니다");
    }

    const onClickDownload = useCallback(() => {
        snap(element, { file : 'result.png' })
    }, [snap, element])

    return (
        <div id="wrapper">
            <ResultContents className={"result-contents"}>
                <div ref={element}>
                    <ResultSrTitle>
                        내 친구의 스낵 성격유형은?
                    </ResultSrTitle>
                    <ResultSubTitle as={"h3"}>
                        {resultData.sub_title}
                    </ResultSubTitle>
                    <ResultMainTitle>
                        {resultData.main_title}
                    </ResultMainTitle>
                    <ResultImg src={resultData.image}/>
                    <ResultDescText>{resultData.desc_text}</ResultDescText>
                    <ResultDetailSection>
                        <ResultDetailUl>
                            <ResultDetailLi>
                                시원시원하게 적극적이고 직선적이에요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                스스로도 호불호가 강해서 내가 좋아하는 사람은 너무 좋은데 싫은 사람은 너무 싫어요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                한 번 싫으면 영구히 싫어해요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                이렇게 개성이 있는 사람에게 호!! 를 외치는 사람도 있지만 이기적이라고 불호!!를 외치는 사람도 있어요
                            </ResultDetailLi>
                            <ResultDetailLi>
                                뒤끝이 부족해요. 자신이 좋아하는 것에는 누구보다 열정을 쏟을 수 있지만 빨리 질려요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                뒤끝이 부족해요. 자신이 좋아하는 것에는 누구보다 열정을 쏟을 수 있지만 빨리 질려요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                뒤끝이 부족해요. 자신이 좋아하는 것에는 누구보다 열정을 쏟을 수 있지만 빨리 질려요.
                            </ResultDetailLi>
                            <ResultDetailLi>
                                뒤끝이 부족해요. 자신이 좋아하는 것에는 누구보다 열정을 쏟을 수 있지만 빨리 질려요.
                            </ResultDetailLi>
                        </ResultDetailUl>
                    </ResultDetailSection>
                </div>
                <ResultShareTitle>이 결과 공유하기</ResultShareTitle>
                <ResultShareBtnWrapper>
                    <CopyToClipboard text={window.location.href}>
                        <ResultShareBtn id={"shareUrl"} onClick={onClickCopyUrl}>
                            <ResultShareBtnImg src={"../images/share/share_url.svg"}/>
                        </ResultShareBtn>
                     </CopyToClipboard>
                    <ResultShareBtn>
                        <ResultShareBtnImg src={"../images/share/share_kakao.svg"}/>
                    </ResultShareBtn>
                    <ResultShareBtn>
                        <ResultShareBtnImg src={"../images/share/share_facebook.svg"}/>
                    </ResultShareBtn>
                </ResultShareBtnWrapper>

                {/* 이거 활성화 하려면 별도 작업 필요 (백엔드 작업 -> DB, 서버 필요해지고 구조 복잡해짐.), URL 복사로 대신하는 것이 좋아보임*/}
                <Link to={"/images/results/result_img.png"} download>
                    <ResultBtn onClick={onClickDownload}>
                        <ResultBtnText>이미지 저장 하기</ResultBtnText>
                    </ResultBtn>
                </Link>
                <Link to={"/"}>
                    {history.location.state === undefined ?
                        (
                            <ResultBtnJustLink>
                                <ResultBtnJustLinkText>나도 테스트 해보기</ResultBtnJustLinkText>
                            </ResultBtnJustLink>
                        ) :
                        (
                            <ResultBtn>
                                <ResultBtnText>테스트 다시 하기</ResultBtnText>
                            </ResultBtn>
                        )
                    }
                </Link>
            </ResultContents>
        </div>
    )
}

const ResultContents = styled.div`
    width: 100%;
    height: 100%;
    padding: 15% 20px 0;
    text-align: center;
`

const ResultSrTitle = styled.h2`
    display: inline-block;
    position: relative;
    word-break: keep-all;
    font-size: 21px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.59;
    letter-spacing: -.5px;
    text-align: center;
    color: #222;
    margin-bottom: 12px;
`

const ResultTitle = styled.h1`
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
`
const ResultSubTitle = styled(ResultTitle)`
    word-break: keep-all;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.59;
    letter-spacing: -.5px;
    margin-bottom: 6px;
`

const ResultMainTitle = styled(ResultTitle)`
    font-size: 40px;
    font-weight: 800;
    line-height: 1.28;
    letter-spacing: -.63px;
    margin-bottom: 36px;
`

const ResultDescText = styled.h4`
    word-break: keep-all;
    object-fit: contain;
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.5px;
    text-align: center;
    color: #222;
    margin-bottom: 36px;
`

const ResultImg = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 18px;
`

const ResultDetailSection = styled.section`
    
    text-align: left;
    border-radius: 10px;
    background-color: #fafafa;
    padding: 28px 28px 28px 36px;
    margin-bottom: 36px;
`

const ResultDetailUl = styled.ul`
    display: flex;
    flex-direction: column;
`

const ResultDetailLi = styled.li`
      display: inline-block;
      word-break: keep-all;
      font-size: 15.5px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;
      letter-spacing: -1px;
      color: #222222;

      // 첫 줄만 들여쓰기
      text-indent: -9px;

      margin-bottom: 11px;
    
    ::before {
      content: "\\2022"; /* Add content: \\2022 is the CSS Code/unicode for a bullet */
      color: #ff5100; /* Change the color */
      font-size: 16px;
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 1em; /* Also needed for space (tweak if needed) */
      margin-left: -0.7em; /* Also needed for space (tweak if needed) */
      margin-right: 6px;
      text-align: right;
    }
`

const ResultShareTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.5px;
    text-align: center;
    color: #222;
    margin-bottom: 24px;
`

const ResultShareBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: wrap;
    padding: 0 30px;
    margin-bottom: 24px;
`

const ResultShareBtn = styled.div`
    flex: 20% 1;
    height: 40px;
    margin-bottom: 24px;
`

const ResultShareBtnImg = styled.img`
    object-fit: contain;
    width: 40px;
    height: 40px;
`

const ResultBtn = styled.div`
    width: 100%;
    height: 71px;
    object-fit: contain;
    border-radius: 20px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
`

const ResultBtnJustLink = styled(ResultBtn)`
    background-color: #ff5100;
`

const ResultBtnText = styled.span`
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.5px;
    text-align: center;
    color: #222;
`

const ResultBtnJustLinkText = styled(ResultBtnText)`
    color: #fff;
`

export default Result;