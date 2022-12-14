import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      drawerContent = { (props) => <MenuInterno { ...props } /> }
      screenOptions={{ 
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props: DrawerContentComponentProps) => {
  return (
    <View style={ styles.avatarContainer }>
      <Image 
        source={{ 
          uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
        }}
        style={ styles.avatar }
      />
    </View>
  )
}