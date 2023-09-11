import React from "react";
import { Counter } from "./Counter.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Counter/>;
		</div>
	);
};

export default Home;
