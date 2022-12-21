import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen } from './Tab2Screen';
import { Tab3Screen } from './Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

// export const Tabs

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ 
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: { 
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0 
        },
        tabBarLabelStyle:{
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {
          //console.log(props);
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':   
              iconName= 'T1'; 
              break; 
            case 'Tab2Screen':   
              iconName= 'T2'; 
              break; 
            case 'StackNavigator':   
              iconName= 'SN'; 
              break; 
          }
          return <Text style={{ color }} >{ iconName }</Text>
        }
      })}
      
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: () => <Text style={{ color: colores.primary }} >T1</Text> }} component={ Tab1Screen } /> */}
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ Tab2Screen } />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </Tab.Navigator>
  );
}