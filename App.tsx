import 'intl'
import 'intl/locale-data/jsonp/en'
import  {KeyboardAvoidingView, Platform} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import HomeNavigation from './components/HomeNavigation'
import { store } from './app/store'
import { Button } from 'react-native'
import HomeScreen from './screens/HomeScreen'


import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
 return (
  <Provider store={store}>
    {/* <MyStack/> */}
  <NavigationContainer>
   
    <SafeAreaProvider>
      <KeyboardAvoidingView 
      behavior={Platform.OS==='ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS==='ios'? -64:0}
      style={{ flex: 1}}
      >
      <HomeNavigation/>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  </NavigationContainer>
  </Provider>
 )
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};