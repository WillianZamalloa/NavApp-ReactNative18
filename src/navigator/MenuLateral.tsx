import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


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
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{ 
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
          }}
          style={ styles.avatar }
        />
      </View>
      {/* Opciones de menu */}
      <View style={ styles.menuContainer }>
          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Text style={ styles.menuTexto }>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto }>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}