import React from "react";
import styled from "styled-components"
import loadingImg from "../images/gif/loading.gif"

const Container = styled.div`
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

const Loading = () => {
    return (
        <Container>
            <Image src={loadingImg}/>
        </Container>
    )
}

export default Loading;