import React, { useEffect } from 'react'
import styled from "styled-components";
import {KakaoTalkIcon} from "./Icons";

const ResultShareBtn = styled.div`
    flex: 20% 1;
    cursor: pointer;
    background-color: white;
    padding: 5px 20px;
`

const KakaoShareButton = () => {

	useEffect(() => {
		createKakaoButton()
	}, [])

	const createKakaoButton = () => {
		// kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
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
					description: '#emotiontest #idea #paradox',
					imageUrl: "https://www.idea-paradox.com/images/share/kakaotalk_share_img.jpg",
					link: {
						mobileWebUrl: "https://www.idea-paradox.com/",
						webUrl: "https://www.idea-paradox.com/",
					},
				},
				buttons: [
					{
						title: 'Go to the Ideal Space',
						link: {
							mobileWebUrl: "https://www.idea-paradox.com/",
							webUrl: "https://www.idea-paradox.com/",
						},
					},
				],
			})
		}
	}
	return (
		<ResultShareBtn id="kakao-link-btn">
			{/* Kakao share button */}
			<KakaoTalkIcon size={40}/>
		</ResultShareBtn>
	)
}

export default KakaoShareButton
