import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { MenuLateralBasico } from "./src/navigator/MenuLateralBasico";
import { StackNavigator } from "./src/navigator/StackNavigator";
import React from 'react';
import { MenuLateral } from "./src/navigator/MenuLateral";

const App = () => {
  
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  );
};


export default App;
