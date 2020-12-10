import React, { useRef }  from "react";
import ResultPresenter from "./ResultPresenter";

const Result = ({history}) => {
    const element = useRef(null)

    const onClickCopyUrl = () => {
        alert("URL이 클립보드에 복사되었습니다.");
    }

    return (
        <ResultPresenter
            history={history}
            onClickCopyUrl={onClickCopyUrl}
            element={element}
        />
    )
}

export default Result;