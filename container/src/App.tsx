import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Counter from './components/Dashboard';
import React, { Suspense } from 'react';

const App = () => {
	const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
	const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
	return(
	<Router>
		<Routes>
			<Route path="/" element={<Counter />} />
			<Route path="/app1" element={<Suspense fallback="Loading App1..."><CounterAppOne /></Suspense> } />
			<Route path="/app2" element={<Suspense fallback="Loading App2..."><CounterAppTwo /></Suspense>} />
		</Routes>
	</Router>
);
}

// const App = () => (
// 	<Counter />
// );

export default App;
