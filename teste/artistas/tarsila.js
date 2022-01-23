import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function Index({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Tarsila do Amaral'
 })

  return (

    <ScrollView style={styles.container}>
      <Image
       source={require('../../src/assets/3.png')}
       style={styles.image}
       resizeMode="cover"
       />
      <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Tarsila do Amaral</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1886-1973</Text>
          </View>
      <View style={styles.textContent}>
          <Text style={styles.textContent}>
            Tarsila de Aguiar do Amaral, internacionalmente conhecida como Tarsila do Amaral ou simplesmente Tarsila, é considerada uma das principais artistas modernistas da América Latina, descrita como "a pintora brasileira que melhor atingiu as aspirações brasileiras de expressão nacionalista em um estilo moderno."Ela foi membro do grupo Grupo dos Cinco, que era um grupo de cinco artistas brasileiros considerados a maior influência do movimento de arte moderna no Brasil. Tarsila também foi fundamental na formação do movimento Antropofagia (1928-1929); foi ela quem inspirou o famoso Manifesto Antropofágico de Oswald de Andrade.
          </Text>
        </View>
        <View>
        <Text style={[styles.title, { marginTop: '5%', fontSize: 22.5 } ]}>PRINCIPAIS OBRAS</Text>
        </View>
        <View>
          <Image
          source={require('../../src/assets/abaporu.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>Abaporu</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              O Abaporu talvez seja o quadro mais famoso pintado por Tarsila. Criada em 1928, a tela foi um presente oferecido por ela para o então marido, o escritor Oswald de Andrade. A tela promove uma exaltação da cultura nacional e é bastante representativa da fase antropofágica da pintora, ocorrida entre 1928 e 1930. O quadro atualmente faz parte do acervo do Museu de Arte Latino-Americana de Buenos Aires.
            </Text>
          </View>
        </View>
        <View>
          <Image
          source={require('../../src/assets/antropofagia.png')}
          style={styles.pinturasImg}
          resizeMode="cover"
          />
          <View opacity={0.6}>
           <Text style={[styles.title, { fontSize: 15 } ]}>Antropofagia</Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.textContent}>
              Antropofagia é um quadro que tem a digital da pintora e reúne traços comuns que já haviam sido testados em A negra e Abaporu. Há quem considere o quadro de fato uma fusão das duas pinturas. Chama a atenção às formas inchadas e com perspectivas alteradas utilizadas, assim como a predominância do verde explorado em plantas tipicamente brasileiras, ao fundo da paisagem. A tela encontra- se exposta na Fundação José e Paulina Nemirovsky, em São Paulo, e tem 79x101cm de dimensão.
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