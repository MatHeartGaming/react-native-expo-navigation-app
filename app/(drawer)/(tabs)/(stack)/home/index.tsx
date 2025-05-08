import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <SafeAreaView>

            <View className='px-10 mt-5'>

                <CustomButton
                    className='mb-6'
                    color='primary'
                    onPress={() => router.push('/products')}>
                    Productos
                </CustomButton>

                <CustomButton
                    className='mb-6'
                    color='secondary'
                    onPress={() => router.push('/profile')}>
                    Profile
                </CustomButton>

                <CustomButton
                    className='mb-6'
                    color='tertiary'
                    onPress={() => router.push('/settings')}>
                    Settings
                </CustomButton>

                <Link href='/products' asChild>
                    <CustomButton variant='text-only'>
                        Productos
                    </CustomButton>
                </Link>

                <CustomButton
                    onPress={onToggleDrawer}
                >
                    Abrir Menu
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