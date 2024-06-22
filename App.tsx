import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa todas tus pantallas aquí
import {LoginScreen} from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeSreen';
// import AuthScreen from './screens/AuthScreen';
// import MainScreen from './screens/MainScreen';
// import TaskPostScreen from './screens/TaskPostScreen';
// import TaskSearchScreen from './screens/TaskSearchScreen';
// import TaskDetailsScreen from './screens/TaskDetailsScreen';
// import MessagingScreen from './screens/MessagingScreen';
// import TaskManagementScreen from './screens/TaskManagementScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Publicar" component={TaskPostScreen} />
      <Tab.Screen name="Buscar" component={TaskSearchScreen} /> */}
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={MainTabNavigator}  options={{ headerShown: false }}  />
      {/* <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Autenticación" component={AuthScreen} /> */}
      {/* <Stack.Screen name="Principal" component={MainTabNavigator} /> */}
      {/* <Stack.Screen name="Detalles de Tarea" component={TaskDetailsScreen} />
      <Stack.Screen name="Mensajería" component={MessagingScreen} />
      <Stack.Screen name="Gestión de Tareas" component={TaskManagementScreen} />
      <Stack.Screen name="Perfil de Usuario" component={ProfileScreen} />
      <Stack.Screen name="Gestión de Pagos" component={PaymentScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
