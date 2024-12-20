import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Header = ({icon2, icon, title, onIconPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity>{icon2}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    top: 16,
    // backgroundColor: '#f8f8f8',
  },
  iconContainer: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Header;
