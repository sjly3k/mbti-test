import React from "react";
import styled from "styled-components";
import Loading from "../components/Loading";

const QuestionPresenter = ({
    loading,
    onClick,
    allQuestions,
    fileName,
    pick,
    imagesLoaded,
}) => {

    const question = JSON.parse(allQuestions.find(q => JSON.parse(q).num === pick.length))
    return (
        !imagesLoaded ? (
            <React.Fragment>
                <Loading type={"question"}/>
            </React.Fragment>
            ) :
            (
                !loading ? (
                    <Loading type={"result"}/>
                    ) : (
                    <Background link={`images/choice/${fileName}`} id="wrapper">
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
        )
}

const Background = styled.div`
    background-image: url(${props => props.link});
    position : relative;
`

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
    background-color: #fff;
    padding: 19px 10px 10px 10px;
    span {
        font-family: "Gotham";
        font-size: 30px;
        font-stretch: normal;
        font-weight: bold;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.5px;
        pointer-events: none;
        
    }
`

export default QuestionPresenter;