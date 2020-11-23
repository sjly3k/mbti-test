import React, { useState, useEffect, createRef } from "react";
import Slider from "react-slick";
import {item as items} from "../item";
import styled from "styled-components";


const Question = () => {
    const [ pick, setPick ] = useState([])
    const customSlider = createRef();

    const onClick = (event) => {
        event.preventDefault()
        setPick(prevState => {
            return [...prevState, event.target.value]
        })
        gotoNext();
    }

    useEffect(() => {
        console.log('Do something after counter has changed', pick);
    }, [pick]);

    const questions = items.map((item) => JSON.stringify(item))

    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div id="wrapper">
            <QuestionContents>
                <Slider {...settings} ref={customSlider}>
                    {
                        questions.map((value, index) => {
                            const question = JSON.parse(value)
                            return (
                                <div>
                                    <QuestionText>
                                        {question.title}
                                    </QuestionText>
                                    <ul key={index}>
                                        <QuestionAnswerItem
                                            key={"first-answer"}
                                            onClick={onClick}
                                            value={0}
                                        >
                                            {question.q1}
                                        </QuestionAnswerItem>
                                        <QuestionAnswerItem
                                            key={"second-answer"}
                                            onClick={onClick}
                                            value={1}
                                        >
                                            {question.q2}
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
}

const QuestionContents = styled.div`
    width: 100%;
    height: 100%;
    padding: 15% 0 0;
`

const QuestionText = styled.div`
    width: 100%;
    min-height: 176px;
    word-break: keep-all;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 26px;
    font-weight: 800;
    line-height: 1.62;
    letter-spacing: -.5px;
    text-align: center;
    color: #222;
    padding: 0 40px;
    margin-bottom: 35px;
`

const QuestionAnswerItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 60px);
    min-height: 92px;
    background-color: transparent;
    background-color: #ff5100;
    border-radius: 20px;
    font-size: 16px;
    color: #222;
    color: #fff;
    line-height: 1.63;
    letter-spacing: -1px;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    margin-bottom: 36px;
    margin-left: 30px;
    margin-right: 30px;
`

export default Question;