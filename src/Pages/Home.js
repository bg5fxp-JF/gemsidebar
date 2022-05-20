import React from "react";
import PreCard from "../components/PreCard/PreCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PreSalesData } from "../components/PreCard/PreSalesData";

function Home() {
	return (
		<div className="home">
			<Row className="mt-5" style={{ margin: "auto" }}>
				{PreSalesData.map((item, index) => {
					return (
						<Col sm={12} md={6} lg={4}>
							<PreCard
								key={index}
								cardTitle={item.title}
								hardCap={item.hardCap}
								liquidity={item.liquidity}
								lockTime={item.lockTime}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
}

export default Home;

{
	/* <Row className="mt-5" style={{ margin: "auto" }}>
				<Col sm={12} md={6} lg={3}>
					<PreCard cardTitle="Standard" cardText="Mint ." />
				</Col>
				<Col sm={12} md={6} lg={3}>
					<PreCard cardTitle="Standard" cardText="Mint ." />
				</Col>
				<Col sm={12} md={6} lg={3}>
					<PreCard cardTitle="Standard" cardText="Mint ." />
				</Col>
				<Col sm={12} md={6} lg={3}>
					<PreCard cardTitle="Standard" cardText="Mint ." />
				</Col>
			</Row> */
}
