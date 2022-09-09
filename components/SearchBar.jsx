import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '../env';

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        styles={{textInput: styles.textInput}}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
  },
  textInput: {
    borderColor: '#888',
    borderWidth: 1,
  },
});
