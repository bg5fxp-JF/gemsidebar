import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import PresalesInput from "./Pages/PresalesInput";

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<PresalesInput />} />
			</Routes>
		</>
	);
}

export default App;
