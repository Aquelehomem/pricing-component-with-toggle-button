import React from "react";
import styled from "styled-components";
import { styles } from "../../styles";
const Div = styled.div`
	min-width: 300px;
	max-width: 370px;
	padding: 37px 26px;
	margin: 0 auto 30px auto;
	background: ${(props) => (props.changeStyle ? "rgba(157,160,239)" : "white")};
	border-radius: 7px;
	position:relative;
	z-index:2;
	display:flex;
	flex-direction:column;
	box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
	@media screen and (min-width:1440px){
		max-width:1440px;
		flex-wrap:wrap;
		flex-direction:space-between;
		margin:0;
	}
	.listStyle,
	li {
		background: none;
		border-left: none;
		border-right: none;
		padding: 19px 0;
		color: ${(props) => (props.changeStyle ? "white" : styles.DarkGrayishBlue)};
	}
	button {
		text-transform: uppercase;
		font-weight: 200;
		font-size: 14px;
		background-color: ${(props) =>
			props.changeStyle ? "white" : "rgba(157,160,239)"};
			color: ${(props) => (props.changeStyle ? "rgba(157,160,239)" : "white")};
			border: ${(props) => (props.changeStyle ? "none" : "")};			
	}
	}
	ul {
		span.title {
			font-size: 20px;
			color: ${(props) => (props.changeStyle ? "white" : styles.DarkGrayishBlue)};
	}
		}
		span.price {
			font-size: 70px;
			color: ${(props) => (props.changeStyle ? "white" : styles.DarkGrayishBlue)};
	}
		}
	}
`;
const CardContainer = ({ checked }) => {
	const cardInfo = [
		{
			title: "Basic",
			price: checked ? "$199.99" : "$19.99",
			features: ["500 GB Storage", "2 Users Allowed", "Send Up to 3 GB"],
			changeStyle: false,
		},
		{
			title: "Professional",
			price: checked ? "$249.99" : "$24.99",
			features: ["1 TB Storage", "5 Users Allowed", "Send Up to 10 GB"],
			changeStyle: true,
		},
		{
			title: "Master",
			price: checked ? "$399.99" : "$39.99",
			features: ["2 TB Storage", "10 Users Allowed", "Send Up to 20 GB"],
			changeStyle: false,
		},
	];
	return cardInfo.map((a) => (
		<Div changeStyle={a.changeStyle}>
			<ul class="list-group  listStyle">
				<span className="title">{a.title}</span>
				<span className="price">{a.price}</span>
				{a.features.map((list) => (
					<li class="list-group-item">{list}</li>
				))}
			</ul>
			<button type="button" class="btn btn-primary btn-lg btn-block">
				Learn More
			</button>
		</Div>
	));
};

export default CardContainer;
