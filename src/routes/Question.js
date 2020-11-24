import React, { useState, useEffect, createRef } from "react";
import Slider from "react-slick";
import {item as items, result as results} from "../item";
import styled from "styled-components";
import Loading from "../components/Loading";
import { dbService } from "../firebase";

const Question = ({history}) => {
    const [ pick, setPick ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const customSlider = createRef();

    const onClick = (event) => {
        event.preventDefault()
        setPick(prevState => {
            return [...prevState, event.target.value]
        })
        gotoNext();
    }

    useEffect( () => {
        const arrayEquals = (a, b) => {
            return Array.isArray(a) &&
                Array.isArray(b) &&
                a.length === b.length &&
                a.every((val, index) => val === b[index]);
        }

        const algorithm = (choice) => {
            return results.find(result => arrayEquals(result.result, choice))
        }

        const insertData = async () => {
            await dbService.collection("picks").add({
                pick,
                createAt : Date.now()
            })
        }

        console.log('Do something after counter has changed', pick, pick.length);
        if (pick.length === 3) {
            const result = algorithm(pick)

            insertData().then(() => console.log("데이터가 정상적으로 등록되었습니다."));

            setLoading(false)

            window.setTimeout(() => {
                history.push({
                    pathname : `/result/${result.typenum}`,
                    state : { result : result }
                })
            }, 3000)
        }
    }, [pick, history]);

    const questions = items.map((item) => JSON.stringify(item))

    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const settings = {
        dots: false,
        infinite: false,
        // 작을 수록 빨라짐
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
    !loading ? (
            <Loading/>
        ) :
        (
            <div id="wrapper">
                <QuestionContents>
                    <Slider {...settings} ref={customSlider}>
                        {
                            questions.map((value, index) => {
                                const question = JSON.parse(value)
                                return (
                                    <div>
                                        <QuestionText>
                                            {question.title.split("<br/>").map(line => {
                                                return (
                                                    <React.Fragment>
                                                        {line}
                                                        <br/>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </QuestionText>
                                        <ul key={index}>
                                            <QuestionAnswerItem
                                                key={"first-answer"}
                                                onClick={onClick}
                                                value={0}
                                            >
                                                {question.q1.split("<br/>").map(line => {
                                                    return (
                                                        <React.Fragment>
                                                            {line}
                                                            <br/>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </QuestionAnswerItem>
                                            <QuestionAnswerItem
                                                key={"second-answer"}
                                                onClick={onClick}
                                                value={1}
                                            >
                                                {question.q2.split("<br/>").map(line => {
                                                    return (
                                                        <React.Fragment>
                                                            {line}
                                                            <br/>
                                                        </React.Fragment>
                                                    )
                                                })}
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
    white-space: pre-line;
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