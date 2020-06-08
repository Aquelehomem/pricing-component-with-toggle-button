import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import styled from "styled-components";
import { styles } from "./styles";
import MainContainer from "./components/Main/Main";
const ContainerStyles = {
	padding: "70px 23px",
	backgroundPosition: "-1% 0%",
	position: "relative",
	overflow: "hidden",
	fontFamily: styles.fontSettings.fontFamily,
	fontSize: styles.fontSettings.fontSize,
	maxWidth: "1440px",
};
const BackgroundDiv = styled.div`
	background-image: url(${(props) => props.imgUrlTop});
	width: 300px;
	height: 100%;
	background-size: 100%;
	position: absolute;
	top: -20px;
	right: -120px;
	z-index: 2;
	background-repeat: no-repeat;
	@media screen and (min-width: 1440px) {
		background-image: url(${(props) => props.imgUrlTop}),
			url(${(props) => props.imgUrlBottom});
		right: 50px;
		top: -30px;
		right: -0px;
		z-index: 0;
		width: 100%;
		height: 100%;
		background-position: right top, bottom left;
		background-size: 300px;
	}
`;
const App = (props) => {
	return (
		<Container style={ContainerStyles} fluid={true}>
			<BackgroundDiv
				imgUrlTop={"images/bg-top.svg"}
				imgUrlBottom={"images/bg-bottom.svg"}
			/>
			<MainContainer>{props.children}</MainContainer>
		</Container>
	);
};

export default App;
