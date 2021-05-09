import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function Details(props) {
const data = props.route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: data.artworkUrl60}} style={styles.imageStyles} />
      <View style={styles.textViewStyle}>
      <Text style={styles.trackTextStyle} numberOfLines={2}>{data.trackName}</Text>
      <Text style={styles.artistTextStyle}>Artist:  {data.artistName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  imageStyles: {
      height: 300,
      width: 300,
  },
  trackTextStyle: {
    fontSize: 18,
  },
  textViewStyle: {
    paddingLeft: 20,
    alignItems: 'center'
  },
  artistTextStyle: {
    fontSize: 16,
  }
});
