import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import configureStore from './store/store';

const store = configureStore(undefined);
ReactDOM.render(
	<ChakraProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ChakraProvider>,
	document.getElementById("root")
);
