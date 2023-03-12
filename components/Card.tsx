import { Button, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type Props = {price: number, name: string, location: string}

const Card = (props: Props) => {
    const navigation = useNavigation();
    const {price, name,location} = props.card;
  return (
    <View style={styles.cardContainer} onPress={() => navigation.navigate('Account')}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{name}</Text>
            <Text style={styles.cardHeaderText}> image</Text>
        </View>
        <View style={styles.cardBody}>
            <View style={styles.cardBodyLoc}>
                <Icon  name="map-pin" size={18} color="white" />
                <Text style={styles.cardBodyLocText}>Mission sur :</Text>            
                <Text style={styles.cardBodyLocText}>{location}</Text>            
            </View>
            <View style={styles.cardBodyLoc}>
                <Icon  name="map-pin" size={18} color="white" />
                <Text style={styles.cardBodyLocText}>Du </Text>            
                <Text style={styles.cardBodyLocText}>10/02/2023</Text>            
                <Text style={styles.cardBodyLocText}> au </Text>            
                <Text style={styles.cardBodyLocText}>15/02/2023 </Text>            
            </View>
        </View>
        <Text style={styles.text}>{price} $</Text>
        <View style={styles.likesComments}>
            <View style={styles.likes}>
                <AntDesign style={styles.Icon} name="hearto" size={18} color="white" />
                <Text style={styles.cardBodyLocText}> 2 </Text>
            </View>
            <View style={styles.likes}>
                <FontAwesome5 style={styles.Icon} name="comment" size={18} color="white" />
                <Text style={styles.cardBodyLocText}> 2 </Text>
            </View>
        </View>
        <Button title='Détails'
        onPress={() => navigation.navigate('Account')}
        />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {       
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#2D2B2B',

        width:Dimensions.get('window').width - 30,
        borderRadius:30,
        marginTop:20,
        marginBottom:20,
    },
    cardHeader: {
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#9933FF',
        
    },
    cardBody: {
        // backgroundColor:'blue',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:10,
    },
    cardHeaderText:{
        color: 'white',
        fontSize: 32,
        margin:20,
    },
    cardBodyLoc:{
        // backgroundColor:'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:10,
    },
    cardBodyLocText:{
        color: 'white',
        fontSize: 18,

    },
    likesComments:{
        // backgroundColor:'green',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        paddingRight:20,
    },
    likes:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#9933FF',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    Icon:{
        padding:10,
    }
})