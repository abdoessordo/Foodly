// import React from 'react';
// import Home from './screens/Home';

// export default function App() {
//   return <Home />;
// }

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Dimensions,
  Text,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import MapViewDirections from 'react-native-maps-directions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from './env.js';
import SearchBar from './components/SearchBar.jsx';
import Header from './components/header.jsx';
import GoButton from './components/goButtom.jsx';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;

export default function App(props) {
  const [region, setRegion] = useState({
    set: false,
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This App needs access to your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              setRegion(prev => ({
                ...prev,
                set: true,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }));
            },
            error => console.log(error),
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.log('err', err);
        console.warn(err);
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {region.set && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          }}
        />
      )}
      <Header />
      <GoButton />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
