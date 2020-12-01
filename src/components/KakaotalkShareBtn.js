import React, { useEffect } from 'react'
import styled from "styled-components";

const ResultShareBtn = styled.div`
    flex: 20% 1;
    height: 40px;
    margin-bottom: 24px;
    cursor: pointer;
`

const ResultShareBtnImg = styled.img`
    object-fit: contain;
    width: 40px;
    height: 40px;
`

const KakaoShareButton = () => {

	useEffect(() => {
		createKakaoButton()
	}, [])

	const createKakaoButton = () => {
		// kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
		console.log(window.Kakao)
		if (window.Kakao) {
			const kakao = window.Kakao
			// 중복 initialization 방지
			if (!kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				kakao.init("c83d36ac2b7a28867837eed50782e571")
			}
			kakao.Link.createDefaultButton({
				// Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
				container: '#kakao-link-btn',
				objectType: 'feed',
				content: {
					title: 'Idea Paradox',
					description: '#리액트 #카카오 #공유버튼',
					imageUrl: "https://picsum.photos/id/237/200/300",
					link: {
						mobileWebUrl: window.location.href,
					},
				},
				buttons: [
					{
						title: '웹으로 보기',
						link: {
							mobileWebUrl: window.location.href,
						},
					},
				],
			})
		}
	}
	return (
		<ResultShareBtn id="kakao-link-btn">
			{/* Kakao share button */}
			<ResultShareBtnImg src={"../images/share/share_kakao.svg"} alt="kakao-share-icon" />
		</ResultShareBtn>
	)
}

export default KakaoShareButton
