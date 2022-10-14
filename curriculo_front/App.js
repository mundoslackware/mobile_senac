import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor='#000000'
        barStyle='light-content'
        translucent={false} />

      <View style={styles.header}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imageHeader}
            source={require('./assets/vakalika.jpg')}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Jão Barba Ruiva</Text>
          <Text style={styles.textBody}>Contador sem Contato</Text>
          <Text style={styles.textBody}>Estou em um trabalho de Imobiliaria</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.endBody}>
          <Text style={styles.textEnd}>Email: piratasembarco@pirata.com.br</Text>
          <Text style={styles.textEnd}>Celular: (14) 1111-1111</Text>
          <Text style={styles.textEnd}>Telefone: (14) 1111-1111</Text>
          <Text style={styles.textEnd}>Rua: Saint Martin, 10-22, Centro</Text>
          <Text style={styles.textEnd}>CEP: 17100-000</Text>
          <Text style={styles.textEnd}>Cidade: Bauru</Text>
          <Text style={styles.textEnd}>Estado: São Paulo</Text>
          <Text style={styles.textEnd}>Pais: Brasil</Text>
        </View>

        <View style={styles.endBody}>
          <Text style={styles.textExperience}>Expêriencia</Text>
          <View style={styles.itensExperiencia}>
            <View>
              <Text style={styles.textItemHeader}>1997 - Atualmente</Text>
            </View>
            <View>
              <Text style={styles.textItemHeader}>Agente Imobiliario</Text>
              <Text style={styles.textItens}>R. Lima Consultoria</Text>
              <Text style={styles.textItensCorpo}> - Prospecto Imoveis</Text>
              <Text style={styles.textItensCorpo}> - Agendamento Visitas</Text>
              <Text style={styles.textItensCorpo}> - Avaliação Imoveis</Text>
              <Text style={styles.textItensCorpo}> - Orientação de Valores</Text>
              <Text style={styles.textItensCorpo}> - Indicação de Negócios</Text>
            </View>
          </View>
        </View>

        <View style={styles.endBody}>
          <Text style={styles.textExperience}>Formação</Text>
          <View style={styles.itensExperiencia}>
            <View>
              <Text style={styles.textItemHeader}>1985</Text>
            </View>
            <View>
              <Text style={styles.textItemHeader}>Técnico Contabilidade</Text>
              <Text style={styles.textItens}>Cebrep</Text>
              <Text style={styles.textItens}>Centro Brasileiro de Educação</Text>
              <Text style={styles.textItens}>Florianópolis</Text>
            </View>
          </View>
        </View>

        <View style={styles.habiDomas}>
          <View style={styles.idiomas}>
            <Text style={styles.textExperience}>Idiomas</Text>
            <View style={styles.itensExperiencia}>
              <View>
                <Text style={styles.textItemHeader}>Espanhol</Text>
                <Text style={styles.textItens}>Básico</Text>
              </View>
            </View>
          </View>

          <View style={styles.habilidade}>
            <Text style={styles.textExperience}>Habilidades</Text>
            <View style={styles.itensExperiencia}>
              <View>
                <Text style={styles.textItens}>Credibilidade</Text>
                <Text style={styles.textItens}>Contatos</Text>
                <Text style={styles.textItens}>Excelência</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    //backgroundColor: '#000000'
  },
  header: {
    flexDirection: 'row',
    borderColor: '#4FFF44',
    borderWidth: 5,
    margin: 2,
    backgroundColor: '#FFFFFF'
  },
  containerImage: {
    width: '19%'
  },
  containerText: {
    width: '80%'
  },
  imageHeader: {
    marginTop: 20,
    height: 180,
    width: 130,
    resizeMode: 'stretch'
  },
  textHeader: {
    marginTop: 40,
    marginLeft: 75,
    marginBottom: 10,
    paddingHorizontal: 2,
    textAlign: 'left',
    fontSize: 23,
    color: '#0000FF',
    fontWeight: 'bold'
  },
  textBody: {
    marginLeft: 75,
    marginBottom: 10,
    paddingHorizontal: 2,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textEnd: {
    marginLeft: 10,
    marginBottom: 2,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold'
  },
  endBody: {
    marginTop: 8,
    borderColor: '#4FFF44',
    borderWidth: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF'
  },
  itensExperiencia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textItemHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textItens: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  textItensCorpo: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textExperience: {
    fontSize: 20,
    color: '#0000FF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  idiomas: {
    marginTop: 8,
    borderColor: '#4FFF44',
    borderWidth: 5,
    margin: 2,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: '30%'
  },
  habilidade: {
    marginTop: 8,
    borderColor: '#4FFF44',
    borderWidth: 5,
    margin: 2,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: '68%'
  },
  habiDomas: {
    flexDirection: 'row'
  }
});