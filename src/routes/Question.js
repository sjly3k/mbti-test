import React, { useState, useEffect, createRef } from "react";
import Slider from "react-slick";
import { questions, results } from "../real_item";
import styled from "styled-components";
import Loading from "../components/Loading";
import VS from "../images/VS.png"

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

        console.log('Do something after counter has changed', pick, pick.length);
        if (pick.length === 7) {
            const result = algorithm(pick)
            console.log(result)

            setLoading(false)

            window.setTimeout(() => {
                history.push({
                    pathname : `/result/1`,
                    // ${result.typenum}`,
                    state : { result : 1
                        // result.typenum
                    }
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
                                return (
                                    <div>
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

export default Question;