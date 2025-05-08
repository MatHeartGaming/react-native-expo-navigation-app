import { Redirect } from 'expo-router'
import React from 'react'

const App = () => {
    /*return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5'>
                <Text className='text-5xl font-bold text-blue-500 text-center'>Hola Mundo</Text>
                <Text className='text-4xl text-primary' style={{ fontFamily: 'WorkSans-Black' }}>
                    4XL Primary Color Work Black
                </Text>
                <Text className='text-3xl text-secondary font-work-black'>
                    3XL Secondary Color Work Black
                </Text>
                <Text className='text-2xl text-secondary-200 font-work-medium'>
                    2XL Secondary-200 Color Work Medium
                </Text>
                <Text className='text-1xl text-tertiary font-work-light'>
                    1XL Tertiary Color Work Light
                </Text>

                <Link href='/products' className='bg-blue-500 p-2 rounded-md mt-4'>
                    Productos
                </Link>
            </View>
        </SafeAreaView>
    )*/

        //return <Redirect href='/drawer' />
        return <Redirect href='/home' />

}

export default App