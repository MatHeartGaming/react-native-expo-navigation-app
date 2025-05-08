import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftTapped = (canGoBack: boolean) => {
        if (canGoBack) {
            navigation.dispatch( StackActions.pop() )
            return
        }
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerLeft: ({ tintColor, canGoBack }) => 
                <Ionicons
                    name={ canGoBack ? 'chevron-back-circle-outline' : 'grid-outline'}
                    size={18}
                    onPress={ () => onHeaderLeftTapped(canGoBack ?? false)}
                 />
            }}
        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: 'Home Screen',
                }}
            />
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Products Screen',
                    //animation: 'fade_from_bottom'
                }}
            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'Profile Screen',
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: 'Settings Screen',
                }}
            />
        </Stack>
    )
};

export default StackLayout