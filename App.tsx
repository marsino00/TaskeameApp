import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa todas tus pantallas aquí
import LoginScreen from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';
import PublishScreen from './src/screens/PublishScreen';
import MytasksScreen from './src/screens/MytasksScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  function printIcon(route:any,focused:boolean){
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Mensajes') {
      iconName = focused ? 'message' : 'message-outline';
    } else if (route.name === 'Publicar') {
      iconName = focused ? 'publish' : 'publish';
    } else if (route.name === 'Mis tareas') {
      iconName = focused ? 'clipboard-check' : 'clipboard-check-outline';
    } else if (route.name === 'Perfil') {
      iconName = focused ? 'account-circle' : 'account-circle';
    }
    return iconName;
  }
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = printIcon(route, focused);
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mensajes" component={MessagesScreen} />
      <Tab.Screen name="Publicar" component={PublishScreen} />
      <Tab.Screen name="Mis tareas" component={MytasksScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={MainTabNavigator}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
