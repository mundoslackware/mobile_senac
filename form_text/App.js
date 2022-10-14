import React, {useState} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [ num1, setNum1 ] = useState('')
  const [ num2, setNum2 ] = useState('')
  const [ resultado, setResultado ] = useState('')
  
  function handleSoma(){
    let soma = Number(num1) + Number(num2)
    setResultado(Number(soma))
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />

      <View style={styles.viewContainer}>
        <Text style={styles.textHeader}>Campos do Formulário</Text>

        <TextInput
          style={styles.input}
          placeholder='Digite o 1º valor'
          placeholderTextColor='#FFFFFF'          
          keyboardType='numeric'
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput
          style={styles.input}
          placeholder='Digite o 2º valor'
          placeholderTextColor='#FFFFFF'         
          keyboardType='numeric'
          value={num2}
          onChangeText={setNum2}
        />

        <TouchableOpacity style={styles.button} onPress={handleSoma}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#009CFF',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
    height: 40,
    borderRadius: 8,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FF1D2B',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  resultado: {
    marginTop: 20,
    backgroundColor: '#00FF3C',
    height: 40,
    borderRadius: 8,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 3 
  },
  viewContainer: {
    width: '90%'
  }
})