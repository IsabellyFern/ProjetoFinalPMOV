import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function Index({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Vincent Van Gogh'
 })

  return (

    <ScrollView style={styles.container}>
      <Image
       source={require('../../src/assets/4.png')}
       style={styles.image}
       resizeMode="cover"
       />
      <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Vincent Van Gogh</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1853-1890</Text>
          </View>
      <View style={styles.textContent}>
          <Text style={styles.textContent}>
            Vincent Willem van Gogh foi um pintor pós-impressionista holandês. Considerado uma das figuras mais famosas e influentes da história da arte ocidental, criou mais de dois mil trabalhos ao longo de pouco mais de uma década, incluindo 860 pinturas a óleo, grande parte das quais concluídas nos seus últimos dois anos de vida. As suas obras incluem paisagens, natureza-morta, retratos e autorretratos, caracterizados por cores dramáticas e vibrantes, além de pinceladas impulsivas e expressivas, que contribuíram para as fundações da arte moderna e trouxeram distinção para o estilo do pintor.
          </Text>
        </View>
        <View>
        <Text style={[styles.title, { marginTop: '5%', fontSize: 22.5 } ]}>PRINCIPAIS OBRAS</Text>
        </View>
        <View>
          <Image
          source={require('../../src/assets/noiteestrelada.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>A Noite Estrelada</Text>
          </View>
        </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              O quadro mais famoso do pintor holandês foi criado enquanto Van Gogh estava internado no hospital psiquiátrico de Saint-Rémy-de-Provence durante o ano de 1889.
            </Text>
          </View>
        <View>
          <Image
          source={require('../../src/assets/quarto.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>O Quarto</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              A pintura faz um registro do quarto que Van Gogh alugou em Arles. Na imagem vemos detalhes da vida do pintor como os móveis de madeira e as telas penduradas nas paredes.
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