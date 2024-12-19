import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: -35,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Image 
          source={require('../../assets/images/plusicon.png')} 
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4E3EC8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30, // Adjust width to fit your design
    height: 30, // Adjust height to fit your design
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TabButton;
