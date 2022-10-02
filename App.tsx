const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./screens/Screen";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
import Screen7 from "./screens/Screen7";
import Screen8 from "./screens/Screen8";
import Screen9 from "./screens/Screen9";
import Screen10 from "./screens/Screen10";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Screen"
              component={Screen9}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen3"
              component={Screen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen4"
              component={Screen4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen5"
              component={Screen5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen6"
              component={Screen6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen7"
              component={Screen7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen8"
              component={Screen8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen9"
              component={Screen9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen10"
              component={Screen10}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
