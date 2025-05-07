import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>

            <View className='px-10 mt-5'>

                <Link href='/products' asChild className='bg-blue-500 p-2 rounded-md mt-4 mb-8'>
                    <CustomButton color='primary'>
                        Productos
                    </CustomButton>
                </Link>

                <CustomButton
                    className='mb-6'
                    color='primary'
                    onPress={() => router.push('/products')}>
                    Productos
                </CustomButton>

                <CustomButton
                    className='mb-6'
                    color='primary'
                    variant='text-only'
                    onPress={() => router.push('/products')}>
                    Productos
                </CustomButton>
            </View>

            {/*<View>
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
            </View>*/}
        </SafeAreaView>
    )
}

export default HomeScreen