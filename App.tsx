import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home/Home';
import AccountScreen from './screens/Account/Account';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerTransparent: true,
        //couleur du header
        headerStyle: {backgroundColor: '#1F1F1F'},
        headerTitleStyle: {color: 'white'},
        headerTintColor: 'white',
        tabBarStyle:{
          backgroundColor: '#1F1F1F',
          // backgroundColor: 'transparent',
          borderTopWidth: 1,
          borderTopColor: 'white',
          position: 'absolute',
          height: 100          
        },
        tabBarItemStyle:{
          backgroundColor:'transparent',
          margin:9,
          borderRadius:10,
        },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = 'home';
                    break;
                case 'Messages':
                    iconName = 'message-circle';
                    break;
                case 'Account':
                    iconName = 'user';
                    break;
                default:
                    break;
            }
            
            return <Icon name={iconName} size={size} color={color} />;
        },
    })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator> 
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1F1F1F',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
