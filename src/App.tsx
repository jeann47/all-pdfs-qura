import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Page1 from './rnp';
import Page2 from './p2';

function Home() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
      <Text onPress={() => navigate('React Native PDF')} style={{fontSize: 24}}>
        React Native PDF
      </Text>
      <Text
        onPress={() => navigate('React Native PDF View')}
        style={{fontSize: 24}}>
        React Native PDF View
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="React Native PDF" component={Page1} />
        <Stack.Screen name="React Native PDF View" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
