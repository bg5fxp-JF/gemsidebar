import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import InputForm from "../components/InputForm/InputForm";

function PresalesInput() {
	return (
		<Container fluid>
			<section style={{ paddingTop: "115px" }}>
				<Row className="justify-content-center align-items-center">
					<Card className="p-3 w-50 mt-5">
						<InputForm />
					</Card>
				</Row>
			</section>
		</Container>
	);
}

export default PresalesInput;
