import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Scan from "./src/Scan";

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <Scan />
    </SafeAreaProvider>
  );
};

export default App;
