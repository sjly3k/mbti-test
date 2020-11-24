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
            <Image src={"https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/76807418_739977753167875_678906869621661789_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=mdvpDpcfWFkAX8HG70T&_nc_tp=18&oh=5e17eb4227da74fd200cba7cab39a974&oe=5FBF823A"}/>
        </Container>
    )
}

export default Loading;