import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props) => {  

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
          title='Menu'
          onPress={ navigation.toggleDrawer }
        />
      )
    })
  }, [])
  
  
  return (
    <View style={ styles.globalMargin } >
        <Text style={ styles.title }>Pagina 1 Screen</Text>
        <Button 
          title='Ir a pagina 2'
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        <Text>Navegar pasando argumentos</Text>
        
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ 
              ...styles.botonGrande,
              backgroundColor: '#5956D6'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Salvador'
            }) }
          >

            <Text style={ styles.botonGrandeTexto } >Salvador</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ 
              ...styles.botonGrande,
              backgroundColor: '#FF9427'
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Valentina'
            }) }
          >

            <Text style={ styles.botonGrandeTexto }>Valentina</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
