import styled from 'styled-components';
import bg_img from "../../images/bgcolorful.jpeg";

export const Bg = styled.div`
	background-image: url(${bg_img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100vw;
	min-height: 100vh;
	height: 100%;
	text-align: center;
`

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(8.5%);
	box-shadow: 0 8px 32px 0 rgba(76, 31, 135, 0.37);
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	width: 500px;

	@media (max-width: 768px) {
		width: 100vw;
		justify-content: center;
	}
`
export const Card = styled.div`
	background-color: #fdfdfd;
	border-radius: 15px;
	box-shadow: 0 0 10px 0 rgba(75, 75, 75, 0.2);
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 30px 60px 30px;
	width: 160px;
	height: 170px;

	&:hover {
		background-color: #edfafb;
	}

	@media (max-width: 460px) {
		margin: 0 10px 60px 10px;
	}

	@media (max-width: 388px) {
		margin: 20px 0;
	}
`

export const Display = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 388px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Info = styled.div`
	padding: 10px 50px 50px 50px;
	text-align: left;
`

export const Title = styled.h1`
	color: #08c;
	font-family: 'Merriweather', serif;
	font-size: 40px;
	padding: 50px 0;

	@media (max-width: 768px) {
		font-size: 34px;
		padding: 20px 0;
	}
`