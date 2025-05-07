import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>HomeScreen</Text>

                <Link href='/products' className='bg-blue-500 mx-5 p-2 rounded-md mt-4'>
                    Productos{' '}
                </Link>
                <Link href='/profile' className='bg-blue-500 mx-5 p-2 rounded-md mt-4'>
                    Perfil{' '}
                </Link>
                <Link href='/settings' className='bg-blue-500 mx-5 p-2 rounded-md mt-4'>
                    Ajustes{' '}
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen