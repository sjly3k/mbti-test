import React, { useState, useEffect, createRef } from "react";
import Slider from "react-slick";
import { questions, results } from "../real_item";
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

        const insertData = async (result) => {
            await dbService.collection("picks").add({
                result,
                pick,
                createAt : Date.now()
            })
        }

        console.log('Do something after counter has changed', pick, pick.length);
        if (pick.length === 3) {
            const result = algorithm(pick)

            insertData(result.typenum).then(() => console.log("유저 데이터가 정상적으로 등록되었습니다."));

            setLoading(false)

            window.setTimeout(() => {
                history.push({
                    pathname : `/result/${result.typenum}`,
                    state : { result : result.typenum }
                })
            }, 3000)
        }
    }, [pick, history]);

    const allQuestions = questions.map((question) => JSON.stringify(question))

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
                            allQuestions.map((value, index) => {
                                const question = JSON.parse(value)
                                console.log(question)
                                return (
                                    <div>
                                        <ul key={index}>
                                            <QuestionAnswerItem
                                                key={"first-answer"}
                                                onClick={onClick}
                                                value={0}
                                                src={question.q1_img}
                                            />
                                            <QuestionVS>VS</QuestionVS>
                                            <QuestionAnswerItem
                                                key={"second-answer"}
                                                onClick={onClick}
                                                value={1}
                                                src={question.q2_img}
                                            />
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
    width: 100%;
    font-family: 'NeuropolX';
    text-align: center;
`

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

const QuestionAnswerItem = styled.img`
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

export default Question;