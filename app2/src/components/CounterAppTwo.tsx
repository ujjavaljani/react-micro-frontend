import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </Button>
      {/* <Link to="/app1">Back to App1</Link>
      <Link to="/welcome">Go to App2 welcome page</Link> */}
    </Flex>
  );
};

export default Counter;
