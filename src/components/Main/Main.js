import React, { useState } from "react";
import styled from "styled-components";
import CardContainer from "../Card/Card";
import { styles } from "../../styles";
const Main = styled.main`
	padding: 36px 26px;
	background-color: ${styles.VeryLightGrayishBlue};
	text-align: center;
	width: 100%;
	max-width: 1050px;
	margin: 0 auto;
	span {
		color: ${styles.LightGrayishBlue};
	}
	span.title {
		color: ${styles.GrayishBlue};
		display: block;
		margin: 0 auto;
		font-size: 30px;
		font-weight: 700;
	}
	.toggle {
		display: flex;
		flex-direction: space-between;
		align-items: center;
		justify-content: center;
		max-width: 270px;
		margin: 80px auto;
		background-color: transparent;
		@media screen and (min-width: 1000px) {
			margin: 48px auto;
		}
		span:nth-of-type(1) {
			margin-right: auto;
		}
		span:nth-of-type(3) {
			margin-left: auto;
		}
		.custom-control {
			margin: -20px auto 0 auto;
			label {
				transform: scale(2);
				background-color: red;
			}
		}
	}
	.CardContainer {
		@media screen and (min-width: 1440px) {
			display: flex;
			padding:0
			background-color: red;
			div {
				margin: 30px 0 0 0;
				align-self:center;
				height:490px
			}
			div:nth-of-type(2) {
				margin: 0 0 0 0;
				height:500px;
			}
		}
	}
`;
const MainContainer = () => {
	const [checked, setChecked] = useState(false);
	console.log(checked);
	return (
		<Main>
			<span className="title">Our Princing</span>
			<div className="toggle">
				<span>Annually</span>
				<div class="custom-control custom-switch custom-switch-xl">
					<input
						type="checkbox"
						class="custom-control-input"
						id="customSwitch3"
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<label
						class="custom-control-label"
						for="customSwitch3"
					></label>
				</div>
				<span>Monthly</span>
			</div>
			<div className="CardContainer">
				<CardContainer checked={checked} />
			</div>
		</Main>
	);
};

export default MainContainer;
