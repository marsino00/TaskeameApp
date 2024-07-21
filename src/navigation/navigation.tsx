import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import MytasksScreen from '../screens/MytasksScreen/MytasksScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PublishScreen from '../screens/PublishScreen/PublishScreen';
import { RootStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const renderIcon = (routeName:string, focused:boolean, color:string, size:number) => {
    let iconName = '';

    switch (routeName) {
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'Mensajes':
        iconName = focused ? 'message' : 'message-outline';
        break;
      case 'Publicar':
        iconName = focused ? 'plus-circle' : 'plus-circle-outline';
        break;
      case 'Mis tareas':
        iconName = focused ? 'clipboard-check' : 'clipboard-check-outline';
        break;
      case 'Perfil':
        iconName = focused ? 'account-circle' : 'account-circle-outline';
        break;
      default:
        iconName = 'help-circle';
        break;
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => renderIcon(route.name, focused, color, size),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign:'center',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mensajes" component={MessagesScreen} />
      <Tab.Screen name="Publicar tarea"  component={PublishScreen} />
      <Tab.Screen name="Mis tareas" component={MytasksScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
