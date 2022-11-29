import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import SplashScreen from './src/screens/Splash/SplashScreen'
import SuccessScreen from './src/screens/Splash/Success'

import LoginScreen from './src/screens/Auth/Login'
import RegisterScreen from './src/screens/Auth/Register'

import MoreScreen from './src/component/Search/MoreSearch'

import TambahScreen from './src/component/Booking/Tambah'

import MessageScreen from './src/component/Messenger/Message'

import EditProfile from './src/component/Appointment/EditProfile'
import ForgetPassword from './src/component/Appointment/ForgetPassword'

import WelcomeScreen from './src/screens/Welcome'
import DashboardScreen from './src/screens/Dashboard'
import SearchScreen from './src/screens/Search'
import DetailScreen from './src/screens/Detail'
import MessengerScreen from './src/screens/Messenger'
import NotificationScreen from './src/screens/Notification'
import ProfileScreen from './src/screens/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FDCB5A',
        tabBarStyle: [
          {
            display: 'flex'
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name='Home'
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ size, color }) => (
            <Icon name='magnify' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Messenger'
        component={MessengerScreen}
        options={{
          tabBarLabel: 'Messenger',
          tabBarIcon: ({ size, color }) => (
            <Icon name='message-processing' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ size, color }) => (
            <Icon name='bell' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Icon name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Dashboard' component={RootHome} />
        <Stack.Screen name='MoreSearch' component={MoreScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
        <Stack.Screen name='Success' component={SuccessScreen} />
        <Stack.Screen name='Tambah' component={TambahScreen} />
        <Stack.Screen name='Message' component={MessageScreen} />
        <Stack.Screen name='Edit' component={EditProfile} />
        <Stack.Screen name='Forget' component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App