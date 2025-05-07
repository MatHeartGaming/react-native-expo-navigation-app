import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const App = () => {
    return (
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
            </View>
        </SafeAreaView>
    )
}

export default App