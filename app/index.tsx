import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const App = () => {
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5'>
                <Text className='text-5xl font-bold text-blue-500 text-center'>Hola Mundo</Text>
                <Text className='text-4xl' style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
                <Text className='text-3xl font-work-black'>Hola Mundo</Text>
                <Text className='text-2xl font-work-medium'>Hola Mundo</Text>
                <Text className='text-1xl font-work-light'>Hola Mundo</Text>
            </View>
        </SafeAreaView>
    )
}

export default App