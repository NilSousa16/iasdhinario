import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './routes';

import { MenuProvider } from 'react-native-popup-menu';

const App: React.FC = () => (
  <MenuProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#054A29"/>
      <View style={{flex: 1, backgroundColor: '#054A29'}}>
        <StackRoutes />
      </View>
    </NavigationContainer >
  </MenuProvider>
);

export default App;
