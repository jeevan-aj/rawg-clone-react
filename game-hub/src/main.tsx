import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import "./index.css";
import theme from './theme.ts';
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Route.tsx";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider router={Router}/>
    </ChakraProvider>
  </React.StrictMode>
);
