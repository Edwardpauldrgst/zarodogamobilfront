import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ranglista4 from './Ranglista4';
import Ranglista5 from './Ranglista5';
import Ranglista6 from './Ranglista6';
import Ranglista7 from './Ranglista7';
import Ranglista8 from './Ranglista8';
import Ranglista9 from './Ranglista9';
import Fooldal from './Fooldal.js';

function HomeScreen({ navigation }) {
  return (
    <Fooldal/>
  );
}

function NotificationsScreen4({ navigation }) {
  return (
    <Ranglista4 />
  );
}
function NotificationsScreen5({ navigation }) {
  return (
    <Ranglista5 />
  );
}
function NotificationsScreen6({ navigation }) {
  return (
    <Ranglista6 />
  );
}
function NotificationsScreen7({ navigation }) {
  return (
    <Ranglista7 />
  );
}
function NotificationsScreen8({ navigation }) {
  return (
    <Ranglista8 />
  );
}
function NotificationsScreen9({ navigation }) {
  return (
    <Ranglista9 />
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Főoldal">
        <Drawer.Screen name="Főoldal" component={HomeScreen} />
        <Drawer.Screen name="Ranglista 4x4" component={NotificationsScreen4} />
        <Drawer.Screen name="Ranglista 5x5" component={NotificationsScreen5} />
        <Drawer.Screen name="Ranglista 6x6" component={NotificationsScreen6} />
        <Drawer.Screen name="Ranglista 7x7" component={NotificationsScreen7} />
        <Drawer.Screen name="Ranglista 8x8" component={NotificationsScreen8} />
        <Drawer.Screen name="Ranglista 9x9" component={NotificationsScreen9} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
