import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Splashscreen(props) {

  useEffect(() => {
    setTimeout(() => props.navigation.navigate('SongsList'), 3000);
  }, [])
  return (
    <View style={styles.container}>
      <Image source={require('../assets/music.jpg')} style={styles.imageStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
      height: 100,
      width: 100,
  }
});
