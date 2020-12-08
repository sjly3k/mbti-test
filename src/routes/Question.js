import React, { useState, useEffect, createRef } from "react";
import { questions } from "../real_item";
import QuestionPresenter from "./QuestionPresenter";

const Question = ({history}) => {

    const [ pick, setPick ] = useState([])
    const [ fileName, setFileName ] = useState("start.png")
    const [ loading, setLoading ] = useState(true)

    const onClick = (event) => {
        event.preventDefault()
        setPick(prevState => {
            return [...prevState, event.target.value]
        })
    }

    useEffect( () => {

        if (pick.length === 6) {
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

        console.log('Do something after counter has changed', pick, pick.length);

        if (pick.length !== 0) {
            setFileName(`${pick.join()}.png`)
        } else {
            setFileName('start.png')
        }

    }, [pick, history]);

    const allQuestions = questions.map((question) => JSON.stringify(question))


    return (
        <QuestionPresenter
            loading={loading}
            onClick={onClick}
            allQuestions={allQuestions}
            fileName={fileName}
            pick={pick}
        />

    )
}

export default Question;