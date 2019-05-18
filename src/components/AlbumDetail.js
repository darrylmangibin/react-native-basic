import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            source={{ uri: album.thumbnail_image }}
            style={styles.thumbnailStyle}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          source={{ uri: album.image}}
          style={styles.imageStyle}
        />
      </CardSection>
      <CardSection>
        <Button 
          onPress={() => Linking.openURL(album.url)}
        >Buy Now!</Button>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    width: '100%'
  }
})

export default AlbumDetail;