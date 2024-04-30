

import React, { useState } from "react";


import "./App.css";

const App = () => {
	
	const [counter, setCounter] = useState(0);

	
	const clicking1 = () => {
		
		setCounter(counter + 1);
	};

	
	const clicking2= () => {
		
		setCounter(counter - 1);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "500%",
				position: "absolute",
				width: "100%",
				height: "100%",
				top: "-15%",
        backgroundColor:"black",
        borderRadius:"20%"
       
       
			}}
		>
			Counter App
			<div
				style={{
					fontSize: "100%",
					position: "relative",
					top: "10vh",
				}}
			>
				{counter}
			</div>
			<div className="button">
				<button
					style={{
						fontSize: "30%",
						position: "relative",
						top: "5vh",
						marginRight: "5px",
						backgroundColor: "skyblue",
						borderRadius: "20%",
						color: "black",
					}}
					onClick={clicking1}
				>
					Increase
				</button>
				<button
					style={{
						fontSize: "30%",
						position: "relative",
						top: "5vh",
						marginLeft: "5px",
						backgroundColor: "lightyellow",
						borderRadius: "20%",
						color: "black",
					}}
					onClick={clicking2}
				>
					Decrease
				</button>
			</div>
		</div>
	);
};

export default App;
