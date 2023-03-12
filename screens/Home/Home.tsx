import { Button, FlatList, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';


type Props = {}

// const DATA = [
//   {
//     price: 400,
//     name: 'First Item',
//     lcoation:'Cannes',
//   },
//   {
//     price: 400,
//     name: 'First Item',
//     lcoation:'Cannes',
//   },
//   {
//     price: 400,
//     name: 'Paul',
//     lcoation:'Cannes',
//   },
 
// ];

const Home = (props: Props) => {
  const [DATA, setData] = useState(null);
  const navigation = useNavigation();
  const image = {uri: '/Users/marco/TransferDispatch/assets/background.png'};

  useEffect(() => {
    fetch('https://transferdispatchapi.herokuapp.com/api/missions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <FlatList style={styles.flat} data={DATA.data}
        renderItem={({item}) => <Card card={item} />} >
      </FlatList>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flat: {
      marginBottom: 100,
    },
    container: {    
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#1F1F1F',
    },
    image: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
})