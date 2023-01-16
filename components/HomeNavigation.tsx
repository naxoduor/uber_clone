import React from "react"
import { View, Text } from "react-native"
import HomeScreen from '../screens/HomeScreen'
import EatScreen from "../screens/EatScreen"
import MapScreen from "../screens/MapScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type StackList = {
    HomeScreen: undefined;
    MapScreen: undefined;
    EatScreen: undefined;
};

const Stack = createNativeStackNavigator<StackList>();

const HomeNavigation = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

    <Stack.Screen
    name="MapScreen"
    component={MapScreen}
    options={{
        headerShown: false
    }}/>

    <Stack.Screen
    name="EatScreen"
    component={EatScreen}
    options={{
        headerShown: false
    }}
    />
</Stack.Navigator>
    )
}

export default HomeNavigation