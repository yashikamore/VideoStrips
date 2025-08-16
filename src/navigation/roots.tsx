// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyFeed from '../screens/my_feed';
import TestStrips from '../screens/test_strips';

export type RootStackParamList = {
  MyFeed: undefined;
  TestStrips: undefined;
};

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyFeed" component={MyFeed} />
        <Stack.Screen name="TestStrips" component={TestStrips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
