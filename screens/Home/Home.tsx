import { ActivityIndicator, Button, FlatList, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native';
import CardItem from '../../components/Card';

type Props = {}

const Home = (props: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [DATA, setData] = useState([]);
  const navigation = useNavigation();
  const image = {uri: '/Users/marco/TransferDispatch/assets/background.png'};

  const getCard = async () => {
    try {
      const response = await fetch('https://transferdispatchapi.herokuapp.com/api/missions');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCard();
  }, []);

  interface MyDataItem {
    _id: string;
    mission_content: string;
    user_id: string;
    user_name: string;
    price: number;
    location: string;
    start_date: string;
    end_date: string;
    likes: string[];
    missionComments: string[];
  }
  
  const renderItem = ({ item }: { item: MyDataItem }) => (    
    <CardItem {...item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      {isLoading ? (
        <ActivityIndicator />
      ) : (        
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.flat}
        />        
      )}
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