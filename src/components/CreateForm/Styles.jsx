import styled from 'styled-components';
import bg_img from "../../images/bg_confettibg.jpg";

export const Bg = styled.div`
	background-image: url(${bg_img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
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
	height: 100vh;
	width: 500px;
`

export const Title = styled.h2`
	color: #08c;
	font-family: 'Merriweather', serif;
	font-size: 32px;
	padding: 50px 0;
`
export const Label = styled.label`
	text-align: left;
`

export const Card = styled.div`
	background-color: #fdfdfd;
	border-radius: 15px;
	box-shadow: 0 0 10px 0 rgba(75, 75, 75, 0.2);
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 15px;
	width: 75px;
	height: 80px;
`

export const Display = styled.div`
	display: flex;
	justify-content: center;
`