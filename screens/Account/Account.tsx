import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

type Props = {}

const Account = (props: Props) => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <StatusBar
        barStyle='light-content'
        />
        <Text style={styles.text}>Account</Text>
        <Button title='Go Home'
        onPress={() => navigation.navigate('Home')} 
        />
    </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1F1F1F',
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})