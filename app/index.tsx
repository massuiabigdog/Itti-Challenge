import { registerRootComponent } from "expo";

import { AppNavigation } from "./navigation";
import { LogBox } from 'react-native';
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import { NativeBaseProvider } from "native-base";

function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <NativeBaseProvider>
      <ReduxProvider store={store}>
        <AppNavigation />
      </ReduxProvider>
    </NativeBaseProvider>
  );
}

export default registerRootComponent(App);