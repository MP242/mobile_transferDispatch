import { Button, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Props = {}


const Home = (props: Props) => {
  const navigation = useNavigation();
  const image = {uri: '/Users/marco/TransferDispatch/assets/background.png'};
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <Text style={styles.text}>Home</Text>
      <Button title='Go détails'
      onPress={() => navigation.navigate('Account')}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
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