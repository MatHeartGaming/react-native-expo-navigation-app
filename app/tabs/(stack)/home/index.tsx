import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>

            <View className='px-10 mt-5'>

                <CustomButton
                    className='mb-6'
                    color='primary'
                    onPress={() => router.push('/tabs/(stack)/products')}>
                    Productos
                </CustomButton>

                <CustomButton
                    className='mb-6'
                    color='secondary'
                    onPress={() => router.push('/tabs/profile')}>
                    Profile
                </CustomButton>

                <CustomButton
                    className='mb-6'
                    color='tertiary'
                    onPress={() => router.push('/tabs/settings')}>
                    Settings
                </CustomButton>

                <Link href='/tabs/products' asChild>
                    <CustomButton variant='text-only'>
                        Productos
                    </CustomButton>
                </Link>
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