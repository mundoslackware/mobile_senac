import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../pages/Dashboard'
import Cadastro from '../pages/Cadastro'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Dashboard'
            component={Dashboard}
            />

            <Stack.Screen 
            name='Cadastro'
            component={Cadastro}
            />
        </Stack.Navigator>
    )
}