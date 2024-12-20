import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const HorizontalDatePicker = ({dates}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <FlatList
      data={dates}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.dateContainer,
            selectedDate === item.date && styles.selectedDateContainer,
          ]}
          onPress={() => handleDateSelect(item.date)}>
          <Text
            style={[
              styles.dayText,
              selectedDate === item.date && styles.selectedText,
            ]}>
            {item.day}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDate === item.date && styles.selectedText,
            ]}>
            {item.date}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: '100%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 12,
  },
  dateContainer: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',

    width: 45,
    height: 74,
    gap: 10,
  },
  selectedDateContainer: {
    backgroundColor: '#4E3EC8',
  },
  dayText: {
    fontSize: 12,
    color: '#8C8B96',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
});

export default HorizontalDatePicker;
