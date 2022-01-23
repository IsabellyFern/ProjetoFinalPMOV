import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function Index({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Leonardo Da Vinci'
 })

  return (

    <ScrollView style={styles.container}>
      <Image
       source={require('../../src/assets/2.png')}
       style={styles.image}
       resizeMode="cover"
       />
      <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Leonardo Da Vinci</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1452-1519</Text>
          </View>
      <View style={styles.textContent}>
          <Text style={styles.textContent}>
            Leonardo Da Vinci foi um pintor italiano e um dos maiores gênios de seu tempo. A tela "Mona Lisa", verdadeira obra-prima, o notabilizou como um dos principais pintores da Renascença.
          </Text>
          <Text style={styles.textContent}>
            Muitas de suas obras se perderam ou ficaram inacabadas. Conhecem-se apenas 12 telas de Leonardo de autenticidade reconhecida, sendo visível a importância que o artista concedeu aos contrastes entre luz e sombra e principalmente ao movimento.
          </Text>
          <Text style={styles.textContent}>
            Foi na pintura que da Vinci mais se destacou, porém foi genial em diversos campos, como engenharia, arquitetura, urbanismo, mecânica, cartografia, balística, hidráulica, anatomia etc.
          </Text>
        </View>
        <View>
        <Text style={[styles.title, { marginTop: '5%', fontSize: 22.5 } ]}>PRINCIPAIS OBRAS</Text>
        </View>
        <View>
          <Image
          source={require('../../src/assets/monalisa.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>Mona Lisa</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              A Mona Lisa (também conhecida como A Gioconda) é um óleo sobre madeira pintado por Leonardo entre 1503-1506. Esta pintura retrata Mona Lisa, a jovem esposa de Francesco de Giocondo, segundo Giorgio Vasari (1511-1574, pintor, arquiteto e biógrafo de vários artistas da renascença italiana).
            </Text>
          </View>
        </View>
        <View>
          <Image
          source={require('../../src/assets/santaceia.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>A Última Ceia</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
            A Última Ceia é uma pintura mural executada por Leonardo entre os anos 1493-1498 na parede do refeitório do Convento de Santa Maria Delle Grazie em Milão. Esta é a obra que vai dar notoriedade ao artista. Mas infelizmente, e devido ao fato de Leonardo ter pintado a composição com uma técnica de têmpera de óleo em vez da habitual têmpera de ovo, a obra começou a deteriorar-se pouco depois da sua finalização.
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
    marginTop: '1%'
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