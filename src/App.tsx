import React from "react";
import { NativeBaseProvider, Box, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="coolGray.300">Hello world</Center>
    </NativeBaseProvider>
  );
}