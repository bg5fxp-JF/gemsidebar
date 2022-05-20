import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
