import { registerRootComponent } from "expo";

import { AppNavigation } from "./navigation";
import { LogBox } from 'react-native';

import { NativeBaseProvider } from "native-base";

function App() {
  // LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);