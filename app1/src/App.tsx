import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import CounterAppOne from "./components/CounterAppOne";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));console.log("initited app1's app file")
	return(
		<Router>
			<Routes>
				<Route path="/" element={<CounterAppOne />} />
				<Route path="/app2" element={<Suspense fallback="Loading App2..."><CounterAppTwo /></Suspense>} />
			</Routes>
		</Router>
	);
}
// const App = () => (
// 	<Box margin="1.2rem">
// 		<Box>APP-1</Box>
// 		<Box>
// 			<CounterAppOne />
// 		</Box>
// 	</Box>
// );

export default App;
