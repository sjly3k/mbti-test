import React, { useRef, useCallback }  from "react";
import { useCapture } from 'react-capture'
import ResultPresenter from "./ResultPresenter";

const Result = ({history}) => {
    const { snap } = useCapture()
    const element = useRef(null)

    const onClickCopyUrl = () => {
        alert("URL이 클립보드에 복사되었습니다.");
    }

    const onClickDownload = useCallback(() => {
        snap(element, { file : 'result.png' })
        alert("결과 사진이 다운로드 되었습니다.");
    }, [snap, element])

    return (
        <ResultPresenter
            history={history}
            onClickCopyUrl={onClickCopyUrl}
            onClickDownload={onClickDownload}
            snap={snap}
            element={element}
        />
    )
}

export default Result;