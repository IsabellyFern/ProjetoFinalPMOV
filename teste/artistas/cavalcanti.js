import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function Index({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Di Cavalcanti'
 })

  return (

    <ScrollView style={styles.container}>
      <Image
       source={require('../../src/assets/1.png')}
       style={styles.image}
       resizeMode="cover"
       />
      <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Di Cavalcanti</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1897-1976</Text>
          </View>
      <View style={styles.textContent}>
          <Text style={styles.textContent}>
            Emiliano Augusto Cavalcanti de Albuquerque Melo, mais conhecido como Di Cavalcanti, foi um pintor modernista, desenhista, ilustrador, muralista e caricaturista brasileiro. Sua arte contribuiu significativamente para distinguir a arte brasileira de outros movimentos artísticos de sua época, através de suas reconhecidas cores vibrantes, formas sinuosas e temas tipicamente brasileiros como carnaval, mulatas e tropicalismos em geral.
          </Text>
        </View>
        <View>
        <Text style={[styles.title, { marginTop: '5%', fontSize: 22.5 } ]}>PRINCIPAIS OBRAS</Text>
        </View>
        <View>
          <Image
          source={require('../../src/assets/samba.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>Samba</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
            Samba é o nome dessa pintura de 1925. Foi nesse ano que Di Cavalcanti retornou de uma estadia na Europa, onde morou por 2 anos e teve contato com grandes nomes das vanguardas artísticas, como Picasso, Georges Braque, Léger e Matisse.
            Assim, é possível notar nessa obra características modernas marcantes como a profusão de cores e o uso de formas cilíndricas para construir os corpos dos personagens.
            Entretanto, como era próprio dos modernistas brasileiros, o artista faz aqui uma mescla dessas referências com a realidade de nosso povo, explorando o samba, a sensualidade da mulher e a boemia.
            </Text>
          </View>
        </View>
        <View>
          <Image
          source={require('../../src/assets/cincomocas.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>Cinco Moças de Guaratinguetá</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
            Em Cinco moças de Guaratinguetá, de 1930, o artista deixa mais uma vez explícita a influência de movimentos como o cubismo e o fauvismo. 
            Um dos artistas que inspirou fortemente Di Cavalcanti foi Pablo Picasso. Nessa obra nota-se a conexão entre esses dois pintores através da maneira como as moças são retratadas, com corpos volumosos e formas simples e estilizadas.
            </Text>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#c6bef2',
  },
  image:{
    width: '100%',
    resizeMode: 'contain',
    height: 325,
    marginTop: '5%'
  },
  title: {
    textAlign: 'center',
    marginTop: '1%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '1%',
    paddingHorizontal: '1%',
    textAlign: 'justify',
  },
  pinturasImg: {
    width: '100%',
    resizeMode: 'contain',
    height: 200,
    marginTop: '5%'
  }
});