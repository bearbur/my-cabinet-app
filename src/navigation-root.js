import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './screens/home-screen';
import ProfileScreen from './screens/profile-screen';
import AuthScreen from './screens/auth-screen';

export const NavigationRoot = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
                <Stack.Screen name="Auth" component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationRoot;
