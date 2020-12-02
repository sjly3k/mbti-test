import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Loading from "../components/Loading";
import VS from "../images/VS.png"

const QuestionPresenter = ({
    settings,
    loading,
    onClick,
    allQuestions,
    customSlider

}) => {

    return (
    !loading ? (
            <Loading/>
        ) :
        (
            <div id="wrapper">
                <QuestionContents>
                    <Slider {...settings} ref={customSlider}>
                        {
                            allQuestions.map((value, index) => {
                                const question = JSON.parse(value)
                                return (
                                    <div key={index}>
                                        <ul key={index}>
                                            <QuestionAnswerItem
                                                id={"question"}
                                                key={"first-answer"}
                                                onClick={onClick}
                                                value={0}
                                            >
                                                <QuestionAnswerImg src={question.q1_img}/>
                                            </QuestionAnswerItem>
                                            <QuestionVS/>
                                            <QuestionAnswerItem
                                                id={"question"}
                                                key={"second-answer"}
                                                onClick={onClick}
                                                value={1}
                                            >
                                                <QuestionAnswerImg src={question.q2_img}/>
                                            </QuestionAnswerItem>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </QuestionContents>
            </div>
        )
    )
}

const QuestionVS = styled.div`
    margin: 0 auto;
    width: 60px;
    height: 25px;
    background: url(${VS});
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
`

const QuestionContents = styled.div`
    width: 100%;
    height: 100%;
    padding: 15% 0 0;
`

const QuestionAnswerItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 60px);
    min-height: 92px;
    background-color: transparent;
    text-align: center;
    padding: 20px;
    margin-left: 30px;
    margin-right: 30px;
    text-transform : uppercase;
`

const QuestionAnswerImg = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
`

export default QuestionPresenter;