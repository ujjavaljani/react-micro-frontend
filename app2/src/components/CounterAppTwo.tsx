import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/store/reducer";
import {INCREMENT_APP2} from '../store/actionTypes/counterTypes';

const Counter = () => {
  const [stateCount, setCount] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector((state:RootState)=>state.app2Counter?.app2Count);
  const clickHandler = function(){
    setCount(stateCount * 2);
    dispatch({type:INCREMENT_APP2,payload:count * 2});
  };
  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-2</strong>
      </Text>
      <Text>Your click count from Props: {count} </Text>
      <Text>Your click count from stae: {stateCount} </Text>
      <Button onClick={clickHandler}>
        Click me
      </Button>
      {/* <Link to="/app1">Back to App1</Link>
      <Link to="/welcome">Go to App2 welcome page</Link> */}
    </Flex>
  );
};

export default Counter;
