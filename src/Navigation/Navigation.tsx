import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import DetailsScreen from '../Details/DetailsScreen';
import AddDetails from '../DetailsForm/AddDetails';


export default function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>

            <Stack.Screen
                options={{ headerShown: false }}
                name="Home" component={Home} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="AddDetails" component={AddDetails} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})