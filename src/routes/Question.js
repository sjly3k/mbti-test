import React, { useState, useEffect } from "react";
import { questions } from "../real_item";
import QuestionPresenter from "./QuestionPresenter";
import { IMAGES } from "../components/Images"

const Question = ({history}) => {

    const [ pick, setPick ] = useState([])
    const [ fileName, setFileName ] = useState("start.jpg")
    const [ loading, setLoading ] = useState(true)
    const [ imagesLoaded, setImagesLoaded ] = useState(false)

    const onClick = (event) => {
        event.preventDefault()
        setPick(prevState => {
            return [...prevState, event.target.value]
        })
    }

    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image.url
                console.log(image.url)
                // wait 2 seconds to simulate loading time
                loadImg.onload = () =>
                    setTimeout(() => {
                        resolve(image.url)
                    }, 2000)

                loadImg.onerror = err => reject(err)
            })
        }

        Promise.all(IMAGES.map(image => loadImage(image)))
            .then(() => setImagesLoaded(true))
            .catch(err => console.log("Failed to load images", err))
    }, [])

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
            setFileName(`${pick.join()}.jpg`)
        } else {
            setFileName('start.jpg')
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
            imagesLoaded={imagesLoaded}
        />

    )
}

export default Question;