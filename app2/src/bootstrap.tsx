import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import configureStore from './store/store';

ReactDOM.render(
	<ChakraProvider>
		<Provider store={configureStore(undefined)}>
		<App />
		</Provider>
	</ChakraProvider>,
	document.getElementById("root")
);
