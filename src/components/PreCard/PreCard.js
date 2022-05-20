import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import "./PreCard.css";

// cards for home page
function PreCard(props) {
	return (
		<div>
			<FaIcons.FaBitcoin
				style={{ color: "#F66B0E" }}
				size="50"
				className="card-img"
			/>
			<Card className="home-card ">
				<Card.Body>
					<Card.Title className="text-center">
						<h3 style={{ color: "#ffff" }}>{props.cardTitle}</h3>
					</Card.Title>
					<Row>
						<Col md={4}>
							<Card.Text style={{ color: "#ffff" }}>Hard Cap:</Card.Text>
						</Col>
						<Col md={5}></Col>
						<Col md={3}>
							<Card.Text style={{ color: "#F66B0E" }}>
								{props.hardCap} BNB
							</Card.Text>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Card.Text style={{ color: "#ffff" }}>Liquidity:</Card.Text>
						</Col>
						<Col md={5}></Col>
						<Col md={3}>
							<Card.Text style={{ color: "#F66B0E" }}>
								{props.liquidity} %
							</Card.Text>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Card.Text style={{ color: "#ffff" }}>Lock Time:</Card.Text>
						</Col>
						<Col md={5}></Col>
						<Col md={3}>
							<Card.Text style={{ color: "#F66B0E" }}>
								{props.lockTime} days
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

export default PreCard;
