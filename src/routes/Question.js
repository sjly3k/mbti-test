import React, { useState, useEffect } from "react";
import { questions } from "../real_item";
import QuestionPresenter from "./QuestionPresenter";
import { IMAGES } from "../components/Images"

const Question = ({history}) => {

    const [ pick, setPick ] = useState([])
    const [ fileName, setFileName ] = useState("start.jpg")
    const [ loading, setLoading ] = useState(true)
    const [ imagesLoaded, setImagesLoaded ] = useState(false)
    const [ percentage, setPercentage ] = useState(0);

    const onClick = (event) => {
        event.preventDefault()
        setPick(prevState => {
            return [...prevState, event.target.value]
        })
    }

    const loadImage = (image, index, size) => {

        // console.log((index / size) * 100)
        // setPercentage((index / size) * 100)
        return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image.url
            // wait 1 seconds to simulate loading time
            loadImg.onload = () =>
                setTimeout(() => {
                    resolve(image.url)
                    setPercentage((index / size) * 100)
                }, 500)

            loadImg.onerror = err => reject(err)
        })
    }

    useEffect(() => {
        Promise.all(IMAGES.map((image, index) => loadImage(image, index, IMAGES.length)))
            .then(() => setImagesLoaded(true))
            .catch(err => console.log("Failed to load images", err))
    }, [])

    useEffect( () => {

        const goToResult = () => {
            setLoading(false)
            setTimeout(() => {
                history.push({
                    pathname : `/result`,
                    state : { result : `${pick.join()}.jpg` }
                })
            }, 1500)
        }

        if (pick.length !== 0) {
            console.log(pick)
            setFileName(`${pick.join()}.jpg`)
        } else {
            setFileName('start.jpg')
        }

        if (pick.length === 6) {
            loadImage({url : `/images/results/${pick.join()}.jpg`}, 1, 1)
                .then(() => goToResult())
                .catch(err => console.log("Failed to load result image", err))
        }

        console.log('Do something after counter has changed', pick, pick.length);

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
            percentage={percentage}
        />

    )
}

export default Question;