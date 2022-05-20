import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function InputForm() {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Row>
					<Col xs={6} sm={6} md={3}>
						<Form.Control type="number" placeholder="Number" />
					</Col>
					<Col xs={6} sm={6} md={3}>
						<Button
							variant="none"
							type="submit"
							style={{
								width: "75px",
							}}
						>
							MINT
						</Button>
					</Col>
				</Row>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Row>
					<Col xs={6} sm={6} md={6}>
						<Form.Control type="text" placeholder="Enter Number (e.g 0x0000)" />
					</Col>
					<Col xs={6} sm={6} md={6}>
						<Button variant="none" type="submit">
							Add to Wishlist
						</Button>
					</Col>
				</Row>
			</Form.Group>
		</Form>
	);
}

export default InputForm;
