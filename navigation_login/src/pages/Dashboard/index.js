import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Dashboard(){

    const navigation = useNavigation()

    return(
        <SafeAreaView>
            <View>
                <Text>Tela de Dashboard</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro') }>
                <Text>Mudar de Tela</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}