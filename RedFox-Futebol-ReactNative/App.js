import * as React from 'react';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { RecoilRoot } from 'recoil';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Times from './views/Time';


const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Times" component={Times} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <MainDrawer />
    </RecoilRoot>
  );
}