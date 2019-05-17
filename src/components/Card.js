import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.containerStyle}>
    
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRaduis: 2,
    borderColor: '#ddd',
    borderBottonWith: 0,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
})

export default Card;