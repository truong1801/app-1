import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const CounterAppOne = () => {
   const [count, setCount] = useState(0);

   return (
      <Flex gap="1rem" direction="column">
         <Text>
            Add by one each click <strong>APP-1</strong>
         </Text>
         <Text>Your click count : {count} </Text>
         <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </Flex>
   );
};

export default CounterAppOne;
