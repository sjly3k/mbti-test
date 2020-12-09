import React from "react";
import styled from "styled-components"
import loadingImg from "../images/gif/loading.gif"

const Container = styled.div`
  position : relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #e2f1ff;
`

const Image = styled.img`
    width: 40%;
    display: block;
`

const LoadingTextWrapper = styled.div`
  position: absolute;
  bottom: 10px;
`

const LoadingText = styled.div`
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    font-size: 15px;
    padding : 10px 0px;
  strong {
    font-weight: bold;
  }
`

const Loading = ({
    type="question"
                 }) => {
    return (
        <Container>
            <Image src={loadingImg}/>
            {
                type === "question" ? (
                    <LoadingTextWrapper>
                        <LoadingText>테스트에 필요한 이미지를 다운로드하고 있습니다.</LoadingText>
                        <LoadingText><strong>30초 ~ 1분</strong>뒤에 실행됩니다.</LoadingText>
                    </LoadingTextWrapper>
                ) : (
                    <LoadingTextWrapper>
                        <LoadingText>결과 이미지를 다운로드하고 있습니다.</LoadingText>
                        <LoadingText><strong>5초</strong>뒤에 실행됩니다.</LoadingText>
                    </LoadingTextWrapper>
                )
            }
        </Container>
    )
}

export default Loading;