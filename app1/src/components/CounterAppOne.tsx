import { Text, Button, Flex } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {INCREMENT } from '../store/actionTypes/counterTypes';
import { RootState } from "../store/reducer";

// const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
type Props = {
  config?:{
    isContainerApp: boolean,
    incrementBy: number
  },
}
const Counter = (props:Props) => {
  // const [count, setCount] = useState(0);
  const dispatch =useDispatch();
  const count = useSelector((state:RootState)=>state.app1Counter?.app1Count);
  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-1</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => {dispatch({type:INCREMENT,payload: count + (props.config?.incrementBy || 1)});}}>Click me</Button>
      {/* <Suspense fallback="Loading...">
        <CounterAppTwo />
      </Suspense> */}
      {/* <Link to="/app2">Go to App2</Link> */}
    </Flex>
  );
};

export default Counter;
