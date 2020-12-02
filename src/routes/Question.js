import React, { useState, useEffect, createRef } from "react";
import { questions, results } from "../real_item";
import QuestionPresenter from "./QuestionPresenter";

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
        <QuestionPresenter
            settings={settings}
            loading={loading}
            onClick={onClick}
            allQuestions={allQuestions}
            customSlider={customSlider}
        />

    )
}

export default Question;