import React from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
// import gif_1 from "../images/gif/gif_1.gif"
// import bgImage from "../images/bg.png";
const QuestionPresenter = ({
    loading,
    onClick,
    allQuestions,
    fileName,
    pick
}) => {
    const question = JSON.parse(allQuestions.find(q => JSON.parse(q).num === pick.length))
    return (
    !loading ? (
            <Loading/>
        ) :
        (
            <Background link={`images/choice/${fileName}`} id="wrapper">
                {/*<GIF src={gif_1}/>*/}
                <QuestionContents>
                    {
                        <div>
                            <QuestionAnswerItemList q1_pos={question.q1_pos} q2_pos={question.q2_pos}>
                                <QuestionAnswerItemItem
                                    id={"question"}
                                    className={"first-answer"}
                                    key={"first-answer"}
                                    onClick={onClick}
                                    value={"0"}
                                >
                                    <span>{question.q1}</span>
                                </QuestionAnswerItemItem>
                                <QuestionAnswerItemItem
                                    id={"question"}
                                    className={"second-answer"}
                                    key={"second-answer"}
                                    onClick={onClick}
                                    value={"1"}
                                >
                                    <span>{question.q2}</span>
                                </QuestionAnswerItemItem>
                            </QuestionAnswerItemList>
                        </div>
                    }
                </QuestionContents>
            </Background>
        )
    )
}

const Background = styled.div`
    background-image: url(${props => props.link});
    position : relative;
`

// const GIF = styled.img`
//     z-index: 10000000;
//     width: 100px;
//     height: 100px;
// `

const QuestionContents = styled.div`
    width: 100%;
    height: 100%;
    padding: 15% 0 0;
`

const QuestionAnswerItemList = styled.ul`
    .first-answer {
        ${props => props.q1_pos}
    }
    
    .second-answer {
        ${props => props.q2_pos}
    }
`

const QuestionAnswerItemItem = styled.li`
    position: absolute;
    span {
        font-family: "Gotham";
        font-size: 30px;
        font-stretch: normal;
        font-weight: bold;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.5px;
        background-color: #fff;
        pointer-events: none;
    }
`

export default QuestionPresenter;