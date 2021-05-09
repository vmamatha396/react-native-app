import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function SongsList(props) {
const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get('https://itunes.apple.com/search?term=Michael+jackson')
    .then(function ({data}) {
      if(data.results) {
          setSongs(data.results)
      }
    })
    .catch(function (error) {
      console.log(error);
    })

  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemStyle} onPress={() => props.navigation.navigate('Details', item)}>
        <Image source={{uri: item.artworkUrl60}} style={styles.imageStyles} />
          <View style={styles.textViewStyle}>
            <Text style={styles.trackTextStyle} numberOfLines={2}>{item.trackName}</Text>
            <Text style={styles.artistTextStyle}>Artist name:  {item.artistName}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
       <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{flex:1,}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyles: {
      height: 50,
      width: 50,
  },
  itemStyle: {
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  trackTextStyle: {
    color: 'blue',
    fontSize: 18,
  },
  textViewStyle: {
    paddingLeft: 20
  },
  artistTextStyle: {
    color: 'blue',
    fontSize: 16,
  }
});
