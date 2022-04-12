import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import CounterAppTwo from "./components/CounterAppTwo";
import Welcome from "./components/Welcome";
import {Routes, Route,BrowserRouter as Router } from 'react-router-dom';

// const App = () => (
// 	<Box margin="1.2rem">
// 		<Box>APP-2</Box>
// 		<Box>
// 			<CounterAppTwo />
// 		</Box>
// 	</Box>
// );
const App = () => {
	const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
	return(
	<Router>
		<Routes>
			<Route path="/app1" element={<Suspense fallback="Loading App1..."><CounterAppOne /></Suspense>} />
			<Route path="/" element={<CounterAppTwo />} />
			<Route path="/welcome" element={<Welcome />} />
		</Routes>
	</Router>
);
}

export default App;
