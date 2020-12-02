import React from "react";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
    width: 40%;
    display: block;
    animation-name: fadeOut;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    
    @keyframes fadeOut {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }   
`

const Title = styled.span`
    font-size: 32px;
    font-weight: 800;
    line-height: 1.6;
    letter-spacing: -1px;
    margin-bottom: 45px;
`

const Loading = () => {
    return (
        <Container>
            <Title>분석중...</Title>
            <Image src={"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/118841893_411920483105800_352106157547146821_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=tEEndqjEtT4AX-ut4bL&tp=1&oh=f79253bde74822dd7405d5bce5be1d48&oe=5FF07A25"}/>
        </Container>
    )
}

export default Loading;