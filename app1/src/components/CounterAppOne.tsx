import { Text, Button, Flex } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {GLOBAL_SET_APP1 } from '../store/actionTypes/counterTypes';

// const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const Counter = () => {
  const [count, setCount] = useState(0);
  const dispatch =useDispatch();
  
  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-1</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => {dispatch({type:GLOBAL_SET_APP1,payload:count + 1}); setCount(count + 1)}}>Click me</Button>
      {/* <Suspense fallback="Loading...">
        <CounterAppTwo />
      </Suspense> */}
      {/* <Link to="/app2">Go to App2</Link> */}
    </Flex>
  );
};

export default Counter;
