import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetails";
import React from "react";
import { colors } from "../utils";
import { navigationRef } from "./navigationService";

const Stack = createStackNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons name="arrow-back" style={{marginLeft: 10}} size={24} color={tintColor} />
          ),

        }}
        initialRouteName="Home"

      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
