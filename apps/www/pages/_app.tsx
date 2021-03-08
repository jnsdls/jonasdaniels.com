import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible";
import { AppProps } from "next/app";
import React from "react";
import theme from "../chakraTheme";

function JNSApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default JNSApp;
