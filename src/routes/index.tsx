import React from 'react';
import { View, Alert } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PopUpNavigator from '../components/PopUpNavigator';

import Main from '../pages/Main';
import Hinos from '../pages/Hinos';
import Letra from '../pages/Letra';
import Secoes from '../pages/Secoes';

export const StackRoutes: React.FC = () => {
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen
            name="Hinário"
            component={Main}
            options={{
              // headerTitle: props => <LogoTitle {...props} />,
              title: 'Hinário',
              headerStyle: {
                backgroundColor: '#006D77',
              },
              headerTintColor: '#fff',
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name= "md-search-outline"
                    color= "#fff"
                    size= {22}
                    style={{marginRight: 25}}
                    onPress={() => {
                      Alert.alert("Entrou para buscar");
                    }} />
                  <PopUpNavigator />
                </View>
               ),
            }}
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Hinos" component={Hinos} />
      <Stack.Screen name="Letras" component={Letra} />
      <Stack.Screen name="Seções" component={Secoes} />
    </Stack.Navigator>

  );
};

const Tab = createMaterialTopTabNavigator();

export const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hinos" component={Hinos} />
      <Tab.Screen name="Seções" component={Secoes} />
    </Tab.Navigator>
  );
}
