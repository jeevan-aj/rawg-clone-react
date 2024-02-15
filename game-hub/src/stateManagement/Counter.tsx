import { Box, Button, HStack} from "@chakra-ui/react";
import { useReducer } from "react";
import CounterReducer from "./Reducers/CounterReducer";

function Counter() {
  
    const [value,dispatch] = useReducer(CounterReducer,0)

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"80vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <HStack>
        <Button onClick={() => dispatch({type:'DECREMENT'})}>decrement</Button>
        <Button onClick={() => dispatch({type:'RESET'})}>reset</Button>
        <Button onClick={() => dispatch({type:'INCREMENT'})}>increment</Button>
      </HStack>
      <h1 className="mt-5">{value}</h1>
    </Box>
  );
}

export default Counter;
